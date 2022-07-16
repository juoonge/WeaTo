from django.shortcuts import redirect, render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
import datetime

from rest_framework import viewsets

from .models import WeatherComment
from .serializer import WeatherCommentSerializer, WeatherCommentCreateSerializer
from django.db.models import Q

def cctv(request):
    return render(request,'cctv.html')
class TotalWeatherCommentAPIView(APIView):
    def get(self, request):
        total_weathercomment = WeatherComment.objects.all()
        serializer = WeatherCommentSerializer(total_weathercomment, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class LocalWeatherCommentAPIView(APIView):
    def get(self, request, location):
        start_date = datetime.date.today()
        end_date = start_date + datetime.timedelta(days=-1)

        local_weathercomment = WeatherComment.objects.filter(Q(location=location) & Q(date__range=[end_date, start_date]))
        serializer = WeatherCommentSerializer(local_weathercomment, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class WeatherCreateAPIView(APIView):
    def post(self, request):
        serializer = WeatherCommentCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)