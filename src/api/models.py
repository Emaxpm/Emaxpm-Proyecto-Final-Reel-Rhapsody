from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    favorites = db.relationship("Favorites", backref = "user")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Movies(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    original_language = db.Column(db.String(120), unique=True, nullable=False)
    original_title = db.Column(db.String(100), unique=False, nullable=False)
    overview = db.Column(db.String(100), unique=False, nullable=False)
    popularity = db.Column(db.String(100), unique=False, nullable=False)
    poster_path = db.Column(db.String(100), unique=False, nullable=False)
    release_date = db.Column(db.String(100), unique=False, nullable=False)
    title = db.Column(db.String(100), unique=False, nullable=False)
    video = db.Column(db.String(100), unique=False, nullable=False)
    vote_average = db.Column(db.String(100), unique=False, nullable=False)
    vote_count = db.Column(db.String(100), unique=False, nullable=False)
    favorites = db.relationship("Favorites", backref = "movies")

    def __repr__(self):
        return '<Movies %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "original_language": self.original_language,
            "original_title": self.original_title,
            "overview": self.overview,
            "popularity": self.popularity,
            "poster_path ": self.poster_path ,
            "release_date": self.release_date,
            "video": self.video,
            "vote_average": self.vote_average,
            "title": self.title,
            "vote_count": self.vote_count,
        }
    
class Series(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    original_language = db.Column(db.String(120), unique=True, nullable=False)
    original_name = db.Column(db.String(100), unique=False, nullable=False)
    overview = db.Column(db.String(100), unique=False, nullable=False)
    popularity = db.Column(db.String(100), unique=False, nullable=False)
    poster_path = db.Column(db.String(100), unique=False, nullable=False)
    first_air_date = db.Column(db.String(100), unique=False, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    vote_average = db.Column(db.String(100), unique=False, nullable=False)
    vote_count = db.Column(db.String(100), unique=False, nullable=False)
    favorites = db.relationship("Favorites", backref = "series")

    def __repr__(self):
        return '<Series %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "original_language": self.original_language,
            "original_name": self.original_name,
            "overview": self.overview,
            "popularity": self.popularity,
            "poster_path": self.poster_path,
            "first_air_date": self.first_air_date,
            "vote_average": self.vote_average,
            "vote_count": self.vote_count,
        }
    
class Actors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    gender = db.Column(db.String(120), unique=True, nullable=False)
    known_for_department = db.Column(db.String(100), unique=False, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    original_name = db.Column(db.String(100), unique=False, nullable=False)
    popularity = db.Column(db.String(100), unique=False, nullable=False)
    profile_path = db.Column(db.String(100), unique=False, nullable=False)
    known_for = db.Column(db.String(100), unique=False, nullable=False)
    favorites = db.relationship("Favorites", backref = "actors")

    def __repr__(self):
        return '<Actors %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "gender": self.gender,
            "known_for_department": self.known_for_department,
            "original_name": self.original_name,
            "popularity": self.popularity,
            "profile_path": self.profile_path,
            "known_for": self.known_for,
        }
    
class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    movies_id = db.Column(db.Integer, db.ForeignKey("movies.id"), nullable=True)
    series_id = db.Column(db.Integer, db.ForeignKey("series.id"), nullable=True)
    actors_id = db.Column(db.Integer, db.ForeignKey("actors.id"), nullable=True)

    def __repr__(self):
        return '<Favorites %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "movies_id": self.movies_id,
            "series_id": self.series_id,
            "actors_id": self.actors_id,
        }