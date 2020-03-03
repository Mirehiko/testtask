from taskapp.models import Task, User
from rest_framework import serializers

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = (
            'id',
            'title',
            'description',
            'pub_date',
            'is_cofirmed',
            'user',
            'email'
        )
        read_only_fields = ['pk']