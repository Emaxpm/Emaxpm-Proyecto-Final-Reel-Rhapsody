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
        }
    
class Movies(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    original_language = db.Column(db.String(120), unique=True, nullable=False)
    original_title = db.Column(db.String(120), unique=True, nullable=False)
    overview = db.Column(db.String(250), unique=False, nullable=False)
    popularity = db.Column(db.String(250), unique=False, nullable=False)
    poster_path = db.Column(db.String(250), unique=False, nullable=False)
    release_date = db.Column(db.String(250), unique=False, nullable=False)
    title = db.Column(db.String(250), unique=False, nullable=False)
    video = db.Column(db.String(250), unique=False, nullable=False)
    vote_average = db.Column(db.String(250), unique=False, nullable=False)
    vote_count = db.Column(db.String(250), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "original_language": self.original_language,
            "original_title": self.original_title,
            "overview": self.overview,
            "popularity": self.popularity,
            "poster_path": self.poster_path,
            "release_date": self.release_date,
            "title": self.title,
            "video ": self.video ,
            "vote_average": self.vote_average,
            "vote_count": self.vote_count,
        }
    
class Series(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    origin_country = db.Column(db.String(120), unique=True, nullable=False)
    original_language = db.Column(db.String(120), unique=True, nullable=False)
    original_name = db.Column(db.String(120), unique=True, nullable=False)
    overview = db.Column(db.String(250), unique=False, nullable=False)
    popularity = db.Column(db.String(250), unique=False, nullable=False)
    poster_path = db.Column(db.String(250), unique=False, nullable=False)
    first_air_date = db.Column(db.String(250), unique=False, nullable=False)
    name = db.Column(db.String(250), unique=False, nullable=False)
    vote_average = db.Column(db.String(250), unique=False, nullable=False)
    vote_count = db.Column(db.String(250), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "origin_country": self.origin_country ,
            "original_language": self.original_language,
            "original_name": self.original_name,
            "overview": self.overview,
            "popularity": self.popularity,
            "poster_path": self.poster_path,
            "first_air_date": self.first_air_date,
            "name": self.name,
            "vote_average": self.vote_average,
            "vote_count": self.vote_count,
        }
    
class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    movie_id = db.Column(db.Integer, nullable=True)
    serie_id = db.Column(db.Integer, nullable=True)
    
    def __repr__(self):
        return '<Favorites %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id, 
            "movie_id": self.movie_id,
            "serie_id" : self.serie_id   
        }