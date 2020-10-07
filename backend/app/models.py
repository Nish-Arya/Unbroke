from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.Binary(100), nullable=False)
  monthly_income = db.Column(db.Integer, nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "monthly_income": self.monthly_income
    }
