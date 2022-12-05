from rest_framework import serializers
from .models import Tool

class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = ('id', 't_type','brand','model','owner','date_created','date_modified')

class CreateToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = ('id','t_type','brand','model','owner')