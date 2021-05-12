"""empty message

Revision ID: 1995dd25ab19
Revises: 
Create Date: 2021-05-12 00:33:32.290187

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1995dd25ab19'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('test',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('tema', sa.String(length=80), nullable=False),
    sa.Column('type_test', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=220), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('birthday', sa.String(length=120), nullable=False),
    sa.Column('gender', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('email')
    )
    op.create_table('calificaciones',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.Column('id_test', sa.Integer(), nullable=True),
    sa.Column('calificacion', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_test'], ['test.id'], ),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('question',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('test_log', sa.String(length=120), nullable=False),
    sa.Column('frase', sa.String(length=80), nullable=False),
    sa.Column('option', sa.String(length=80), nullable=False),
    sa.Column('id_test', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_test'], ['test.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('test_log'),
    sa.UniqueConstraint('test_log')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('question')
    op.drop_table('calificaciones')
    op.drop_table('user')
    op.drop_table('test')
    # ### end Alembic commands ###