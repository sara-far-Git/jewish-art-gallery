from django.db import models

class Painting(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.URLField()
    story = models.TextField(blank=True)
    verse = models.CharField(max_length=300, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
