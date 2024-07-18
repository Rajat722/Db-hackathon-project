import cv2
import datetime
import requests, json
from recognize_faces_image import pipeline_facial

test_picture_name = '/home/user/Downloads/test/testimage.jpg'

def take_picture():
	print("taking pic")
	cam = cv2.VideoCapture(0)
	print("camera started")
	ret, image = cam.read()
	if ret:
		print("took pic")
		cv2.imwrite(test_picture_name, image)
	else:
		print("error")
		raise ValueError('Something went wrong while taking a picture...')
	cam.release()
	cv2.destroyAllWindows()
	

def test_face_recognition():
	print("here")
	take_picture()
	people = pipeline_facial(test_picture_name)
	alert = False
	
	for name in people:
		if name == "Unknown":
			alert = True
		send_coordinates(name, alert)
		
	
def send_coordinates(name, alert):
	url = 'https://us-central1-hack-team-eletech.cloudfunctions.net/in-out'
	print("url: ", url)
	timestamp = datetime.datetime.now().isoformat()
	print(timestamp)
	
	headers = {
	   'Content-Type':'application/json'
	}
	
	data = {
		'timestamp': timestamp,
		'type': 'f',
		'individual': name,
		'location': '',
		'out_of_area': False,
		'alert': alert
		}
	
	print("data : ", data)
	
	response = requests.post(url, data = json.dumps(data), headers=headers)
	print("")
	print(response.status_code)
	print(response.text)
	
        
test_face_recognition()
