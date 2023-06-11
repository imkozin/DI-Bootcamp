from django.db import models

class Family(models.Model):
    name =  models.CharField(max_length=30)

class Animal(models.Model):
    #model is table
    legs = models.SmallIntegerField
    weight = models.FloatField
    height = models.FloatField
    speed = models.SmallIntegerField
    family = models.ForeignKey(Family, on_delete=models.CASCADE, null=True)