from django.shortcuts import render, get_object_or_404
from .models import Phonebook


def persons_phonenumber(request, number):
    person = get_object_or_404(Phonebook, phone_number = number)

    return render(request, 'phones.html', {'person' : person})

def persons_name(request, name):
    persons = Phonebook.objects.filter(name__icontains=name)

    return render(request, 'names.html', {'persons' : persons})

