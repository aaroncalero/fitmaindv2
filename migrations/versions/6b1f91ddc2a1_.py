"""empty message

Revision ID: 6b1f91ddc2a1
Revises: 
Create Date: 2021-05-17 15:47:59.946588

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6b1f91ddc2a1'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('pregunta',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('test_log', sa.String(length=500), nullable=False),
    sa.Column('frase', sa.String(length=200), nullable=False),
    sa.Column('option_correcta', sa.String(length=100), nullable=False),
    sa.Column('option_mal1', sa.String(length=100), nullable=False),
    sa.Column('option_mal2', sa.String(length=100), nullable=False),
    sa.Column('option_mal3', sa.String(length=100), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=220), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('birthday', sa.String(length=120), nullable=False),
    sa.Column('gender', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('cant_question', sa.String(length=120), nullable=False),
    sa.Column('nota_alta', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('pregunta')
    # ### end Alembic commands ###
