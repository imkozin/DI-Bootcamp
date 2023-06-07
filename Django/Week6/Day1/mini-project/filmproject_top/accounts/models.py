from django.db import models
from django.contrib.auth.models import User
# from films import 
# Create your models here.

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile')
    favorite_films = models.ManyToManyField('films.Film', related_name='users', blank=True)

    def _str__(self):
        return f'Profile: {self.user.username}'
    
