import React from "react";

const Tma = ()=>{
    return(
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
    );
};
export default Tma;