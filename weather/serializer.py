from rest_framework import serializers

from users.models import CustomAccountManager
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

# class UserSerializer(serializers.ModelSerializer):
#     weathercomment=serializers.PrimaryKeyRelatedField(many=True,queryset=WeatherComment.objects.all())
    
#     class Meta:
#         model=CustomAccountManager
#         fields=("id","user_name","weathercomment")