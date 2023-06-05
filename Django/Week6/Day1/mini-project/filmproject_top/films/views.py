from typing import Any, Dict, Optional
from django.db.models.query import QuerySet
from django.forms.models import BaseModelForm
from django.http import HttpResponse
from django.http.response import HttpResponseRedirect
from django.shortcuts import render, reverse, redirect
from .models import *
from django.views.generic import ListView
from django.views.generic.edit import CreateView, UpdateView
from django.urls import reverse_lazy
from .forms import FilmForm, DirectorForm, PosterForm, ReviewForm
from django.contrib.auth.mixins import UserPassesTestMixin

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
    
class AddPosterView(CreateView):
    model = Poster
    form_class = PosterForm
    template_name = 'add_poster.html'
    success_url = reverse_lazy('add_poster')

    def form_valid(self, form):
        return super().form_valid(form)
    
    def get_success_url(self):
        return reverse('homepage')
    
    def get_context_data(self, **kwargs: Any):
        context = super(AddPosterView, self).get_context_data(**kwargs)
        context['title'] = 'Add Poster'
        return context
    
class AddReviewView(CreateView):
    model = Review
    form_class = ReviewForm
    template_name = 'add_review.html'
    success_url = reverse_lazy('add_review')

    def form_valid(self, form):
        return super().form_valid(form)
    
    def get_success_url(self) -> str:
        return reverse('homepage')
    
    def get_context_data(self, **kwargs: Any):
        context = super(AddReviewView, self).get_context_data(**kwargs)
        context['title'] = 'Add Review'
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
    
class UpdateDirectorView(UserPassesTestMixin, UpdateView):
    model = Director
    template_name = 'add_director.html'
    fields = '__all__'

    # def get_success_url(self):
    #     return reverse('homepage')

    def test_func(self):
        return self.request.user.is_superuser
    
    def handle_no_permission(self):
        return redirect('homepage')

    # def get_context_data(self, **kwargs: Any):
    #     context = super(UpdateDirectorView, self).get_context_data(**kwargs)
    #     context['title'] = 'Add Director'
    #     return context
    
class UpdateFilmView(UserPassesTestMixin, UpdateView):
    model = Film
    template_name = 'add_film.html'
    fields = '__all__'

    # def get_success_url(self):
    #     return reverse('homepage')

    def test_func(self):
        return self.request.user.is_superuser
    
    def handle_no_permission(self):
        return redirect('homepage')
    
    # def get_context_data(self, **kwargs: Any):
    #     context = super(UpdateFilmView, self).get_context_data(**kwargs)
    #     context['title'] = 'Add Film'
    #     return context

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
#         if filled_form.is_valid():
#              filled_form.save()
#         return redirect('homepage')
    
#     else:
#         filled_form = AddDirectorView()

#     context = {
#         'form' : filled_form
#     }

#     return render(request, 'add_director.html', context)

# def add_review(request):
#     if request.method == 'POST':
#         filled_form = AddReviewView(request.POST)

#         return redirect('homepage')
    
#     else:
#         filled_form = AddReviewView()

#     context = {
#         'form' : filled_form
#     }

#     return render(request, 'add_review.html', context)