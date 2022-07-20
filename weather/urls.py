from django.urls import path
from django.conf import settings
from . import views
from django.conf.urls.static import static

from .views import TotalWeatherCommentAPIView, LocalWeatherCommentAPIView, WeatherCreateAPIView

app_name='toilet'

urlpatterns = [
    path('weather/',views.cctv,name='cctv'),
    path('total/', TotalWeatherCommentAPIView.as_view()),
    path('local/<str:location>/', LocalWeatherCommentAPIView.as_view()),
    path('create/', WeatherCreateAPIView.as_view()),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_URL)