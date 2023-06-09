# Generated by Django 4.2.1 on 2023-06-06 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0004_poster_image'),
        ('accounts', '0002_userprofile_favorite_films'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='favorite_films',
            field=models.ManyToManyField(blank=True, related_name='favorite_films', to='films.film'),
        ),
    ]
