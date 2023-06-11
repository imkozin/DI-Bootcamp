from django.db import models

TYPE_CHOICES = (
    ("sunny", "Sunny"),
    ("cloudy", "Cloudy"),
    ("windy", "Windy"),
    ("rainy", "Rainy"),
    ("stormy", "Stormy"),
)

class Report(models.Model):
    location = models.CharField(max_length=50)
    temperature = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    
    def __str__(self):
        return f"{self.location} ({self.temperature}°C)"
    