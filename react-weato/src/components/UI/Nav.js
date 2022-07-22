import React, { useState, useEffect } from 'react';
// import Login from '../sections/Login';
// import SignUp from '../sections/SignUp';
import Linkk from './Link';
import LogoImage from '../../image/logo_WeaTo.png';
import {Link} from 'react-router-dom';

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);

  return (

      <div>
        <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
          <div className='container'>
            <a className='navbar-brand' href='/'>
            <div className='LogoImage'>
              <img src={LogoImage} alt='about company' />
            </div>
            </a>
            <div
              className={`navbar-toggler nav-icon ${(() => {
                if (toggeledNav) return 'open';
                return '';
              })()}`}
              onClick={toggleNav}
            >
              <span />
              <span />
              <span />
            </div>

            <div
              className={`collapse navbar-collapse ${(() => {
                if (toggeledNav) return 'show';
                return '';
              })()}`} 
            >
              
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Linkk target='about' offset={-120} classes='nav-link'>
                    서비스 소개
                  </Linkk>
                </li>
                <li className='nav-item'>
                  {/* <Linkk target='Login' to ="/Login" classes='nav-link'>
                    로그인
                  </Linkk> */}     
                  <Link to ="/login" className='nav-link' >로그인</Link>      
                </li>
                <li className='nav-item'>
                  {/* <Linkk target='SignUp' to ="/SignUp" classes='nav-link'>
                    회원가입
                  </Linkk> */}
                  <Link to ="/signup" className='nav-link' >회원가입</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
};

export default Nav;