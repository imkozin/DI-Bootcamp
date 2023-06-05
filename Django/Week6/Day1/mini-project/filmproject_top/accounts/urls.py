from django.urls import path
from django.contrib.auth import views
from .views import RegisterView, CustomLoginView, ProfileView, profile

urlpatterns = [
    # path('login/', views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('signup/', RegisterView.as_view(), name='signup'),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('profile/', profile, name='profile'),
    path('profile/<int:user_id>/', ProfileView.as_view(), name='profile'),
]

