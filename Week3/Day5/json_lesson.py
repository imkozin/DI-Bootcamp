import json

user = {
    "firstName": "Jane",
    "lastName": "Doe",
    "hobbies": ["running", "sky diving", "singing"],
    "age": 35,
    "email" : None,
    "children": [
        {
            "firstName": "Alice",
            "age": 6,
            "loves_school" : True
        },
        {
            "firstName": "Bob",
            "age": 8,
            "loves_school" : False
        }
    ]
}

# my_json = json.dumps(user)
# print(my_json)

# person_str = '{"username": "John", "age": 35, "email": null}'
# person_dict = json.loads(person_str)
# print(person_dict)

import requests
response = requests.get('http://api.open-notify.org/iss-now.json')
# print(dir(response))
# print(response.status_code)
# print(response.content)
# info = json.loads(response.content)
# info = response.json()
# print(info)
# latitutde = info['iss_position']['latitude']
# longitude = info['iss_position']['longitude']

# sentence = f"The ISS is at latitude {latitutde} and longitude {longitude}"
# print(sentence)



# {'timestamp': 1684399979, 'iss_position': {'latitude': '2.4148', 'longitude': '-74.6320'}, 'message': 'success'}

# response = requests.get('https://pokeapi.co/api/v2/pokemon',params='parameters')
# parameters = {'limit': 2}
# info = response.json()
# print(info['results'])

# info = response.json()
# type_pikachu = info['types'][0]['type']['name']
# sentence = f"Pikachu is of type {type_pikachu}"
# print(sentence)

def add_data_iss():
    lst_response = []
    for i in range(10):
        response = requests.get('http://api.open-notify.org/iss-now.json')
        lst_response.append(response.json())
    print(lst_response)

    with open('Day5/iss-info.json', "w") as file:
        json.dump(lst_response, file, indent=4, sort_keys=True)

add_data_iss()

with open('Day5/iss-info.json', "r") as file:
    info= json.load(file)
    print(info)
