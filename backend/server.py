from flask import Flask, request, jsonify
from flask import send_file, send_from_directory, abort

app = Flask(__name__)

app.config['WORK_SPACE'] = '/Users/sophietao/my-app/public'

@app.route('/')
@app.route('/home')
def home():
    return "Hello from Flask"

@app.route('/download/<filename>', methods=['GET', 'POST'])
def download(filename):
    try:
        # send_from_directory
        return send_from_directory(
            directory=app.config['WORK_SPACE'], path=filename
        )
    except FileNotFoundError:
        abort(404)
        # return "404: File not found"

if __name__ == '__main__':
    app.run(debug=True)