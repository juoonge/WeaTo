import React,{useState} from "react";

const checkOnlyOne1 = (checkThis) => {
    const checkboxes = document.getElementsByName('sky')
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
        }
    }
    }

const Todaytemp = () =>{
    return(
        <div>
            <div className="add-box-right-title">· 오늘의 하늘은</div>
                <div className="add-box-right-state-sky">
                    <input type="checkbox" id="sunny" name="sky" onChange={(e) => checkOnlyOne1(e.target)}></input>
                    <label for="sunny"></label>
                    <input type="checkbox" id="cloudy1" name="sky" onChange={(e) => checkOnlyOne1(e.target)}></input>
                    <label for="cloudy1"></label>
                    <input type="checkbox" id="cloudy2"name="sky" onChange={(e) => checkOnlyOne1(e.target)}></input>
                    <label for="cloudy2"></label>
                    <input type="checkbox" id="cloudy3"name="sky" onChange={(e) => checkOnlyOne1(e.target)}></input>
                    <label for="cloudy3"></label>
                </div>
                <div className="add-box-right-img-sky">
                    <img src="img/icon_weather_sunny.png" alt="sunny"/>
                    <img src="img/icon_weather_cloudy1.png" alt="cloudy1"/>
                    <img src="img/icon_weather_cloudy2.png" alt="cloudy2"/>
                    <img src="img/icon_weather_cloudy3.png" alt="cloudy3"/>
                </div>
                <div className="add-box-right-img-label-sky">
                    <label>맑음</label>
                    <label>적음</label>
                    <label>많음</label>
                    <label>흐림</label>
                </div>   
        </div>
    );
}
export default Todaytemp;