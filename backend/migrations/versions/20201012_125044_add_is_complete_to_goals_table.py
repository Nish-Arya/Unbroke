"""add is_complete to goals table

Revision ID: 3449a2217ed2
Revises: d572429fcaab
Create Date: 2020-10-12 12:50:44.031641

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3449a2217ed2'
down_revision = 'd572429fcaab'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('goals', sa.Column('is_complete', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('goals', 'is_complete')
    # ### end Alembic commands ###
