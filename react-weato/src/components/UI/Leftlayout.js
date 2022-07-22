import React from "react";

const Leftlayout = ()=>{
    return(
    <div className="four-weather">
        <div className="four-weather-layout">
            <div className="TMA">
                <div className="TMA-layout">
                    <h1 className="TMA-name">기상청</h1>
                    <div className="TMA-temp">28.4℃</div>
                </div>
                <div className="TMA-layout">
                    <div className="TMA-avg-rainy">
                        <div className="TMA-rainy-icon">강수</div>
                        <div>34%</div>
                    </div>
                    <div className="TMA-avg-windy">
                        <div className="TMA-windy-icon">풍속</div>
                        <div>3m/s</div>
                    </div>
                    <div className="TMA-avg-hum">
                            <div className="TMA-hum-icon">습도</div>
                        <div>36%</div>
                    </div>            
                </div>
            </div>
        </div>
        <div className="four-weather-layout">
            <div className="Acu">
                <div className="Acu-layout">
                    <h1 className="Acu-name">아큐웨더</h1>
                    <div className="Acu-temp">28.4℃</div>
                </div>
                <div className="Acu-layout">
                    <div className="Acu-avg-rainy">
                        <div className="Acu-rainy-icon">강수</div>
                        <div>34%</div>
                    </div>
                    <div className="Acu-avg-windy">
                        <div className="Acu-windy-icon">풍속</div>
                        <div>3m/s</div>
                    </div>
                    <div className="Acu-avg-hum">
                            <div className="Acu-hum-icon">습도</div>
                        <div>36%</div>
                    </div>           
                </div>
            </div>
        </div>
        <div className="four-weather-layout">
            <div className="channel">
                <div className="channel-layout">
                    <h1 className="channel-name">웨더채널</h1>
                    <div className="channel-temp">28.4℃</div>
                </div>
                <div className="channel-layout">
                    <div className="channel-avg-rainy">
                        <div className="channel-rainy-icon">강수</div>
                        <div>34%</div>
                    </div>
                    <div className="channel-avg-windy">
                        <div className="channel-windy-icon">풍속</div>
                        <div>3m/s</div>
                    </div>
                    <div className="channel-avg-hum">
                        <div className="channel-hum-icon">습도</div>
                        <div>36%</div>
                    </div>       
                   </div>
            </div>
        </div>
        <div className="four-weather-layout">
            <div className="news">
                <div className="news-layout">
                    <h1 className="news-name">웨더뉴스</h1>
                    <div className="news-temp">28.4℃</div>
                </div>
                <div className="news-layout">
                    <div className="news-avg-rainy">
                        <div className="news-rainy-icon">강수</div>
                        <div>34%</div>
                    </div>
                    <div className="news-avg-windy">
                        <div className="news-windy-icon">풍속</div>
                        <div>3m/s</div>
                    </div>
                    <div className="news-avg-hum">
                            <div className="news-hum-icon">습도</div>
                        <div>36%</div>
                    </div>       
                </div>
            </div>
        </div>
    </div>      
    );

}
export default Leftlayout;