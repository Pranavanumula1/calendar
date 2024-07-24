from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from models import Event
import config

app = Flask(__name__)
CORS(app)

client = MongoClient(config.MONGO_URI)
db = client['eventsDB']
events_collection = db['events']

@app.route('/events', methods=['GET'])
def get_events():
    events = [event for event in events_collection.find()]
    return jsonify(events)

@app.route('/events', methods=['POST'])
def add_event():
    data = request.json
    new_event = Event(
        name=data['name'],
        date=data['date'],
        location=data['location'],
        description=data['description'],
        image_url=data['image_url']
    )
    events_collection.insert_one(new_event.to_dict())
    return jsonify(new_event.to_dict()), 201

if __name__ == '__main__':
    app.run(debug=True)
