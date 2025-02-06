from rest_framework import serializers
from .models import projects, skills

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = projects
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = skills
        fields = '__all__' 
        