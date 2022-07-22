from ast import For, Mult
from xml.dom import ValidationErr
from django.shortcuts import redirect, render, get_object_or_404
from django.http import JsonResponse
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics,mixins,permissions
import datetime
from django.views import View

from rest_framework import viewsets

from .models import WeatherComment
from .serializer import WeatherCommentSerializer, WeatherCommentCreateSerializer
from django.db.models import Q
from rest_framework.parsers import MultiPartParser, FormParser

import weather.crawler as crawler


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


class MainView(APIView):
    def post(self, request):
        location = request.data['location']
        soups = crawler.Crawler(location)
        t = crawler.Temperature(soups)
        r = crawler.Rainprobability(soups)
        h = crawler.Humidity(soups)
        state = crawler.now(location=location, soups=soups)
        start_date = datetime.date.today()
        end_date = start_date + datetime.timedelta(days=-1)
        local_weathercomment = WeatherComment.objects.filter(Q(location=location) & Q(date__range=[end_date, start_date]))
        serializer = WeatherCommentSerializer(local_weathercomment, many=True)
        response = {'state' : state,
                    'temperature':t,
                    'rain_prob':r,
                    'humidity':h,
                    'comments':serializer.data}
        return Response(response)