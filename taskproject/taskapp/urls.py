from django.conf.urls import url
from django.urls import include, path
from . import views
from django.conf.urls import include
from .models import Task
from rest_framework import routers


router = routers.DefaultRouter()
router.register('tasklist', views.TaskViewSet)

app_name = 'taskapp'

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('login/', views.authUser, name='authUser'),
    path('logout/', views.logout, name='logout'),
    path('api/', include(router.urls)),
    path('api/gettasks/', views.getTasks, name='gettasks'),
    path('api/createtask/', views.createTask, name='createTask'),
    path('api/updatetask/', views.updateTask, name='updateTask'),
    path('api/removetask/', views.removeTask, name='removeTask'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
