import functions_framework
from flask import Flask, request, jsonify
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


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
            response = {
                "status": "success",
                "data": request_json
            }
        else:
            logger.error("Invalid or missing JSON data")
            response = {
                "status": "error",
                "message": "Invalid or missing JSON data"
            }
        
        return jsonify(response)

    else:
        return jsonify({
            "status": "error",
            "message": "Only POST requests are allowed"
        }), 405
