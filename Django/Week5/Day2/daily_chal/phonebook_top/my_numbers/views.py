from django.shortcuts import render, redirect
from .models import Phonebook
from .forms import SearchForm
from django.db.models import Q 

def persons_name(request, name_search: str):
    person = None
    try:
        person = Phonebook.objects.get(name=name_search)
    except Phonebook.DoesNotExist:
        pass
    context = {'person' : person}

    return render(request, 'names.html', context)


def persons_phonenumber(request, number: str):
    person = None
    try:
        person = Phonebook.objects.get(phone_number = number)
    except Phonebook.DoesNotExist:
        pass

    context = {'person' : person}
    
    return render(request, 'phones.html', context)

def search(request):
    if request.method == 'POST':
        query = request.POST('query')
    

        if SearchForm({'persons_phonenumber': query}).is_valid():
            return redirect('phones/', phone=query)
            
        else:
            return redirect('phones/', number=query)
        
    return render(request, 'search.html')
