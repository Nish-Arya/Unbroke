"""add hashed password and monthly_income to users table

Revision ID: 47271149c5f0
Revises: 6327ed0403e8
Create Date: 2020-10-07 12:20:29.900939

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '47271149c5f0'
down_revision = '6327ed0403e8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('hashed_password', sa.Binary(), nullable=False))
    op.add_column('users', sa.Column('monthly_income', sa.Integer(), nullable=False))
    op.drop_constraint('users_username_key', 'users', type_='unique')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('users_username_key', 'users', ['username'])
    op.drop_column('users', 'monthly_income')
    op.drop_column('users', 'hashed_password')
    # ### end Alembic commands ###