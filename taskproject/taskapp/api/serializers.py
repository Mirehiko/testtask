from rest_framework import serializers
from taskapp.models import Task, User

# class WorkSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Work
#         fields = (
#             'id',
#             'title',
#             'description',
#             'pub_date',
#             'launch_date',
#             'poster',
#             'user',
#             'category'
#         )
#         read_only_fields = ['pk', 'title']
