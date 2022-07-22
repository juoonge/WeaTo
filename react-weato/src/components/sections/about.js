import React from 'react';
import Section from '../../HOC/section';
import ImgTalk from '../../image/img_about_kakaotalk.png';
import IconComment from '../../image/icon_about_comment.png';
import IconSearch from '../../image/icon_about_region_search.png';
import IconRecommend from '../../image/icon_about_recommend.png';
import IconCCTV from '../../image/icon_about_cctv.png';
import IconCrown from '../../image/icon_about_crown.png';
import IconWeather from '../../image/icon_about_weather.png';

const about = () => {
  return (
    <Section id='about'>
      <div className='pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          {/* <h3 className='section-title'>
            <span>WeaTO? </span>
          </h3> */}
          {/* <h6 className='section-subtitle mr-auto ml-auto'> */}
          <img src={ImgTalk} />
          {/* </h6> */}
        </div>
        <div className='about-container'>
          <h1>이제, WeaTo(웨투)에게 물어보세요!</h1>
          <p>
            실시간 날씨 공유 서비스 WeaTo(웨투)는 모든 유저들이 나의 기상청이 됩니다.<br/>
            현장에 있는 유저들이 실시간으로 공유하는 정보를 통해 현재 날씨를 정확히 파악하세요.
          </p>
        </div>
        <div className='function-container'>
          <h3>기능 소개</h3>
          <div className='container'>
            <div className="line1">
              <div className='item'>
                <img src={IconComment} />
                <h2>날씨 등록</h2>
                <p className='function-explain'>
                  날씨 등록 시 코멘트 확인 가능!<br/>
                  쉽고 빠르게 날씨 등록하자
                </p>
              </div>
              <div className='item'>
                <img src={IconSearch} />
                <h2>지역 검색</h2>
                <p className='function-explain'>
                  지역만 검색하면<br/>
                  어느 곳이든 날씨가 한눈에!
                </p>
              </div>
              <div className='item'>
                <img src={IconRecommend} />
                <h2>편의시설 추천</h2>
                <p className='function-explain'>
                  날씨에 맞는 편의시설 추천까지!<br/>
                </p>
              </div>
            </div>
            <div className="line2">
              <div className='item'>
                <img src={IconCCTV} />
                <h2>CCTV</h2>
                <p className='function-explain'>
                  등록된 코멘트가 없다면?<br/>
                  CCTV로 날씨 확인!
                </p>
              </div>
              <div className='item'>
                <img src={IconCrown} />
                <h2>명예의 전당</h2>
                <p className='function-explain'>
                  좋아요를 받아<br/>
                  명예의 전당에 올라가보세요!
                </p>
              </div>
              <div className='item'>
                <img src={IconWeather} />
                <h2>일기 예보</h2>
                <p className='function-explain'>
                  다양한 기상 예보 비교!<br/>
                  (기상청, 웨더뉴스 등)
                </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Section>
  );
};

export default about;