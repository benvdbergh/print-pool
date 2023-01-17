from django.urls import path, re_path
from .views import ToolView, ToolsView, WorkshopsView, WorkshopView
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Print Pool API')

urlpatterns = [
    path('tool', ToolsView.as_view()),
    path('tool/<int:id>/',ToolView.as_view()),
    path('workshop', WorkshopsView.as_view()),
    path('workshop/<int:id>/', WorkshopView.as_view()),
    re_path('swagger', schema_view),
]
