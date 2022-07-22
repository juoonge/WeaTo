import React from "react";
import Tma from "./Tma";
import Acu from "./Acu";
import Channel from "./Channel";
import News from "./News";
const Leftlayout = ()=>{
    return(
    <div className="four-weather">
        <div className="four-weather-layout">
            <Tma/>
        </div>
        <div className="four-weather-layout">
            <Acu/>
        </div>
        <div className="four-weather-layout">
            <Channel/>
        </div>
        <div className="four-weather-layout">
            <News/>
        </div>
    </div>      
    );

}
export default Leftlayout;