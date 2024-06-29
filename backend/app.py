from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from gradio_client import Client

app = Flask(__name__)
CORS(app)

# client = Client("huggingface-projects/gemma-2-9b-it")
client = Client("vilarin/ollama-Chat")
# Define result as a global variable
global result
result = ""

@app.route('/submit_symptoms', methods=['POST'])
def submit_symptoms():
    global result
    # Get the values from the form
    sym1 = request.form.get('sym1')
    sym2 = request.form.get('sym2')
    sym3 = request.form.get('sym3', '')  # Add sym3 with a default empty string

    print(f'Symptom 1: {sym1}, Symptom 2: {sym2}, Symptom 3: {sym3}')

    # Update the output variable based on the submitted symptoms
    result = client.predict(
        message=f'''I have {sym1}, {sym2} and {sym3}, what is the most likely illness I have? you have to answer in around 200 words, in the following structure:
        Diagnosis: There is a likeliness that you have...(The diagnosed illness)
        Remedies: These are the remedies that you can perform at home for relief. If symptoms persist, visit your doctor.
        ''',
        temperature=0.8,
		max_new_tokens=1024,
		top_p=0.8,
		top_k=20,
		penalty=1,
		api_name="/chat"
    )
    print(result)

    # You can redirect to another page or return a response
    return "Symptoms submitted successfully!"

@app.route('/api/data', methods=['GET'])
def get_data():
    global result  # Access the global variable
    if request.method == 'GET':
        data = {
            "Message": f"{result}"
        }
        return jsonify(data)
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
