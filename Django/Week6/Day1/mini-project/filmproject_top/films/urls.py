from django.contrib import admin
from django.urls import path
from films.views import HomePageView, AddFilmView, AddDirectorView, AddReviewView, FilmUpdateView, FilmDeleteView, confirm_delete # DirectorUpdateView #AddPosterView

urlpatterns = [
    path('homepage/', HomePageView.as_view(), name='homepage'),
    path('add_film/', AddFilmView.as_view(), name='add_film'),
    # path('add_poster/', AddPosterView.as_view(), name='add_poster'),
    path('add_director/', AddDirectorView.as_view(), name='add_director'),
    path('add_review/', AddReviewView.as_view(), name='add_review'),
    path('edit_film/<int:pk>', FilmUpdateView.as_view(), name='edit_film'),
    path('delete_film/<int:pk>', FilmDeleteView.as_view(), name='delete_film'), 
    path('', confirm_delete, name='confirm')
    # path('edit_director/<int:pk>', DirectorUpdateView.as_view(), name='edit_director')
]
