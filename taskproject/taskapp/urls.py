from django.conf.urls import url
from django.urls import include, path
from . import views
# from .api.views import WorkListAPIView
import taskapp.api.views

from django.conf.urls import include
# from .models import Work, Category
# from rest_framework import routers, serializers, viewsets
# from django.views.decorators.csrf import csrf_exempt

# # Serializers define the API representation.
# class WorksSerializer(serializers.ModelSerializer):
#     category = serializers.StringRelatedField(many=True)
#     user = serializers.StringRelatedField(many=True)

#     class Meta:
#         model = Work
#         fields = ('id', 'title', 'description', 'pub_date', 'launch_date', 'poster', 'user', 'category')
#         ordering = ('-pub_date')


# # ViewSets define the view behavior.
# class WorksViewSet(viewsets.ReadOnlyModelViewSet):
#     def get_serializer_class(self):
#         if self.action == 'list':
#             return WorksSerializer
#         return serializers.Default

#     def get_queryset(self):
#         queryset = Work.objects.all()
#         category = self.request.GET.get('category', None)

#         if category and category != 'all':
#             category_id = Category.objects.get(category_url=category).id
#             queryset = queryset.filter(category=category_id).order_by('-pub_date')

#         return queryset


# Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()
# router.register('', WorksViewSet, base_name="work-list")

app_name = 'taskapp'

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('login/', views.authUser, name='authUser'),
    path('logout/', views.logout, name='logout'),
    path('createtask/', views.createTask, name='createTask'),
    # path('<int:work_id>/', views.detail, name='detail'),
    # path('api/', include(router.urls)),
]
