from selenium import webdriver
from selenium.webdriver.common.by import By 
from bs4 import BeautifulSoup
import time
import datetime
from webdriver_manager.chrome import ChromeDriverManager

def Crawler(location):
    soups = []
    driver = webdriver.Chrome(ChromeDriverManager().install())
    time.sleep(1)
    driver.get('https://www.naver.com/') # 네이버로 접속
    time.sleep(0.5)
    input_location = driver.find_element(By.XPATH, '//*[@id="query"]') # 검색창 위치 찾기
    input_location.send_keys(f'{location} 날씨') # 날씨값 입력
    time.sleep(0.1)
    input_location.submit() # 검색 전송
    time.sleep(0.1)
    html = driver.page_source
    soup_wether = BeautifulSoup(html, 'html.parser')
    soups.append(soup_wether)
    time.sleep(3) # 페이지가 늦게 렌더링 되었을때 오류가 나오는데, 이를 방지
    driver.find_element(By.XPATH, '//*[@id="main_pack"]/section[1]/div[1]/div[2]/div[1]/div[1]/div/div[1]/div[2]/a/strong').click() # 화살표 아래로
    time.sleep(0.1)
    driver.find_element(By.XPATH, '//*[@id="main_pack"]/section[1]/div[1]/div[2]/div[1]/div[1]/div/div[1]/div[2]/div/div/div/div/div/ul/li[2]/a').click() # 아큐웨더
    html = driver.page_source
    soup_aqweather = BeautifulSoup(html, 'html.parser')
    time.sleep(0.1)
    soups.append(soup_aqweather)
    driver.find_element(By.XPATH, '//*[@id="main_pack"]/section[1]/div[1]/div[2]/div[1]/div[1]/div/div[1]/div[2]/a/strong').click() # 화살표 아래로
    time.sleep(0.1)
    driver.find_element(By.XPATH, '//*[@id="main_pack"]/section[1]/div[1]/div[2]/div[1]/div[1]/div/div[1]/div[2]/div/div/div/div/div/ul/li[3]/a').click() # 웨더채널
    html = driver.page_source
    soup_weatherchannel = BeautifulSoup(html, 'html.parser')
    soups.append(soup_weatherchannel)
    time.sleep(0.1)
    driver.find_element(By.XPATH, '//*[@id="main_pack"]/section[1]/div[1]/div[2]/div[1]/div[1]/div/div[1]/div[2]/a/strong').click() # 화살표 아래로
    time.sleep(0.1)
    driver.find_element(By.XPATH, '//*[@id="main_pack"]/section[1]/div[1]/div[2]/div[1]/div[1]/div/div[1]/div[2]/div/div/div/div/div/ul/li[4]/a').click() # 웨더뉴스
    html = driver.page_source
    soup_weathernews = BeautifulSoup(html, 'html.parser')
    soups.append(soup_weathernews)
    
    return soups


def Temperature(soups):
    temperatures = {}
    for i in range(4):
        temp = []
        for j in soups[i].select('div.point_box>span.num')[0:7]:# 7시간 동안의 기온 추출
            temp.append(int(j.text[-3:-1]))
        if i == 0:
            temperatures['weather'] = temp
        elif i == 1:
            temperatures['aqweather'] = temp
        elif i == 2:
            temperatures['weatherchannel'] = temp
        elif i == 3:
            temperatures['weathernews'] = temp
    return temperatures

def Rainprobability(soups):
    rainprobabilities = {}
    for i in range(4):
        temp = []
        for j in soups[i].select('div.icon_wrap>ul>li>em.value')[0:7]:
            if j.text == '-':
                temp.append(0)
            else:
                temp.append(int(j.text[:-1]))
        if i == 0:
            rainprobabilities['weather'] = temp
        elif i == 1:
            rainprobabilities['aqweather'] = temp
        elif i == 2:
            rainprobabilities['weatherchannel'] = temp
        elif i == 3:
            rainprobabilities['weathernews'] = temp
            
    return rainprobabilities


def Humidity(soups):
    humidities = {}
    for i in range(4):
        temp = []
        for j in soups[i].select('div.humidity_graph_box>div>div>div>div>ul>li>div>span>span')[0:7]:
            temp.append(int(j.text))
        if i == 0:
            humidities['weather'] = temp
        elif i == 1:
            humidities['aqweather'] = temp
        elif i == 2:
            humidities['weatherchannel'] = temp
        elif i == 3:
            humidities['weathernews'] = temp
    return humidities


def now(location, soups):
    state = {}
    now = datetime.datetime.now()
    weekdays = ['월', '화', '수', '목', '금', '토', '일']
    state['year'] = now.year
    state['month'] = now.month
    state['day'] = now.day
    state['location'] = location
    state['hour'] = now.hour
    state['minute'] = now.minute
    state['weekday'] = weekdays[now.weekday()]
    t = Temperature(soups)
    r = Rainprobability(soups)
    h = Humidity(soups)
    state['temperature'] = round((int(t['weather'][0]) + t['aqweather'][0] + t['weatherchannel'][0] + t['weathernews'][0])/4, 1)
    state['rain_prob'] = round((r['weather'][0] + r['aqweather'][0] + r['weatherchannel'][0] + r['weathernews'][0])/4, 1)
    state['humidity'] = round((h['weather'][0] + h['aqweather'][0] + h['weatherchannel'][0] + h['weathernews'][0])/4, 1)
    state['wind'] = round((float(soups[0].select('dd.desc')[2].text[:-3]) + float(soups[1].select('dd.desc')[2].text[:-3]) + float(soups[2].select('dd')[2].text[:-3]) + float(soups[3].select('dd')[2].text[:-3]))/4,1)
    return state