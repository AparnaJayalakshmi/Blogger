# Generated by Django 5.0.3 on 2024-03-07 20:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BlogApp', '0003_post_owner'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Post',
        ),
    ]
