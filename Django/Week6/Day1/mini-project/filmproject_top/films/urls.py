from django.contrib import admin
from django.urls import path
from films.views import HomePageView, AddFilmView, AddDirectorView, AddReviewView

urlpatterns = [
    path('homepage/', HomePageView.as_view(), name='homepage'),
    path('add_film/', AddFilmView.as_view(), name='add_film'),
    path('add_director/', AddDirectorView.as_view(), name='add_director'),
    path('add_review/', AddReviewView.as_view(), name='add_review')
]
