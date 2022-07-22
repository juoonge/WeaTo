import React from'react';

const checkOnlyOne3 = (checkThis) => {
    const checkboxes = document.getElementsByName('windy')
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
        }
    }
    }
const Todaywindy=()=>{
    return (
        <div>
            <div className="add-box-right-title">· 오늘의 바람은</div>
                <div className="add-box-right-state">       
                    <input type="checkbox" id="windless" name="windy" onChange={(e) => checkOnlyOne3(e.target)}></input>
                    <label for="windless"></label>
                    <input type="checkbox" id="windy" name="windy" onChange={(e) => checkOnlyOne3(e.target)}></input>
                    <label for="windy"></label>
                    <input type="checkbox" id="typoon"name="windy" onChange={(e) => checkOnlyOne3(e.target)}></input>
                    <label for="typoon"></label>
                </div>
                <div className="add-box-right-img">
                    <img src="img/icon_weather_windless.png" alt="windless"/>
                    <img src="img/icon_weather_windy.png" alt="windy"/>
                    <img src="img/icon_weather_typhoon.png" alt="typoon"/>
                </div>
                <div className="add-box-right-img-label">
                    <label>적게</label>
                    <label>적당</label>
                    <label>많이</label>
                </div>  
        </div>
    );
}
export default Todaywindy;
