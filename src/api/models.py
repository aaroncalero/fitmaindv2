from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
class User(db.Model):
    __tablename__= 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(220), unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    birthday = db.Column(db.String(120), unique=False, nullable=False)
    gender = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    cant_question = db.Column(db.String(120), unique=True, nullable=False)
    nota_alta = db.Column(db.String(120), unique=True, nullable=False)
    
def __repr__(self):
    return '<User %r>' % self.username

def serialize(self):
    return {
        "id": self.id,
        "email": self.email,
        "birthday":self.birthday,
        "gender":self.gender,
        "name":self.name,
        "cant_question":self.cant_question,
        "nota_alta":self.nota_alta
            # do not serialize the password, its a security breach
    }	

 

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    test_log = db.Column(db.String(120), unique=True, nullable=False)
    frase = db.Column(db.String(80), unique=False, nullable=False)
    option_correcta = db.Column(db.String(80), unique=False, nullable=False)
    option_mal1 = db.Column(db.String(80), unique=False, nullable=False)
    option_mal2 = db.Column(db.String(80), unique=False, nullable=False)
    option_mal3 = db.Column(db.String(80), unique=False, nullable=False)
    #id_test=db.Column(db.Integer, db.ForeignKey('test.id'))
    #test = db.relationship("Test")

    def __repr__(self):
        return '<test_log %r>' % self.test_log

    def serialize(self):
        return {
            "id": self.id,
            "test_log": self.test_log,
            "frase": self.frase,
            "option_correcta": self.option_correcta,
            "option_mal1": self.option_mal1,
            "option_mal2": self.option_mal2,
            "option_mal3": self.option_mal3,
            # do not serialize the password, its a security breach
        }
# from flask_sqlalchemy import SQLAlchemy

# db = SQLAlchemy()

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     password = db.Column(db.String(80), unique=False, nullable=False)
#     is_active = db.Column(db.Boolean(), unique=False, nullable=False)

#     def __repr__(self):
#         return '<User %r>' % self.username

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             # do not serialize the password, its a security breach
#         }
