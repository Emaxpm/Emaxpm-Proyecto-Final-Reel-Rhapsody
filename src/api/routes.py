"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import request, jsonify, url_for, Blueprint
from api.models import db, User, Favorites
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

        return jsonify({"access_token": access_token, "fullName": user.full_name, "id": user.id}), 200

    except Exception as e:
        print(f"Error en la ruta /login: {str(e)}")

        return jsonify({"error": f"Ocurrió un error al procesar la solicitud: {str(e)}"}), 500


@api.route('/user/favorites', methods=['GET'])
@jwt_required()
def get_all_favorites():
    user_id = get_jwt_identity()
    favorites = Favorites.query.filter_by(user_id = user_id).all()
    if len(favorites) < 1:
        return jsonify({"msg": "not found"}), 404
    serialized_favorites = list(map(lambda x: x.serialize(), favorites))
    return serialized_favorites, 200

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

