from django.contrib import admin
from .models import User, Task

from django.urls import reverse
from django import forms

admin.site.register(User)
admin.site.register(Task)
