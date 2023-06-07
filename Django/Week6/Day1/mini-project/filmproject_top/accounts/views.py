from django.shortcuts import render
from django.views.generic.edit import CreateView
from .forms import RegisterForm
from django.contrib.auth.models import User
from django.views import View
from django.urls import reverse_lazy
from django.contrib.auth.views import LoginView
# Create your views here.

class RegisterView(CreateView):
    form_class = RegisterForm
    model = User
    template_name = 'signup.html'
    success_url = reverse_lazy('login')

def profile(request):
    context = {
        'favorite_films': request.user.user_profile.favorite_films.all()
    }
    return render(request, 'profile.html', context)

class CustomLoginView(LoginView):
    template_name = 'login.html'

    def get_success_url(self):
        user = self.request.user
        if user.is_superuser:
            return reverse_lazy('homepage')
        return reverse_lazy('profile')

class ProfileView(View):
    def get(self, request, pk):
        user = User.objects.get(id=pk)
        return render(request, 'profile.html', {'user' : user})



