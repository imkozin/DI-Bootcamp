from django.contrib import admin
from .models import Category, Country, Director, Film, Review,Poster, Producer

# Register your models here.
admin.site.register(Category)
admin.site.register(Country)
admin.site.register(Director)
admin.site.register(Film)
admin.site.register(Review)
admin.site.register(Poster)
admin.site.register(Producer)