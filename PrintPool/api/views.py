from django.shortcuts import render
from rest_framework import generics, status
from .serializers import ToolSerializer, WorkshopSerializer
from .models import Tool, Workshop

# from rest_framework.views import APIView
from rest_framework.response import Response

class ToolsView(generics.ListCreateAPIView):
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer


class ToolView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer
    lookup_url_kwarg = 'id'

class WorkshopsView(generics.ListCreateAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer
    

class WorkshopView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer
    lookup_url_kwarg = 'id'