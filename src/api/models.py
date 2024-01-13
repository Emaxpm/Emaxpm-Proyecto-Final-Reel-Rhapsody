from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    avatar = db.Column(db.String(500), unique=False, nullable=True)
    favorites = db.relationship("Favorites", backref = "user")
    review = db.relationship("Review", backref = "user")
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "avatar": self.avatar,
        }
    
class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    movie_id = db.Column(db.Integer, nullable=True)
    serie_id = db.Column(db.Integer, nullable=True)
    url_img = db.Column(db.String(500), unique=True, nullable=True)
    title = db.Column(db.String(120), unique=True, nullable=True)
    relese_data = db.Column(db.String(120), unique=True, nullable=True)
    popularity = db.Column(db.String(120), unique=True, nullable=True)
    vote_average = db.Column(db.String(120), unique=True, nullable=True)



    
    def __repr__(self):
        return '<Favorites %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id, 
            "movie_id": self.movie_id,
            "serie_id" : self.serie_id,
            "url_img" : self.url_img,
            "title" : self.title,
            "relese_data" : self.relese_data,
            "vote_average" : self.vote_average         
        }

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    rate = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(300), nullable=False)
    movie_id = db.Column(db.Integer, nullable=True)
    serie_id = db.Column(db.Integer, nullable=True)
    
    def __repr__(self):
        return '<Review %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user": User.query.get(self.user_id).serialize()["full_name"],
            "rate": self.rate,
            "comment" : self.comment,
            "movie_id": self.movie_id,
            "serie_id" : self.serie_id   
        }