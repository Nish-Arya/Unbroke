from flask_sqlalchemy import SQLAlchemy
import os
import requests

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.Binary(100), nullable=False)
  monthly_income = db.Column(db.Integer, nullable=False)

  expenses = db.relationship("Expense", back_populates="user")
  goals = db.relationship("Goal", back_populates="user")

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "monthly_income": self.monthly_income,
      "expenses": [expense.to_dict() for expense in self.expenses]
    }

class Expense_Category(db.Model):
  __tablename__ = 'expense_categories'
  
  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(40), nullable = False)

  expenses = db.relationship("Expense", back_populates="expense_category")

  def to_dict(self):
    return self.name

class Expense(db.Model):
  __tablename__ = 'expenses'

  id = db.Column(db.Integer, primary_key = True)
  description = db.Column(db.String(40), nullable = False)
  amount = db.Column(db.Float, nullable = False)
  category_id = db.Column(db.Integer, db.ForeignKey("expense_categories.id"))
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

  user = db.relationship("User", back_populates="expenses")
  expense_category = db.relationship("Expense_Category", back_populates="expenses")

  def to_dict(self):
    return {
      "id": self.id,
      "description": self.description,
      "amount": self.amount,
      "category_id": self.category_id,
      "user_id": self.user_id,
      "expense_category": self.expense_category.to_dict()
    }
  
class Goal(db.Model):
  __tablename__ = 'goals'

  id = db.Column(db.Integer, primary_key = True)
  description = db.Column(db.String(60), nullable = False)
  amount = db.Column(db.Float, nullable = False)
  completion_year = db.Column(db.Integer, nullable = False)
  completion_month = db.Column(db.String(10), nullable = False)
  user_id = user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  is_complete = db.Column(db.Boolean, default = False)

  user = db.relationship("User", back_populates="goals")

  def to_dict(self):
    return {
      "id": self.id,
      "description": self.description,
      "amount": self.amount,
      "completion_year": self.completion_year,
      "completion_month": self.completion_month,
      "user_id": self.user_id,
      "is_complete": self.is_complete
    }

class Holding(db.Model):
  __tablename__ = 'holdings'

  id = db.Column(db.Integer, primary_key = True)
  ticker = db.Column(db.String(60), nullable = False)
  buy_price = db.Column(db.Float, nullable = False)
  num_of_shares = db.Column(db.Float, nullable = False)
  user_id = user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

  def to_dict(self):

    api_key = os.environ.get("FINHUB_API_KEY")
    res = requests.get(f'https://finnhub.io/api/v1/quote?symbol={self.ticker.upper()}&token={api_key}').json()

    return {
      "id": self.id,
      "ticker": self.ticker,
      "buy_price": self.buy_price,
      "num_of_shares": self.num_of_shares,
      "user_id": self.user_id,
      "quote": res
    }
