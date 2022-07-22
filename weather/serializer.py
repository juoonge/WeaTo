from dataclasses import fields
from rest_framework import serializers,generics,mixins
from .models import WeatherComment

# 조회용 Serializer
class WeatherCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeatherComment
        fields = '__all__'

class WeatherCommentCreateSerializer(serializers.ModelSerializer):
    scene = serializers.ImageField(use_url=True)
    class Meta:
        model = WeatherComment
        fields = ('location','temperature', 'sky', 'humidity', 'wind', 'rain', 'description', 'scene')
    
# 좋아요
# class LikeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=LikeMarks
#         fields='__all__'