import functions_framework
from flask import Flask, request, jsonify
import logging
import sqlalchemy
import requests

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Database configuration
connection_name = "hack-team-eletech:us-central1:eletech-proto-db"
db_name = "eletech_database"
db_user = "eletech-proto-login"
db_password = "towel8thanks3STEER"

driver_name = 'mysql+pymysql'
query_string = dict({"unix_socket": "/cloudsql/{}".format(connection_name)})


def send_post_request(string):
    url = 'https://send-email-test-labtpnhgxa-uc.a.run.app/send-email-test'
    payload = {
        'to': 'hamman224@gmail.com',  
        'subject': 'Alert Notification- Your loved one is '+ string,
        'body': 'Please check in with your loved one!'
    }
    requests.post(url, payload)

def insert_into_db(data):
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

        with db.connect() as conn:
            sql = "INSERT INTO Memory (timestamp, type, individual, location, out_of_area, alert) VALUES (%s, %s, %s, %s, %s, %s)"
            conn.execute(sql, (
                data.get('timestamp'),
                data.get('type'),
                data.get('individual'),
                data.get('location'),
                data.get('out_of_area'),
                data.get('alert')
            ))
            logging.info(f"Data inserted successfully: {data}")

    except Exception as e:
        logging.error(f"Database error: {str(e)}")
        raise

# Register a function with the Functions Framework
@functions_framework.http
def handle_post_request(request):
    # Check if the request method is POST
    if request.method == 'POST':
        # Get the JSON data from the request
        request_json = request.get_json(silent=True)

        # Process the JSON data (example: print it or return a response)
        if request_json:
            logger.info(f"Received JSON data: {request_json}")
            print(f"Received JSON data: {request_json}")

            # Check the type and alert fields and prepare data for insertion
            type_ = request_json.get('type')
            alert = request_json.get('alert')
            out_of_area = request_json.get('out_of_area')
            individual = request_json.get('individual')

            if type_ == 'f' and out_of_area == 1:
                request_json['alert'] = 0
                # data = {key: value for key, value in request_json.items()}
            if type_ == 'g' and out_of_area == 0:
                request_json['alert'] = 0
                # data = {key: value for key, value in request_json.items()}
            if type_ == 'g' and out_of_area == 1:
                request_json['alert'] = 1
                # data = {key: value for key, value in request_json.items()}
            if type_ == 'f' and out_of_area == 0 and individual == "Unknown":
                request_json['alert'] = 1
            data = {key: value for key, value in request_json.items()}


            # Insert data into the database
            try:
                insert_into_db(data)
                response = {
                    "status": "success",
                    "data": data
                }
            except Exception as e:
                response = {
                    "status": "error",
                    "message": str(e)
                }
                # Send the POST request if alert is set
        if request_json.get('alert') == 1 and request_json.get('individual') == 'Unknown':
            send_post_request("with an unknown person")
        if request_json.get('alert') == 1 and request_json.get('out_of_area') == 1:
            send_post_request("out of Area")
        
        return jsonify(response)

    else:
        return jsonify({
            "status": "error",
            "message": "Only POST requests are allowed"
        }), 405
