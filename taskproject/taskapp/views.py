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
	sortby = request.GET.get('sortby') or ''
	sortkey = request.GET.get('sortkey')
	page_number = request.GET.get('page')
	taskList = None

	if sortby == 'status':
		taskList = Task.objects.order_by('-is_cofirmed')
	elif sortby == 'user': 
		taskList = Task.objects.order_by('user')
	elif sortby == 'email': 
		taskList = Task.objects.order_by('email')
	else:
		taskList = Task.objects.all().order_by('-pub_date')

	paginator = Paginator(taskList, 3)

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
	username = request.POST['user']
	email = request.POST['email']

	with transaction.atomic():
		task = Task(user=username, description=description, title=title, email=email)
		task.save()

	return JsonResponse({'status': 'success'})
	
def updateTask(request):
	if request.session.has_key('username'):
		auth_user = request.session['username']
	else:
		return redirect('/login/')

	print('======---UPDATE---===========')
	print(request.POST)

	task_id = request.POST['taskid']
	title = request.POST['title']
	description = request.POST['description']
	username = request.POST['user']
	email = request.POST['email']
	is_cofirmed = False
	if request.POST['is_cofirmed'] == 'true':
		is_cofirmed = True


	task = Task.objects.get(id=task_id)
	task.title = title
	task.description = description
	task.user = username
	task.email = email
	task.is_cofirmed = is_cofirmed

	with transaction.atomic():
		task.save()
	
	return JsonResponse({'status': 'success'})

def removeTask(request):
	print('================remove task================')
	print(request.POST)
	taskid = request.POST['taskid']
	task = Task.objects.get(id=taskid)

	status = ''

	try:
		task.delete()
		status = 'success'
	except ObjectDoesNotExist:
		print("Not found task with same id")
		status = 'warning'

	results = {
		'status': status
	}

	return JsonResponse(results, content_type='application/json')

def getTasks(request):
	print('================get task================')
	print(request.GET)
	page_number = request.GET.get('page')
	sort_key = request.GET.get('sortKey')
	sort_way = request.GET.get('sortWay')
	taskList = None

	if sort_key == 'status':
		sort_key = 'is_cofirmed'
	
	if sort_way == 'dec':
		sort_key = '-' + sort_key

	taskList = Task.objects.order_by(sort_key)

	paginator = Paginator(taskList, 3)

	if page_number == None:
		page_number = 1
	page_obj = paginator.get_page(page_number)

	next_page = None
	prev_page = None

	if page_obj.has_next():
		next_page = page_obj.next_page_number()

	if page_obj.has_previous():
		prev_page = page_obj.previous_page_number()

	json = []
	for task in page_obj.object_list:
		json.append({
			'taskid': task.id,
			'title': task.title,
			'user': task.user,
			'email': task.email,
			'description': task.description,
			'is_cofirmed': task.is_cofirmed,
		})

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