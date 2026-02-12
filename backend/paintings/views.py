from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Painting

def paintings_list(request):   # ← שימי לב שיש request
    data = list(Painting.objects.values())
    return JsonResponse(data, safe=False)
