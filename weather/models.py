from django.db import models

class WeatherComment(models.Model):
    location = models.CharField(max_length=30)
    temperature = models.FloatField()  # 온도 저장용 field. 더움 / 적당함/ 추움 3가지로 구분
    sky = models.SmallIntegerField()  # 하늘 저장용 field. 맑음 / 구름적음 / 구름많음 / 흐림 4가지로 구분
    humidity = models.SmallIntegerField()  # 습기 저장용 field. 건조함 / 적당함 / 습함 으로 3가지 구분
    wind = models.SmallIntegerField()  # 바람 저장용 field. 많이 안붐 / 적당함 / 많이 붐 3가지로 구분
    rain = models.SmallIntegerField(default=0)  # 날씨 저장용 field. 아무것도 없음 / 비 / 눈 3가지로 구분하고, 아무것도 없는 상태를 기본값으로 지정
    description = models.TextField()  # 날씨 묘사용 field.
    scene = models.ImageField(blank=True, upload_to='scene/', default='default.png',)  # 사진 저장용 경로 설정.
    date = models.DateTimeField(auto_now_add=True)  # 작성할때 자동으로 시간 저장.

    def __str__(self):
        return self.location + '\t' + str(self.date)