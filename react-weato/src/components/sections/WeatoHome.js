import React from "react";
import LeftBox from '../UI/LeftBox';
import RightBox from '../UI/RightBox';
// import Header from '../UI/Header';
import bgImage from '../../image/back.png';

import '../../static/css/WeatoHome.css';

const WeatoHome = () => {
    return (
      <div id='WeatoHome'>
        <div
          className='WeatoHome-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="WeatoHome-background p-5">
            <div className="Container">
              <div className="Boxes">
                  <LeftBox/> 
              </div>
              <div className="Boxes">
                  <RightBox/>
              </div>      
            </div>
          </div>
        </div>
      </div>
    );
  };
export default WeatoHome;
