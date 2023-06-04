from typing import Any, Dict
from django.db.models.query import QuerySet
from django.forms.models import BaseModelForm
from django.http import HttpResponse
from django.shortcuts import render, reverse, redirect
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
    success_url = reverse_lazy('add_film')

    def form_valid(self, form):
        return super().form_valid(form)
    
    def get_success_url(self) -> str:
        return reverse('homepage')
    
    def get_context_data(self, **kwargs: Any):
        context = super(AddFilmView, self).get_context_data(**kwargs)
        context['title'] = 'Add Film'
        return context
    

class AddDirectorView(CreateView):
    model = Director
    form_class = DirectorForm
    template_name = 'add_director.html'
    success_url = reverse_lazy('add_director')

    def form_valid(self, form):
        return super().form_valid(form)
    
    def get_success_url(self) -> str:
        return reverse('homepage')
    
    def get_context_data(self, **kwargs: Any):
        context = super(AddDirectorView, self).get_context_data(**kwargs)
        context['title'] = 'Add Director'
        return context

# def add_film(request):
#     if request.method == 'POST':
#         filled_form = AddFilmView(request.POST)

#         if filled_form.is_valid():
#             filled_form.save()

#             return redirect('homepage')
#     else:
#         filled_form = AddFilmView()

#     context = {
#         'title' : 'Add Film',
#         'form' : filled_form
#     }
#     request render(request, 'add_film.html', context)

# def add_dir(request):
#     if request.method == 'POST':
#         filled_form = AddDirectorView(request.POST)

#         return redirect('homepage')
    
#     else:
#         form = AddDirectorView()

#     context = {
#         'title' : form
#     }

#     return render(request, 'add_director.html', context)
    