from django.shortcuts import render
from django.http import HttpResponse

def show_list(request):

    people = [
  {
    'id': 1,
    'name': 'Bob Smith',
    'age': 35,
    'country': 'USA'
  },
  {
    'id': 2,
    'name': 'Martha Smith',
    'age': 60,
    'country': 'USA'
  },
  {
    'id': 3,
    'name': 'Fabio Alberto',
    'age': 18,
    'country': 'Italy'
  },
  {
    'id': 4,
    'name': 'Dietrich Stein',
    'age': 85,
    'country': 'Germany'
  }
]

    sorted_people = sorted(people, key=lambda p: p['age'])
    context = {
        'people': sorted_people
    }
    return render(request, 'people/templates/people_list.html', context)

def show_person(request, id):

    people = [
        {
            'id': 1,
            'name': 'Bob Smith',
            'age': 35,
            'country': 'USA'
        },
        {
            'id': 2,
            'name': 'Martha Smith',
            'age': 60,
            'country': 'USA'
        },
        {
            'id': 3,
            'name': 'Fabio Alberto',
            'age': 18,
            'country': 'Italy'
        },
        {
            'id': 4,
            'name': 'Dietrich Stein',
            'age': 85,
            'country': 'Germany'
        }
    ]

    person = []
    for p in people:
        if p['id'] == id:
            person = p
            break
    context = {
        'person': person
    }
    return render(request, 'people/template/person_detail.html', context)
