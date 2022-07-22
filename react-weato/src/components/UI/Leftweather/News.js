import React from "react";

const News = ()=>{
    return(
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
    );
};
export default News;
