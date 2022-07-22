import React, {useState} from 'react'
import "../../static/css/WeatoAdd.css";
import Todaytemp from "./Todaytemp";
import Todaysky from "./Todaysky";
import Todayhum from "./Todayhum";
import Todaywindy from "./Todaywindy";
import RainOrSnow from './RainOrSnow';

const Addlayout = ()=>{

    return(
        <div className="add-box-right">
            <div className="add-box-right-rayout">
                <Todaytemp/>
            </div>
            <div className="add-box-right-rayout">
                <Todaysky/>
            </div>
            <div className="add-box-right-rayout">
                <Todayhum/>
            </div> 
            <div className="add-box-right-rayout">
                <Todaywindy/>
            </div>
            <div className="add-box-right-rayout">
                <RainOrSnow/>
            </div>             
        </div> 
    );
}

export default Addlayout;
 