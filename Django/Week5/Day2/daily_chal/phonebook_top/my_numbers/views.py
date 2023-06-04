from django.shortcuts import render, redirect
from .models import Phonebook
from .forms import SearchForm
from django.db.models import Q 

def name_view(request, name):
    person = Phonebook.objects.get(name = name)
    context = {'person': person}
    return render(request, 'names.html', context)


def phone_view(request, phone_number):
    person = Phonebook.objects.get(phone_number = phone_number)
    context = {'person': person}
    return render(request, 'phones.html', context)


def search(request):
    if request.method == 'GET':
        filled_form = SearchForm(request.GET)
        if filled_form.is_valid():
            name1 = Phonebook(name = filled_form.cleaned_data['name'])
            phone1 = Phonebook(filled_form.cleaned_data['phone_number'])
            if Phonebook.objects.filter(name = name1):
                return name_view(request, name1)
            elif Phonebook.objects.filter(phone_number = phone1):
                return phone_view(request, phone1)
        form = SearchForm()
        context = {'form' : form}
    return render(request, 'names.html', context)

    # if request.method == 'POST':
    #     form = SearchForm(request.POST)
    #     if form.is_valid():
    #         search = form.cleaned_data['search_term']
    #         if Phonebook.objects.filter(Q(phone_number=search) | Q(name=search)).exists():
    #             # Person exists, go to the page with ID
    #             return redirect(f'persons/{search}')
    #         else:
    #             # Person does not exist
    #             print('Person does not exist')
    # else:
    #     form = SearchForm()

    # context = {
    #     'form': form
    # }
    # return render(request, 'search.html', context)
