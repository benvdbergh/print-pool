from django.shortcuts import render
from rest_framework import generics, status
from .serializers import ToolSerializer
from .models import Tool

# from rest_framework.views import APIView
from rest_framework.response import Response

class ToolsView(generics.ListCreateAPIView):
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer


class ToolView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer
    lookup_url_kwarg = 'id'