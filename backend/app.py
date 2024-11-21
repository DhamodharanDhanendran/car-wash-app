from flask import Flask
from routes.auth import auth_blueprint
from routes.customers import customer_blueprint
from routes.services import service_blueprint
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config.Config')

db = SQLAlchemy(app)

# Register Blueprints
app.register_blueprint(auth_blueprint, url_prefix='/auth')
app.register_blueprint(customer_blueprint, url_prefix='/customers')
app.register_blueprint(service_blueprint, url_prefix='/services')

if __name__ == "__main__":
    app.run(debug=True)