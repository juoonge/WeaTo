import React,{useState} from "react";

const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName('temp')
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
        }
    }
    }   

const Todaytemp = () =>{
    return(
        <div>
            <div className="add-box-right-title">· 오늘의 온도는</div>
                <div className="add-box-right-state">
                    <input type="checkbox" id="hot" name="temp" onChange={(e) => checkOnlyOne(e.target)} ></input>
                    <label for="hot"></label>
                    <input type="checkbox" id="warm" name="temp" onChange={(e) => checkOnlyOne(e.target)} ></input>
                    <label for="warm"></label>
                    <input type="checkbox" id="cold"name="temp" onChange={(e) => checkOnlyOne(e.target)} ></input>
                    <label for="cold"></label>
                </div>
                <div className="add-box-right-img">
                    <img src="img/icon_weather_hot.png" alt="hot"/>
                    <img src="img/icon_weather_dry.png" alt="dry"/>
                    <img src="img/icon_weather_cold.png" alt="cold"/>
                </div>
                <div className="add-box-right-img-label">
                    <label>더움</label>
                    <label>적당</label>
                    <label>추움</label>
                </div> 
        </div>
    );
};
export default Todaytemp;