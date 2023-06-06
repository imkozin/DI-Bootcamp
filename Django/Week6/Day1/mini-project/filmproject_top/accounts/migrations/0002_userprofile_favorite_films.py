# Generated by Django 4.2.1 on 2023-06-06 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0004_poster_image'),
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='favorite_films',
            field=models.ManyToManyField(related_name='favorites', to='films.film'),
        ),
    ]
