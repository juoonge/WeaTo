from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=30, unique=True, primary_key=True)

    def __str__(self):
        return self.name

class WeatherComment(models.Model):
    location = models.ForeignKey(Location, on_delete=models.CASCADE) # Location 클래스를 이용하여 query 생성. 즉 location이 정해지면 이를 기준으로 1:n 형태로 정해짐.
    temperature = models.FloatField() # 온도 저장용 field. 더움 / 적당함/ 추움 3가지로 구분
    sky = models.SmallIntegerField() # 하늘 저장용 field. 맑음 / 구름적음 / 구름많음 / 흐림 4가지로 구분
    humidity = models.SmallIntegerField() # 습기 저장용 field. 건조함 / 적당함 / 습함 으로 3가지 구분
    wind = models.SmallIntegerField() # 바람 저장용 field. 많이 안붐 / 적당함 / 많이 붐 3가지로 구분
    rain = models.SmallIntegerField(default=0) # 날씨 저장용 field. 아무것도 없음 / 비 / 눈 3가지로 구분하고, 아무것도 없는 상태를 기본값으로 지정
    description = models.TextField() # 날씨 묘사용 field.
    scene = models.ImageField(upload_to='scene/') # 사진 저장용 경로 설정.
    publish_date = models.DateTimeField(auto_now_add=True) # 작성할때 자동으로 시간 저장.

    def __str__(self):
        return self.location.name