from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.Binary(100), nullable=False)
  monthly_income = db.Column(db.Integer, nullable=False)

  expenses = db.relationship("Expense", back_populates="user")

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
  amount = db.Column(db.Integer, nullable = False)
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
  