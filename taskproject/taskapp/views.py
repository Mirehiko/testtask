from django.http import Http404, HttpResponse, JsonResponse
from django.template import loader
from django.conf import settings
from django.shortcuts import render, redirect

# from django.core import serializers
# from django.urls import reverse

# from django.contrib.auth.models import User

from .models import Task, User

def authUser(request):
	print('data===================================')

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
	taskList = Task.objects.order_by('-pub_date')

	context = {}

	if request.session.has_key('username'):
		auth_user = request.session['username']
		user = User.objects.get(name=auth_user) 
		
		context = {
			'taskList': taskList,
			'user': user.name,
			'is_authorized': True,
		}
	else:
		context = {
			'taskList': taskList,
			'is_authorized': False,
		}

	return render(request, 'homePage.html', context )


def logout(request):
	try:
		del request.session['username']
	except:
	 	pass
	return redirect('/')
