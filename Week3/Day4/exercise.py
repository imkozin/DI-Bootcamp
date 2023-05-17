# import os
# dir_path = os.path.dirname(os.path.realpath(__file__))

# with open(text.txt) as story:

# def get_words_from_file():
#     pass

# def get_random_sentence():
#     pass

import requests

import json

response = requests.get('https://api.chucknorris.io/jokes/random')

print(response.json())

data = []

data.append(response.json())

print(data)