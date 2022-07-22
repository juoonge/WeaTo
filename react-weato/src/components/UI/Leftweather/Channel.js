import React from "react";

const Channel = ()=>{
    return(
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
    );
}
export default Channel;