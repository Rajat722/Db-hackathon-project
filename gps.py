from datetime import timedelta, datetime, date
import serial
import time ,string, pynmea2, smtplib, requests, json
from pprint import pprint
from geopy.distance import geodesic

#setup the serial port to which GPS is connected to
port = "/dev/gps0"
ser = serial.Serial(port, baudrate=9600, timeout=0.5)
print("ser: ", ser)
dataout  = pynmea2.NMEAStreamReader()
print("dataout: ", dataout)
#TODO: take pic every 10-20 seconds and then run facial detection class/func->
#  If detected -> run facial recognition class/function ->
while True:
    newdata = ser.readline()
    inside_fence = True
    print ("getting new lat")
    print(newdata[0:6])
    if newdata[0:6] == b'$GPGGA':
        newdata = newdata.decode("utf-8")
        # newdata = "$GPGGA,212855.00,4046.06433,N,07358.94827,W,0.930,126.18,170724,,,A"
        print("newdata: ", newdata)
        newmsg = pynmea2.parse(newdata)
        newlat = newmsg.latitude
        print("Decoded latitude: ", newlat)
        newlong = newmsg.longitude
        print("Decoded longitude: ", newlong)

        # find time
        date_today = date.today()
        time_atm = newmsg.timestamp
        origin_timestamp = datetime.combine(date_today, time_atm) - timedelta(hours=4)
        origin_timestamp = origin_timestamp.isoformat()
        print(origin_timestamp)

        # origin_timestamp = datetime.datetime.now().isoformat()


        # Coordinates are formatted as Latitude, Longitude
        # Maximum Coordinates for Latitude: [-90,90]
        # Maximum Coordinates for Longitude: [-180, 180]

        house_coords = (40.76773883333333, -73.98247116666667)
        current_coords = (newlat, newlong)
        current_coords = (40.766229, -73.979673)

        geofence_radius = 0.05 # 1KM
        typeForG = 'f'
        # calculate the distance between house and your current

        distance = geodesic(house_coords, current_coords).kilometers

        # Check if you are inside or outside the geofence
        
        if distance > geofence_radius:
            print(f"You are {distance - geofence_radius} kilometers outside  of your geofence.")
            inside_fence = False
            typeForG = 'g'
            send_coordinates(current_coords=current_coords, timestamp=origin_timestamp, typeForG=typeForG)
        else:
            print("You are inside your geofence.")
            inside_fence = True
        
        lat  = str(newlat)
        lon = str(newlong)
        #content = "http://maps.google.com/maps?q=" + lat + "," + lon
        #print(content)
        time.sleep(60)
        


    def send_coordinates(current_coords, timestamp, typeForG):
        #url = ""
        url = 'https://us-central1-hack-team-eletech.cloudfunctions.net/in-out'
        print("url: ", url)

        headers = {
           'Content-Type':'application/json'
        }
        print(current_coords)
        data = {
            'timestamp': timestamp,
            'type': typeForG,
            'individual': '',
            'location': f"{current_coords[0]}, {current_coords[1]}",
            'out_of_area': True,
            'alert': True
            }
        
        print("data : ", data)
        response = requests.post(url, data = json.dumps(data), headers=headers)
        print("")
        print(response.status_code)
        print(response.text)
        # print('Response from server:', response.json())
