import React,{useState} from "react";

const checkOnlyOne2 = (checkThis) => {
    const checkboxes = document.getElementsByName('hum')
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
        }
    }
    }

const Todayhum =() =>{
    return (
        <div>
        <div className="add-box-right-title">· 오늘의 습도는</div>
                <div className="add-box-right-state">
                    <input type="checkbox" id="dry" name="hum" onChange={(e) => checkOnlyOne2(e.target)}></input>
                    <label for="dry"></label>
                    <input type="checkbox" id="moderate" name="hum" onChange={(e) => checkOnlyOne2(e.target)}></input>
                    <label for="moderate"></label>
                    <input type="checkbox" id="wet"name="hum" onChange={(e) => checkOnlyOne2(e.target)}></input>
                    <label for="wet"></label>
                </div>
                <div className="add-box-right-img">
                    <img src="img/icon_weather_dry.png" alt="dry"/>
                    <img src="img/icon_weather_moderate_humidity.png" alt="moderate"/>
                    <img src="img/icon_weather_wet.png" alt="wet"/>
                </div> 
                <div className="add-box-right-img-label">
                    <label>건조</label>
                    <label>적당</label>
                    <label>습함</label>
                </div> 
                </div>
    );

}
export default Todayhum;