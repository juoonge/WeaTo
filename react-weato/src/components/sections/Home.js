import React from 'react';

import Section from '../../HOC/section';
import bgImage from '../../image/back.png';
import LogoImage from '../../image/logo_WeaTo.png';
import {Link} from 'react-router-dom';

const home = () => {
  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <div className='LogoImage_home'>
              <img src={LogoImage} alt='about company' />
            </div>
            <h2 className='sub-title mb-4'>
              우리가 <b>함께 만들어 가는</b> 오늘의 날씨.<br/>
              한 번, 시작해볼까요?
            </h2>
            <Link to ="/Login" className='startbtn btn' >
              시작하기
            </Link>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;