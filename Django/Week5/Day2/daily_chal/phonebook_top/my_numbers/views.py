from django.shortcuts import render, get_object_or_404
from .models import Phonebook

def persons_name(request, name_search: str):
    person = None
    try:
        person = Phonebook.objects.get(name=name_search)
    except Phonebook.DoesNotExist:
        pass
    context = {'person' : person}

    return render(request, 'names.html', context)


def persons_phonenumber(request, phonenumber: str):
    person = None
    try:
        person = Phonebook.objects.get(number_search = phonenumber)
    except Phonebook.DoesNotExist:
        pass

    context = {'person' : person}
    
    return render(request, 'phones.html', context)

