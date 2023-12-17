"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from flask_bcrypt import Bcrypt
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)
bcrypt = Bcrypt()

# Allow CORS requests to this API
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
        # Registrar detalles del error en los registros del servidor
        current_app.logger.error(f"Error al crear usuario: {str(e)}")

        # Devolver un mensaje genérico al cliente
        return jsonify({"error": "Ocurrió un error al procesar la solicitud"}), 500
