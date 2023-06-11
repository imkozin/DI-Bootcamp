from typing import Any, Dict, Optional
from django.db.models.query import QuerySet
from django.forms.models import BaseModelForm
from django.http import HttpResponse
from django.shortcuts import render, reverse, get_object_or_404
from django.views.generic import CreateView, DetailView, ListView
from .models import Image, Profile
from .forms import ImageForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import View
from django.contrib.auth.mixins import UserPassesTestMixin, LoginRequiredMixin
# Create your views here.

class HomePageView(ListView):
    model = Image
    template_name = 'home.html'
    context_object_name = 'images'

    def get_queryset(self) -> QuerySet[Any]:
        return Image.objects.all()


class SignupForm(CreateView):
    form_class = UserCreationForm
    template_name = 'signup.html'
    success_url = reverse_lazy('signup')

class ImageUploadView(UserPassesTestMixin, CreateView):
    model = Image
    form_class = ImageForm
    template_name = 'upload_image.html'
    success_url = reverse_lazy('upload_image')

    def form_valid(self, form):
        return super().form_valid(form)
    
    def get_success_url(self):
        return reverse('home')
    
    def get_context_data(self, **kwargs: Any):
        context = super(ImageUploadView, self).get_context_data(**kwargs)
        context['title'] = 'Upload Image'
        return context

    def test_func(self):
        return self.request.user.is_authenticated
    
class ProfileView(View):
    def get(self, request, pk):
        user = User.objects.get(id=pk)
        return render(request, 'profile.html', {'user' : user})
    
class AlbumImageView(LoginRequiredMixin, View):
    model = Image
    template_name = 'album.html'
    context_object_name = 'images'

    def get(self, request, pk):
        user = get_object_or_404(User, id=pk)
        images = Image.objects.filter(user=user)
        context = {
            'images' : images
        }
        return render(request, 'album.html', context)
    


class ImageDetailView(DetailView):
    model = Image
    template_name = 'image_detail.html'
    context_object_name = 'image'

