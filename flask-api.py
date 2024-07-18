import functions_framework
import sqlalchemy
import logging
import flask
from flask import jsonify

logging.basicConfig(level=logging.DEBUG)

# Database configuration
connection_name = "hack-team-eletech:us-central1:eletech-proto-db"
db_name = "eletech_database"
db_user = "eletech-proto-login"
db_password = "towel8thanks3STEER"

driver_name = 'mysql+pymysql'
query_string = dict({"unix_socket": "/cloudsql/{}".format(connection_name)})

@functions_framework.http
def fetch_memory_data(request: flask.Request):
    print(request.path)
    try:
        # Create the SQLAlchemy engine
        db = sqlalchemy.create_engine(
            sqlalchemy.engine.url.URL.create(
                drivername=driver_name,
                username=db_user,
                password=db_password,
                database=db_name,
                query=query_string,
            ),
            pool_size=5,
            max_overflow=2,
            pool_timeout=30,
            pool_recycle=1800
        )

        logging.debug("SQLAlchemy engine created successfully.")

        if request.path == '/api/data':
            # Fetch data from the Memory table
            with db.connect() as conn:
                result = conn.execute("SELECT * FROM Memory").fetchall()
                logging.debug(f"Fetched data: {result}")

            # Convert result to a list of dictionaries
            memory_data = [dict(row) for row in result]
            
            logging.debug(f"Formatted data: {memory_data}")
            return memory_data
        elif request.path == '/api/alerts':
            # Fetch data from the Memory table
            with db.connect() as conn:
                result = conn.execute("SELECT * FROM Memory WHERE alert=1 ").fetchall()
                logging.debug(f"Fetched data: {result}")

            # Convert result to a list of dictionaries
            memory_data = [dict(row) for row in result]
            
            logging.debug(f"Formatted data: {memory_data}")
            return memory_data
        elif request.path == '/api/alerts-locations':
            # Fetch data from the Memory table
            with db.connect() as conn:
                result = conn.execute("SELECT location FROM Memory WHERE alert=1 AND type='g'").fetchall()
                logging.debug(f"Fetched data: {result}")

            # Convert result to a list of dictionaries
            memory_data = [dict(row) for row in result]
            
            logging.debug(f"Formatted data: {memory_data}")
            return memory_data

    except Exception as e:
        logging.error(f"Error: {str(e)}")
        return f"Error: {str(e)}", 500
