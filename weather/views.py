from xml.dom import ValidationErr
from django.shortcuts import redirect, render, get_object_or_404
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics,mixins,permissions
import datetime

from rest_framework import viewsets

from .models import WeatherComment
from .serializer import WeatherCommentSerializer, WeatherCommentCreateSerializer
from django.db.models import Q
from .permissions import CustomReadOnly
from users.models import NewUser

def cctv(request):

    return render(request,'cctv.html')

class TotalWeatherCommentAPIView(APIView):
    def get(self, request):
        total_weathercomment = WeatherComment.objects.all()
        serializer = WeatherCommentSerializer(total_weathercomment, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class LocalWeatherCommentAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated] #로그인 되어 있어야만 볼 수 있음
    
    def get(self, request, location):
        start_date = datetime.date.today()
        end_date = start_date + datetime.timedelta(days=-1)

        local_weathercomment = WeatherComment.objects.filter(Q(location=location) & Q(date__range=[end_date, start_date]))
        serializer = WeatherCommentSerializer(local_weathercomment, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class WeatherCreateAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated,CustomReadOnly] #작성자만 수정 가능
    
    def post(self, request):
        user = NewUser.objects.get(user_name = self.request.user) 
        user.create_comment = True 
        user.save()

        serializer = WeatherCommentCreateSerializer(data=request.data)
    
        if serializer.is_valid():
            serializer.save(author = self.request.user)
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class CommentLike(generics.ListCreateAPIView,mixins.DestroyModelMixin):
#     serializer_class=LikeSerializer
#     permission_classes=[permissions.IsAuthenticated]

#     def get_queryset(self):
#         user=self.request.user
#         wcomment=WeatherComment.objects.get(pk=self.kwargs['pk'])
#         return LikeMarks.objects.filter(user=user,wcomment=wcomment)
    
#     def create(self,serializer,*args,**kwargs):
#         if self.get_queryset.exists():
#             self.get_queryset().delete()
#             return Response(status=status.HTTP_204_NO_CONTENT)
#         serializer.save(user=self.request.user,wcomment=WeatherComment.objects.get(pk=self.kwargs['pk']))
    
#     def delete(self,request,*args,**kwargs):
#         if self.get_queryset().exists():
#             self.get_queryset().delete()
#             return Response(status=status.HTTP_204_NO_CONTENT)
#         else:
#             raise ValidationErr(" ")
    