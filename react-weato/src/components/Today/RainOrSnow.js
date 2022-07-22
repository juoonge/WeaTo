import React from 'react';

const checkOnlyOne4 = (checkThis) => {
    const checkboxes = document.getElementsByName('rainOrsnow')
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
        }
    }
    }

const RainOrSnow =()=>{
    return(
        <div className="add-box-right-rainOrsnow">
                    <input type="checkbox" id="rainy" name="rainOrsnow" onChange={(e) => checkOnlyOne4(e.target)}></input>
                    <label for="rainy"></label>
                    <img src="img/icon_weather_rainy.png" alt="rainy"/>
                    <label>비</label>
                    <input type="checkbox" id="snow" name="rainOrsnow" onChange={(e) => checkOnlyOne4(e.target)}></input>
                    <label for="snow"></label>
                    <img src="img/icon_weather_snowy.png" alt="snow"/>
                    <label>눈</label>
                </div>
    );
}
export default RainOrSnow;