# Generated by Django 4.2.1 on 2023-06-12 11:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='projects',
            field=models.ManyToManyField(related_name='employees', to='management.project'),
        ),
    ]
