from django.db import models

# Create your models here.
class skills(models.Model):
    name = models.CharField(max_length=100)
    level = models.CharField(max_length=100, choices=[('Beginner', 'Beginner'), ('Intermediate', 'Intermediate'), ('Advanced', 'Advanced')])

    def __str__(self):
        return f"{self.name} - {self.level}"

class projects(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.URLField(max_length=500)
    link = models.URLField(max_length=200)
    tech = models.JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title