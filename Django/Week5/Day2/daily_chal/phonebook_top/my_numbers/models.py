from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Phonebook(models.Model):
    #model is table
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, unique=True)
    phone_number = PhoneNumberField(max_length=20)
    address = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name} | {self.phone_number}'