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
    query = request.GET.get('query', None)
    form = SearchForm()

    if query:
        try:
            record = Phonebook.objects.get(name__icontains=query)
            return redirect('names/', name=query)
        except Phonebook.DoesNotExist:
            try:
                record = Phonebook.objects.get(phone_number__icontains=query)
                return redirect('phones/', phone_number=query)
            except Phonebook.DoesNotExist:
                return render(request, 'search.html', {
                    'form': form,
                    'query': query,
                    'message': 'No results found.'
                })
    else:
        return render(request, 'search.html', {'form': form})

# def search(request):
#     form = SearchForm(request.POST or None)

#     if form.is_valid():
#         query = form.cleaned_data['query']

#         if query.isdigit():
#             return redirect('phones.html', search_term=query)
#         else:
#             return redirect('names.html', search_term=query)

#     return render(request, 'phonebook/search.html', {
#         'form': form,
#     })