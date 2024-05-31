from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_URL = "https://api-inference.huggingface.co/models/google/gemma-7b-it"
headers = {"Authorization": "Bearer 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"}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": "I have cold, cough and sore throat, what disease do i have? ",
})

@app.route('/api/data', methods=['GET'])
def get_data():
    global output  # Access the global variable
    if request.method == 'GET':
        data = {
            "Message": f"{output}"
        }
        return jsonify(data)

@app.route('/submit_symptoms', methods=['POST'])
def submit_symptoms():
    # Get the values from the form
    sym1 = request.form.get('sym1')
    sym2 = request.form.get('sym2')
    sym3 = request.form.get('sym3')

    print(f'Symptom 1: {sym1}, Symptom 2: {sym2}')

    # Update the output variable based on the submitted symptoms
    global output
    output = query({
        "inputs": f'''I have {sym1}, {sym2} and {sym3}, what is the most likely illness I have? you have to answer in around 200 words, in the following structure:
        Diagnosis: There is a likeliness that you have...(The diagnosed illness)
        Remedies: Give the remedies people can follow at home, which does not  include any medication or vaccines or prescriptions. (give each remedy in bullet points.)
        ''',
    })

    # You can redirect to another page or return a response
    return "Symptoms submitted successfully!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
