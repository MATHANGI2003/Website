from flask import Flask, request, jsonify
import google.generativeai as genai
import os
from flask_cors import CORS
from dotenv import load_dotenv
from fuzzywuzzy import fuzz
from difflib import get_close_matches

load_dotenv()

app = Flask(__name__)
CORS(app)

GOOGLE_API_KEY = os.getenv("GEMINI_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("Please set the GOOGLE_API_KEY environment variable.")

# Configure Gemini AI
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel("gemini-1.5-pro")

# Load company details into a dictionary
company_info = {}
with open("company_info.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()
    current_question = None

    for line in lines:
        line = line.strip()
        if line.startswith("Q:"):
            current_question = line.replace("Q:", "").strip().lower()
        elif line.startswith("A:") and current_question:
            company_info[current_question] = line.replace("A:", "").strip()
            current_question = None

# Matching strategy: exact, keyword, fuzzywuzzy, then difflib
def get_best_match(user_input):
    user_input = user_input.lower()
    
    # 1. Direct or keyword match
    for question in company_info:
        if user_input in question or any(word in question for word in user_input.split()):
            return question

    # 2. FuzzyWuzzy match
    best_score = 0
    best_match = None
    for question in company_info:
        score = fuzz.partial_ratio(user_input, question)
        if score > best_score:
            best_score = score
            best_match = question
    if best_score >= 70:
        return best_match

    # 3. Difflib match
    close_matches = get_close_matches(user_input, company_info.keys(), n=1, cutoff=0.6)
    if close_matches:
        return close_matches[0]

    return None

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message", "").strip()
    print(f"Received: {user_message}")

    best_match = get_best_match(user_message)

    if best_match:
        print(f"Matched Question: {best_match}")
        return jsonify({"response": company_info[best_match]})

    # If no match found, use Gemini AI
    try:
        response = model.generate_content(user_message)
        bot_response = response.text if hasattr(response, "text") else response.candidates[0].content
        print(f"AI Response: {bot_response}")
    except Exception as e:
        print(f"Error: {e}")
        bot_response = f"An error occurred: {e}"

    return jsonify({"response": bot_response})

if __name__ == "__main__":
    app.run(debug=True)
