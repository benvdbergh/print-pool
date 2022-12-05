from django.urls import path
from .views import ToolView

urlpatterns = [
    path('tool', ToolView.as_view())
]
