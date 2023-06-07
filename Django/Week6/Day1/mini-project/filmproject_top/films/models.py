from django.db import models

# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name
    
class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name
    
class Director(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    
class Producer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Film(models.Model):
    title = models.CharField(max_length=30)
    release_date = models.DateField(auto_now_add=True)
    created_in_country = models.ForeignKey(Country,on_delete=models.CASCADE, related_name='film_created')
    available_in_countries = models.ManyToManyField(Country, related_name='film_available')
    category = models.ManyToManyField(Category, related_name='film_category')
    director = models.ManyToManyField(Director, related_name='film_director')
    producers = models.ManyToManyField(Producer, related_name='film_producer')

    def __str__(self):
        return self.title
    
class Poster(models.Model):
    image = models.URLField()
    explanation_img = models.CharField(max_length=100)
    film = models.OneToOneField(Film, on_delete=models.CASCADE, related_name='poster')

    def __str__(self):
        return f'Poster for {self.film.title}'

class Review(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name='reviews')
    review_text = models.TextField()
    rating = models.IntegerField(choices=[(i,i) for i in range(1, 6)])
    review_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.film} | {self.review_text}'

