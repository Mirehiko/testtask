import datetime
import os
from django.core.exceptions import ObjectDoesNotExist
from datetime import datetime
from django.db import models
from django.utils import timezone




class User(models.Model):
    name = models.CharField(max_length=200, default='', verbose_name='Пользователь')
    password = models.CharField(max_length=16, default='', verbose_name='Пароль')

    def __str__(self):
        return self.name

class Task(models.Model):
    title = models.CharField(max_length=200, default='', verbose_name='Название')
    description = models.TextField(max_length=500, default='', verbose_name='Описание', blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    is_cofirmed = models.BooleanField(verbose_name='Выполнена', default=False, blank=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        try:
            this = Task.objects.get(id=self.id)
        except Exception as err:
            print('Object does\'t exist')

        super(Task, self).save(*args, **kwargs)