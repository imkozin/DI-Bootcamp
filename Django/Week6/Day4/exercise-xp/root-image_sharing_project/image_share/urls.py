from django.contrib import admin
from django.urls import path
from .views import SignupForm

urlpatterns = [
    path('signup', SignupForm.as_view(), name='signup'),
]