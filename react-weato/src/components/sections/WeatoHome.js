import React from "react";
import LeftBox from '../UI/LeftBox';
import RightBox from '../UI/RightBox';
import Header from '../UI/Header';

import '../../static/css/WeatoHome.css';

const WeatoHome = () => {
    return (
    <>
      <Header />
      <main>
        <div className="Container">
        <div className="Boxes">
           <LeftBox/> 
        </div>
        <div className="Boxes">
            <RightBox/>
        </div>      
      </div>
      </main>
    </>
    );
  };
export default WeatoHome;
