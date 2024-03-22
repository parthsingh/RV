import requests
import os
from PyPDF2 import PdfReader

import google.generativeai as genai

genai.configure(api_key="AIzaSyBGgcSlCzyHiSf5Auz0H8zJdSn4_gQHOZU")

#AIzaSyBGgcSlCzyHiSf5Auz0H8zJdSn4_gQHOZU
def read_pdf(file_path):
    with open(file_path, 'rb') as file:
        pdf_reader = PdfReader(file)
        num_pages = len(pdf_reader.pages)
        text = ''
        for page_num in range(num_pages):
            page = pdf_reader.pages[page_num]
            text += page.extract_text()
        return text
    
def set_text_to_1000_words(text):
    words = text.split()
    if len(words) > 1000:
        return ' '.join(words[:1000])
    else:
        return text


text = read_pdf("test1.pdf")

# text = set_text_to_1000_words(text)

model = genai.GenerativeModel('gemini-pro')


response = model.generate_content("Extract all important numbers and data from this research paper and return the findings:\n " + text)
# print(response.text)
# print(response.prompt_feedback)
graph = model.generate_content("I need help. Give me python code to graph these results using matplotlib. Fill the graph with the data from the following results. Use multipe graphs if required. Make sure the code works. Please return the code and nothing else.\n " + response.text)
print(graph.text)
# print(graph.prompt_feedback)
# print()
# print(response.prompt_feedback)

# API_URL = "https://api-inference.huggingface.co/models/google-bert/bert-large-uncased-whole-word-masking-finetuned-squad"
# headers = {"Authorization": "Bearer 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"}

# def query(payload):
# 	response = requests.post(API_URL, headers=headers, json=payload)
# 	return response.json()
	
# output = query({
# 	"inputs": {
# 		"question": "Extract key information and numbers that can be used to generate graphs on python",
# 		"context": text
# 	},
# })

# print(output)

# exec(graph.text)