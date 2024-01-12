"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import request, jsonify, url_for, Blueprint
from api.models import db, User, Favorites, Review 
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import json
from flask_jwt_extended import create_access_token, get_jwt_identity,jwt_required,JWTManager
from flask_bcrypt import Bcrypt
from flask import current_app

api = Blueprint('api', __name__)
bcrypt = Bcrypt()
jwt = JWTManager()

CORS(api)

@api.route('/sign_up', methods=['POST'])
def create_one_user():
    try:
        
        body = request.get_json()
        print(body)
        required_fields = ["fullName", "email", "password"]
        for field in required_fields:
            if field not in body or not body[field]:
                return jsonify({"error": f"El campo '{field}' es requerido y no puede estar vacío"}), 400

        raw_password = body.get('password')
        password_hash = bcrypt.generate_password_hash(raw_password).decode('utf-8')

        new_user = User (
        full_name = body.get("fullName"),
        email= body.get("email"),
        password = password_hash,
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify ({"msg": "Usuario creado exitosamente"}), 200

    except Exception as e:
        current_app.logger.error(f"Error al crear usuario: {str(e)}")

        return jsonify({"error": "Ocurrió un error al procesar la solicitud"}), 500
    
@api.route("/login", methods=['POST'])
def login():
    try:
        data = request.get_json()

        if not data or 'email' not in data or 'password' not in data:
            return jsonify({"error": "Se requieren tanto el correo electrónico como la contraseña."}), 400
        
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({"error": "Faltó algún dato en el cuerpo de la solicitud."}), 400

        user = User.query.filter_by(email=email).first()

        if not user:
            return jsonify({"error": "Usuario no encontrado."}), 404

        if not bcrypt.check_password_hash(user.password, password):
            return jsonify({"error": "Contraseña incorrecta."}), 401

        access_token = create_access_token(identity=user.id)

        return jsonify({"access_token": access_token, "user": user.serialize()}), 200

    except Exception as e:
        print(f"Error en la ruta /login: {str(e)}")

        return jsonify({"error": f"Ocurrió un error al procesar la solicitud: {str(e)}"}), 500

@api.route('/users', methods=['GET'])
def users():
    users = User.query.all()
    if users:
        serialized_users = [user.serialize() for user in users]
        return jsonify(serialized_users), 200
    else:
        return jsonify({"msg": "No users found"}), 404

@api.route('/isAuth', methods=['GET'])
@jwt_required()
def is_auth():
    user_id=get_jwt_identity()
    user = User.query.get(user_id)
    if user is None:
        return False, 404
    return jsonify(user.serialize()), 200

@api.route('/user/favorites', methods=['GET'])
@jwt_required()
def get_all_favorites():
    user_id = get_jwt_identity()
    favorites = Favorites.query.filter_by(user_id = user_id).all()
    if len(favorites) < 1:
        return jsonify({"msg": "not found"}), 404
    serialized_favorites = list(map(lambda x: x.serialize(), favorites))
    return jsonify(serialized_favorites), 200

@api.route('/user/favorites', methods=['POST'])
@jwt_required()
def add_favorites():
    user_id = get_jwt_identity()
    body = request.json 

    if not body.get("movie_id") and not body.get("serie_id"):
        return jsonify({"error": "Se requiere 'movie_id' o 'serie_id' para agregar a favoritos"}), 400
    
    new_favorite = Favorites(
        user_id = user_id,
        movie_id = body.get("movie_id"),
        serie_id = body.get("serie_id"),
    )
    db.session.add(new_favorite)
    db.session.commit()
    return jsonify({"msg": "Agregado exitosamente", "added_favorite": new_favorite.serialize()})

@api.route('/user/favorite', methods=['DELETE'])
@jwt_required()
def delete_favorite():
    user_id = get_jwt_identity()
    body = request.json

    # Verificar si el body tiene la clave 'movie_id' o 'serie_id'
    if "movie_id" in body:
        if body["movie_id"] is not None:
            favorite = Favorites.query.filter_by(movie_id=body["movie_id"], user_id=user_id).first()

    if "serie_id" in body:
        if body["serie_id"] is not None:
            favorite = Favorites.query.filter_by(serie_id=body["serie_id"], user_id=user_id).first()

    if favorite is None:
        return jsonify({"msg": "Favorite not found"}), 404

    db.session.delete(favorite)
    db.session.commit()
    return jsonify({"msg": "Favorite deleted"}), 200

@api.route('/user', methods=['PUT'])
@jwt_required()
def add_():
    user_id = get_jwt_identity()
    body = request.json 
    user = User.query.get(user_id)
    if not user:
            return jsonify({"error": "Usuario no encontrado."}), 404
    for key in body:
        for col in user.serialize():
            if key == col and body[key] != "" and body[key] is not None and key != "id":
                setattr(user, col, body[key])
    db.session.commit()
    return jsonify({"msg": "Modificado exitosamente"})

@api.route('/reviews/<string:type>/<int:media_id>', methods=['GET'])
def get_all_reviews(type, media_id):
    if type == "movie":
        reviews = Review.query.filter_by(movie_id = media_id).all()
    elif type == "serie":
        reviews = Review.query.filter_by(serie_id = media_id).all()
    if len(reviews) < 1:
        return jsonify({"msg": "not found"}), 404
    serialized_reviews = list(map(lambda x: x.serialize(), reviews))
    return serialized_reviews, 200

@api.route('/reviews/<string:type>/<int:media_id>', methods=['POST'])
@jwt_required()
def add_review(type, media_id):
    
    data = request.json
    comment = data.get('comment')
    rate = data.get('rate')
    user_id = get_jwt_identity()

    if type == "movie":
        new_review = Review(movie_id=media_id, comment=comment, rate=rate, user_id=user_id)
    elif type == "serie":
        new_review = Review(serie_id=media_id, comment=comment, rate=rate, user_id=user_id)

    db.session.add(new_review)
    db.session.commit()

    return jsonify({"msg": "review added successfully"}), 201

@api.route('/reviews/<string:type>/<int:media_id>/<int:review_id>', methods=['DELETE'])
@jwt_required()
def delete_review(type, media_id, review_id):
    try:
        user_id = get_jwt_identity()

        if type == "movie":
            review = Review.query.filter_by(id=review_id, movie_id=media_id, user_id=user_id).first()
        elif type == "serie":
            review = Review.query.filter_by(id=review_id, serie_id=media_id, user_id=user_id).first()
        else:
            return jsonify({"error": "Invalid media type"}), 400

        if review is None:
            return jsonify({"msg": "Review not found"}), 404

        db.session.delete(review)
        db.session.commit()

        return jsonify({"msg": "Review successfully deleted"}), 200

    except Exception as e:
        print(f"Error deleting review: {str(e)}")
        return jsonify({"error": "An error occurred while processing the request"}), 500


#debajo de estas líneas no puede haber nada
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3000))
    api.run(host='0.0.0.0', port=PORT, debug=False)
