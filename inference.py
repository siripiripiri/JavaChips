from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

model_name = "srijanupadhyay/finetuned-llama2"

my_pipeline = pipeline('text-generation', model = model_name)

@app.route('/generate_text', methods=['POST'])
def generate_text():

    input_prompt = request.json.get('input_prompt', '')  # default prompt is an empty string
    print(input_prompt)

    generated_text = my_pipeline(input_prompt)
    print(generated_text)

    response_data = jsonify({'generated_text': generated_text})

    response_data.headers.add('Access-Control-Allow-Origin', '*')

    return response_data

if  __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)