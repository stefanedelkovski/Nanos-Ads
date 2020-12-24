from flask import Flask, jsonify
import db
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})

with open('data/data.json') as f:
    file_data = json.load(f)


@app.route('/', methods=['GET'])
def main_populate():
    db.ad_collection.drop()
    db.ad_collection.insert_many(file_data)
    return "Database connected! ", 200


@app.route('/ads', methods=['GET'])
def retrieve_all_ads():
    db.ad_collection.drop()
    db.ad_collection.insert_many(file_data)

    ads_json = []

    if db.ad_collection.find({}):
        for ad in db.ad_collection.find({}).sort("name"):
            new_ad = {}
            for key in ad.keys():
                if key == '_id':
                    continue
                new_ad[key] = ad[key]
            ads_json.append({new_ad['name']: new_ad})
    return jsonify(ads_json)


@app.route('/ads/<name>', methods=['POST'])
def retrieve_one_add(name):
    ads_json = []
    if db.ad_collection.find({}):
        for ad in db.ad_collection.find({}).sort("name"):
            new_ad = {}
            for key in ad.keys():
                if key == '_id':
                    continue
                new_ad[key] = ad[key]
            if new_ad['name'] == name:
                ads_json.append(new_ad)
    return jsonify(ads_json)


if __name__ == '__main__':
    app.run(port=5000, debug=True)
