import React from "react";

const Acu =()=>{
    return (
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
    );
}
export default Acu;