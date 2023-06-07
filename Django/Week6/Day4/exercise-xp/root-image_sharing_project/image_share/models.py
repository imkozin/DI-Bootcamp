from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,
                                related_name='user_profile')
    uploaded_images = models.IntegerField(default=0)

class Image(models.Model):
    image_file = models.ImageField(upload_to='media/')
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=50) 
    user = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='images')