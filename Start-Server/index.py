import os
from flask import Flask, send_from_directory

# Info
os.system('powershell -Command Write-Host "Starting Local server..." -ForegroundColor darkgray')

# Flask code
basedir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

app = Flask(__name__, static_folder=basedir, static_url_path='')

@app.route('/')
def index():
    return send_from_directory(basedir, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(basedir, path)

# Run
if __name__ == '__main__':
    app.run(port=5000)