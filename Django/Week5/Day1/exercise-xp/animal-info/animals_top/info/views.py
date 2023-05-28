from django.shortcuts import render
from django.http import HttpResponse
import json


def get_data():
    with open('Week5/Day1/exercise-xp/animal-info/animals_top/my_json.json') as file:
    
        file_contents = json.load(file)  

        return file_contents

print(get_data())

def get_family(request, family_id):
    with open('Week5/Day1/exercise-xp/animal-info/animals_top/my_json.json') as file:
    
        data = json.load(file)
    
    
    context = {}
    context['animal_list'] = []
    for animal in data['animals']:
        if animal['family'] == int(family_id):
            context['animal_list'].append(animal['name'])
    
    return render(request, 'family.html', context)

def get_animal(request, animal_id):
    with open('Week5/Day1/exercise-xp/animal-info/animals_top/my_json.json') as file:
    
        file_contents = json.load(file)

    animal = {}
    for a in file_contents['animals']:
        if a['id'] == animal_id:
            context = {
                "Name": animal['name'],
                "Legs": animal['legs'],
                "Weight": animal['weight'],
                "Height": animal['height'],
                "Speed": animal['speed']
                }


    return render(request, 'animal.html', context)

