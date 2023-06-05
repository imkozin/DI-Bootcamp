# Generated by Django 4.2.1 on 2023-06-05 19:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0002_review'),
    ]

    operations = [
        migrations.CreateModel(
            name='Poster',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('explanation_img', models.CharField(max_length=100)),
                ('film', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='poster', to='films.film')),
            ],
        ),
    ]
