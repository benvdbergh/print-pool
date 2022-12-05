from django.shortcuts import render
from rest_framework import generics, status
from .serializers import ToolSerializer, CreateToolSerializer
from .models import Tool

from rest_framework.views import APIView
from rest_framework.response import Response

class ToolView(generics.CreateAPIView):
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer

class CreateToolview(APIView):

    '''
    Allow post request to create or update a new tool
    '''
    serializer_class = CreateToolSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            id = serializer.data.id
            t_type = serializer.data.get('t_type') 
            brand = serializer.data.get('brand')
            model = serializer.data.get('model')
            owner = serializer.data.get('owner')

        queryset = Tool.objects.filter(id=id)
        if queryset.exists():
            tool = queryset[0]  #TODO switch from First to actual query logic
            tool.t_type = t_type
            tool.brand = brand
            tool.model = model
            tool.owner = owner
            tool.save(update_fields=['id','t_type','brand','model','owner'])
        else:
            tool = Tool(t_type=t_type, brand=brand, model=model, owner=owner)
            tool.save()

        return Response(ToolSerializer(tool))