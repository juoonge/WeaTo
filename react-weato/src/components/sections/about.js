import React from 'react';
import Section from '../../HOC/section';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          {/* <h3 className='section-title'>
            <span>WeaTO? </span>
          </h3> */}
          {/* <h6 className='section-subtitle mr-auto ml-auto'> */}
          <div className='aboutqs'>
            엄마! 오늘 추워?<br/>
            긴팔 입어도 괜찮아?<br/>
            우산 챙겨야 해?<br/>
          </div>
          {/* </h6> */}
        </div>
        <div className='section-content'>

              <div className='about-description'>
                <p>
                <div className='aboutas'>이제 weato(웨투)에게 물어보세요! <br/></div>
                <div className = 'aboutexplain'>
                  실시간 날씨 공유 서비스 weato(웨투)는 모든 유저들이 나의 기상청이 됩니다.<br/>
                현장에 있는 유저들이 실시간으로 공유하는 정보를 통해 현재 날씨를 정확히 파악하세요<br/>
                </div>
                </p>
                <div className='aboutas'>기능소개</div>
                <div className = 'aboutexplain'>
                • 날씨 등록
                날씨 등록 시 코멘트 확인 가능!<br/>
                쉽고 빠르게 날씨 등록하자 <br/>
                • 지역 검색<br/>
                지역만 검색하면 어느 곳이든 날씨가 한눈에!<br/>
                • 편의시설 추천<br/>
                날씨에 맞는 편의시설 추천까지!<br/>
                • CCTV<br/>
                등록된 코멘트가 없거나, 최근 코멘트가 없다면?<br/>
                걱정 NO ⇒ CCTV로 날씨 확인!!<br/>
                • 명예의 전당<br/>
                좋아요를 받아 명예의 전당에 올라가보세요!<br/>
                • 일기 예보<br/>
                다양한 기상 예보 비교! (기상청, 웨더뉴스 등)<br/>
                </div>
              </div>
            </div>
          </div>

    </Section>
  );
};

export default about;