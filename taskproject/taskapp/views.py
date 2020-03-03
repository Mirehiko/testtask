from django.http import Http404, HttpResponse, JsonResponse
from django.template import loader
from django.conf import settings
from django.shortcuts import render, redirect

# from django.core import serializers

from django.db import transaction
# from django.urls import reverse

# from django.contrib.auth.models import User

from .models import Task, User

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
	taskList = Task.objects.order_by('-pub_date')[:3][::-1]
	firstTask = taskList[0]
	lastTaskt = taskList[2]
	next_obj = Task.objects.filter(pub_date__gt=firstTask.pub_date).first() or Task.objects.first()
	prev_obj = Task.objects.filter(pub_date__lt=lastTaskt.pub_date).last() or Task.objects.last()

	context = {
		'taskList': taskList,
		'next_obj': next_obj,
		'prev_obj': prev_obj,
	}
	if request.session.has_key('username'):
		auth_user = request.session['username']
		user = User.objects.get(name=auth_user)
		context['user'] = user.name
		context['is_authorized'] = True
		# context = {
		# 	'taskList': taskList,
		# 	'user': user.name,
		# 	'is_authorized': True,
		# }
	# else:
	# 	context = {
	# 		'taskList': taskList,
	# 		'is_authorized': False,
	# 	}

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

	with transaction.atomic():
		task = Task(user=username, description=description, title=title, email=email)
		task.save()

	return redirect('/')

def updateTask(request, data):
	task_id = request.POST['task_id']
	title = request.POST['title']
	description = request.POST['description']
	username = request.POST['username']
	email = request.POST['email']
	# status = request.POST['status']

	task = Task.objects.get(identifier=task_id)
	task.title = title
	task.description = description
	task.username = username
	task.email = email

	with transaction.atomic():
		task.save()
	
	return redirect('/')