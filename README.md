🎬 WebApp - Reel-Rhapsody
Recomendador de Películas y Series.
Aplicación web full-stack desarrollada con React.js en el frontend y Python/Flask en el backend.
Permite a los usuarios explorar, buscar y guardar películas y series, dejar comentarios y personalizar su perfil.

---

🌟 Características principales
🔍 Recomendación y visualización de películas, series y actores

🔗 Integración con API externa para información multimedia

🗄️ API propia para gestión de usuarios y datos internos

🎛️ Basada en el boilerplate de 4Geeks Academy

---

🚀 Tecnologías utilizadas
Categoría	  Tecnología
Frontend:	  React, Bootstrap
Backend:	    Python, Flask
Base de datos:	MySQL
ORM:	        SQLAlchemy
Autenticación:	JWT + sesiones
Extras:	  Paginación, rutas privadas, búsqueda aleatoria, PayPal

---

🔐 Funcionalidades clave
Registro e inicio de sesión de usuarios

Acceso a rutas privadas para usuarios autenticados

Comentarios y reseñas sobre películas y series

Lista de favoritos personalizada

Perfil de usuario editable

Vista detallada de películas, series y actores

Búsqueda aleatoria con un solo clic

Integración con PayPal para pagos

---

⚙️ Instalación
Backend:

# Instalar dependencias
pipenv install

# Crear archivo de entorno
cp .env.example .env

# Configurar tu base de datos en el archivo .env
# Ejemplos:
# SQLite     -> sqlite:///test.db
# MySQL      -> mysql://usuario:contraseña@localhost:3306/nombre_db
# PostgreSQL -> postgres://usuario:contraseña@localhost:5432/nombre_db

# Ejecutar migraciones
pipenv run migrate
pipenv run upgrade

# Iniciar la aplicación
pipenv run start

---

Frontend:
Requisitos:

Node.js 14+

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run start

---

![Inicio](https://github.com/user-attachments/assets/a2f9de98-874a-4242-8452-044dedf7ed05)

![Registro](https://github.com/user-attachments/assets/cee47cc9-1f48-4d6a-8bcc-b09f25309625)

![Paginación de Peliculas](https://github.com/user-attachments/assets/54a515d9-6ad0-43da-8434-e95814afd371)



