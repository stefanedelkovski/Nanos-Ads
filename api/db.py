from flask_pymongo import pymongo

CONNECTION_STRING = "mongodb+srv://stefan:1234@cluster0.3s7a9.mongodb.net/Assignment?retryWrites=true&w=majority"

client = pymongo.MongoClient(CONNECTION_STRING)

db = client.get_database('Assignment')
ad_collection = pymongo.collection.Collection(db, 'Collection1')
