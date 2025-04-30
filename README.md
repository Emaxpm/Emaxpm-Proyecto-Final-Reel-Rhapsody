🎬 WebApp - Recomendador de Películas y Series
Aplicación web full-stack desarrollada con React.js en el frontend y Python/Flask en el backend. Permite a los usuarios explorar, buscar y guardar películas y series, así como dejar comentarios y personalizar su perfil.

Recomendación y visualización de películas, series y actores.

Uso de API externa para obtener información multimedia y API local para la gestión de usuarios y datos internos.

Proyecto basado en el boilerplate de 4Geeks Academy.

🚀 Tecnologías utilizadas
Frontend: React, Bootstrap

Backend: Python, Flask

Base de datos: MySQL

ORM: SQLAlchemy

Autenticación: JWT + sesiones

Extras: Paginación, rutas privadas, búsqueda aleatoria de contenido

🔐 Funcionalidades clave
Registro e inicio de sesión

Acceso a rutas privadas solo para usuarios autenticados

Comentarios y reseñas sobre películas y series

Lista de favoritos personalizable

Perfil de usuario editable

Vista detallada de películas, series y actores

Búsqueda aleatoria de contenido con un solo clic

⚙️ Instalación del Backend
Requiere Python 3.8+, Pipenv, y MySQL (o cualquier motor compatible).

Clona el repositorio:

bash
Copiar
Editar
git clone [https://github.com/tu-usuario/tu-repo.git](https://github.com/Emaxpm/Emaxpm-Proyecto-Final-Reel-Rhapsody.git)
Instala los paquetes de Python:

bash
Copiar
Editar
pipenv install
Crea el archivo .env desde el ejemplo:

bash
Copiar
Editar
cp .env.example .env
Configura tu base de datos y establece DATABASE_URL en .env. Ejemplos:

Motor	URL de conexión
SQLite	sqlite:///test.db
MySQL	mysql://usuario:contraseña@localhost:3306/nombre_db
PostgreSQL	postgres://usuario:contraseña@localhost:5432/nombre_db

Ejecuta migraciones:

bash
Copiar
Editar
pipenv run migrate
pipenv run upgrade
Ejecuta la aplicación:

bash
Copiar
Editar
pipenv run start
⚙️ Instalación del Frontend
Asegúrate de tener Node.js 14+ instalado.

Dirígete a la carpeta del frontend:

bash
Copiar
Editar
cd frontend
Instala las dependencias:

bash
Copiar
Editar
npm install
Ejecuta el servidor de desarrollo:

bash
Copiar
Editar
npm run start
📄 Comandos útiles
Deshacer una migración
bash
Copiar
Editar
pipenv run downgrade
Insertar usuarios de prueba
bash
Copiar
Editar
flask insert-test-users 5
Insertar datos personalizados
Edita la función insert_test_data en src/api/commands.py y luego ejecuta:

bash
Copiar
Editar
pipenv run insert-test-data
🌍 Despliegue
Esta aplicación es compatible con Heroku, Render.com y otras plataformas. Consulta esta guía oficial de despliegue para más detalles.

🤝 Contribuciones
Proyecto basado en el template de 4Geeks Academy y adaptado para una aplicación personalizada de recomendación de contenido audiovisual. Abierto a mejoras y colaboraciones.

Encuentra más recursos y plantillas en el GitHub de 4Geeks Academy.
