from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render
from .models import *
from django.views.generic import ListView
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from .forms import FilmForm, DirectorForm

# Create your views here.
# Create a class-based view, HomePageView, which inherits from generic.ListView. This view should be used for the URL route: /homepage, and render a template called homepage.html.

class HomePageView(ListView):
    model = Film
    template_name = 'homepage.html'
    context_object_name = 'films'

    def get_queryset(self) -> QuerySet[Any]:
        return Film.objects.order_by('director')
    
# Create two class-based views, FilmCreateView and DirectorCreateView, which inherit from generic.CreateView. These views should use the FilmForm and DirectorForm respectively.

class AddFilmView(CreateView):
    model = Film
    form_class = FilmForm
    template_name = 'add_film.html'
    success_url = reverse_lazy('add-film')

class AddDirectorView(CreateView):
    model = Director
    form_class = DirectorForm
    template_name = 'add_director.html'
    success_url = reverse_lazy('add-director')
