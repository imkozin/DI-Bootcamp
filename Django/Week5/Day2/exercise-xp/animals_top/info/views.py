from django.shortcuts import render
from .models import Family, Animal

def family_view(request, family_id):
    family = Family.objects.get(id=family_id)
    animals = family.animal_set.all()

    return render(request, 'family.html', {'family' : family, 'animals' : animals})

def animal_view(request, animal_id):
    animal = Animal.objects.get(id=animal_id)

    return render(request, 'animal.html', {'animal' : animal})

def animals_view(request):

    animals = Animal.objects.get(all)

    return render(request, 'animals.html', {'animals' : animals})

