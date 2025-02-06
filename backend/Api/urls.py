from .views import projectView, skillView
from django.urls import path

urlpatterns = [
    path('projects/', projectView.as_view(), name = 'project-list'),
    path('skills/', skillView.as_view(), name = 'skills-list'),
]