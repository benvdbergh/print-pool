# Generated by Django 4.1.4 on 2022-12-20 22:17

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tool',
            name='location',
            field=models.CharField(default='', max_length=15),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='tool',
            name='id',
            field=models.CharField(default=api.models.generate_uniqe_id, max_length=10, primary_key=True, serialize=False, unique=True),
        ),
    ]