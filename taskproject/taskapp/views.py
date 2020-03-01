from django.http import Http404, HttpResponse, JsonResponse
from django.template import loader
from django.shortcuts import render
from django.conf import settings

from .models import Task, User

def index(request):
	taskList = Task.objects.order_by('-pub_date')

	context = {
		'taskList': taskList,
	}

	return render(request, 'homePage.html', context )


def administrator(request, user_id):
	# try:
		# user = User.objects.get(pk=user_id)
	# except User.DoesNotExist:
		# raise Http404("User does not exist")
# 
    # taskList = TaskList.objects.order_by('-pub_date')


	context = {
		# 'taskList': taskList,
		# 'user': user,
	}

	return render(request, 'adminPage.html', context )