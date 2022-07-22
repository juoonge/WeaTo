import React from "react";
import Leftlayout from './Leftweather/Leftlayout';
import TempCompare from "./Fourgraph/TempCompare";

const ReftBox = () =>{
let now= new Date();
let year=now.getFullYear();
let todayMonth=now.getMonth()+1;
let todayDate=now.getDate();
const week=['일','월','화','수','목','금','토'];
let datOfWeek=week[now.getDay()];
let hours=now.getHours();
let minutes=now.getMinutes();

    return (
        <div className='leftBox'>
            <div className="leftBox-layout">
                <img className="locate-icon" src="img/icon_search_locate.png"></img>
                <input type="text" name="place" placeholder="어느 지역의 날씨를 찾아볼까요?"></input>
                <button className="search-button"></button>
            </div>
            <div className="leftBox-layout">
                <div className="weather-content">
                    <div className="weather-info">
                       <img src="" alt="weather"></img> 
                    </div>
                    <div className="weather-info">
                        <div className="today">
                            {year}.{todayMonth}.{todayDate} ({datOfWeek}) {hours}:{minutes} 기준
                        </div>
                        <div className="area">
                            대구광역시 수성구 신매동
                        </div>
                        <div className="avg-temp">
                            26.9℃
                        </div>
                        <div className="avg-rainy">
                            <div className="rainy-icon">강수</div>
                            <div>34%</div>
                        </div>
                        <div className="avg-windy">
                            <div className="windy-icon">풍속</div>
                            <div>3m/s</div>
                        </div>
                        <div className="avg-hum">
                            <div className="hum-icon">습도</div>
                            <div>36%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="leftBox-layout">
                <Leftlayout/>
            </div>
            <div className="leftBox-layout" >
                <TempCompare/>
            </div>
        </div>
    );
};
export default ReftBox;