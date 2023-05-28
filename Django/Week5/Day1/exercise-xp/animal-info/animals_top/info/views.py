from django.shortcuts import render
import json


def get_data():
    with open('Week5/Day1/exercise-xp/animal-info/animals_top/my_json.json') as file:
    
        file_contents = json.load(file)  

        return file_contents

print(get_data())

def get_family(request, family_id):
    with open('Week5/Day1/exercise-xp/animal-info/animals_top/my_json.json') as file:
    
        file_contents = json.load(file)

    family = {}
    for f in file_contents['families']:
        if f['id'] == family_id:
            family = f

    animals = {}
    for a in file_contents['animals']:
        if a['family'] == family_id:
            animal = a

    context = {
        'family' : family,
        'animals' : animals
    }
    
    return render(request, 'family.html', context)

def get_animal(request, animal_id):
    with open('Week5/Day1/exercise-xp/animal-info/animals_top/my_json.json') as file:
    
        file_contents = json.load(file)

    animal = {}
    for a in file_contents['animals']:
        if a['id'] == animal_id:
            a = animal

    context = {
        'animal' : animal
    }

    return render(request, 'animal.html', context)

