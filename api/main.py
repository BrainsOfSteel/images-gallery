import os
import requests
from flask import Flask, request
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv(dotenv_path=".env.local")

UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")
DEBUG = eval(os.environ.get("DEBUG", False))

if not UNSPLASH_KEY:
    raise EnvironmentError("Please create .env.local and inser there UNSPLASH_KEY")

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = DEBUGs

print(__name__)
@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers={
        "Authorization":"Client-ID "+UNSPLASH_KEY,
        "Accept-Version": "v1"
    }
    params = {
        "query": word
    }
    response = requests.get(url=UNSPLASH_URL,params = params, headers=headers)
    
    data = response.json()
    return data

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)