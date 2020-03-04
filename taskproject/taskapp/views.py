from django.http import Http404, HttpResponse, JsonResponse
from django.template import loader
from django.conf import settings
from django.shortcuts import render, redirect

from django.db import transaction
from django.core.paginator import Paginator

from .models import Task, User
from rest_framework import viewsets
from .serializers import TaskSerializer

from rest_framework import serializers
from django.core import serializers

import json 
from django.forms.models import model_to_dict


class TaskViewSet(viewsets.ModelViewSet):
	"""
	API endpoint that allows groups to be viewed or edited.
	"""
	queryset = Task.objects.all()
	serializer_class = TaskSerializer


def authUser(request):
	if request.method == 'POST':
		# добавить проверку на совпадение пароля
		username = request.POST['username']
		password = request.POST['password']
		# user = serializers.serialize('json', user)
		user = User.objects.filter(name=username)
		if user:
			user = User.objects.get(name=username)
			if user.name == username and user.password == password:
				username = request.POST['username']
				request.session['username'] = username
				return redirect('/')
		else:
			return render(request, 'loginPage.html', {})
	return render(request, 'loginPage.html', {})


def homepage(request):
	taskList = Task.objects.all().order_by('-pub_date')

	paginator = Paginator(taskList, 3)
	page_number = request.GET.get('page')
	if page_number == None:
		page_number = 1
	page_obj = paginator.get_page(page_number)

	next_page = None
	prev_page = None

	if page_obj.has_next():
		next_page = page_obj.next_page_number()

	if page_obj.has_previous():
		prev_page = page_obj.previous_page_number()

	

	context = {
		'taskList': page_obj.object_list,
		'next': next_page,
		'prev': prev_page,
		'page': page_number,
	}

	if request.session.has_key('username'):
		auth_user = request.session['username']
		user = User.objects.get(name=auth_user)
		context['user'] = user.name
		context['is_authorized'] = True

	return render(request, 'homePage.html', context )


def logout(request):
	try:
		del request.session['username']
	except:
	 	pass
	return redirect('/')

def createTask(request):
	title = request.POST['title']
	description = request.POST['description']
	username = request.POST['username']
	email = request.POST['email']
	print('+++++++++++++++++++++++++++++++++++++++')
	print(request.POST)


	with transaction.atomic():
		task = Task(user=username, description=description, title=title, email=email)
		task.save()

	return JsonResponse({'status': 'success'})
	

def updateTask(request):
	task_id = request.POST['taskid']
	title = request.POST['title']
	description = request.POST['description']
	username = request.POST['username']
	email = request.POST['email']
	# status = request.POST['status']
	print('===============================')
	print(request.POST)

	task = Task.objects.get(id=task_id)
	task.title = title
	task.description = description
	task.username = username
	task.email = email

	with transaction.atomic():
		task.save()
	
	return JsonResponse({'status': 'success'})

def getTasks(request):
	taskList = Task.objects.all().order_by('-pub_date')
	print('=================================')
	print(request.GET)
	paginator = Paginator(taskList, 3)
	page_number = request.GET.get('page')
	if page_number == None:
		page_number = 1
	page_obj = paginator.get_page(page_number)

	next_page = None
	prev_page = None

	if page_obj.has_next():
		next_page = page_obj.next_page_number()

	if page_obj.has_previous():
		prev_page = page_obj.previous_page_number()

	json = serializers.serialize('json', list(page_obj.object_list))

	results = {
		'taskList': json,
		'next': next_page,
		'prev': prev_page,
		'page': page_number,
	}

	if request.session.has_key('username'):
		auth_user = request.session['username']
		user = User.objects.get(name=auth_user)
		results['user'] = user.name
		results['is_authorized'] = True

	return JsonResponse(results, content_type='application/json')