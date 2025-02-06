
from django.shortcuts import render
from rest_framework import generics
from .serializers import ProjectSerializer, SkillSerializer
from .models import projects, skills

# Create your views here.
class projectView(generics.ListAPIView):
    queryset = projects.objects.all()
    serializer_class = ProjectSerializer

class skillView(generics.ListAPIView):
    queryset = skills.objects.all()
    serializer_class = SkillSerializer