from django.db import models
import string
import random

def generate_uniqe_id():
    length = 8

    while True:
        code = ''.join(random.choice(string.ascii_uppercase, k=length))

        if Tool.objects.filter(code=code).count() == 0:
            break
    
    return code

# Create your models here.
class Tool(models.Model):
    id = models.CharField(max_length=10, default=generate_uniqe_id ,primary_key=True, unique=True)
    t_type = models.CharField(max_length=50)
    brand = models.CharField(max_length=30)
    model = models.CharField(max_length=30)
    owner = models.CharField(max_length=10)
    location = models.CharField(max_length=15)
    date_created = models.DateTimeField(auto_now=False, auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True, auto_now_add=False)