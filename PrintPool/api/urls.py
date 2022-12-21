from django.urls import path
from .views import ToolView, ToolsView

urlpatterns = [
    path('tools', ToolsView.as_view()),
    path('tool/<int:id>/',ToolView.as_view())
]
