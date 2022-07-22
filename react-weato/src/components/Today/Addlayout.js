import React, {useState} from 'react'
import "../../static/css/WeatoAdd.css";

const Addlayout = ()=>{
    const checkOnlyOne = (checkThis) => {
     const checkboxes = document.getElementsByName('temp')
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
            checkboxes[i].checked = false
            }
        }
        }   
        const checkOnlyOne1 = (checkThis) => {
        const checkboxes = document.getElementsByName('sky')
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
            checkboxes[i].checked = false
            }
        }
        }
        const checkOnlyOne2 = (checkThis) => {
        const checkboxes = document.getElementsByName('hum')
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
            checkboxes[i].checked = false
            }
        }
        }
        const checkOnlyOne3 = (checkThis) => {
        const checkboxes = document.getElementsByName('windy')
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
            checkboxes[i].checked = false
            }
        }
        }
        const checkOnlyOne4 = (checkThis) => {
        const checkboxes = document.getElementsByName('rainOrsnow')
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
            checkboxes[i].checked = false
            }
        }
        }
    
        return(
            <div className="add-box-right">
            <div className="add-box-right-rayout">
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
            <div className="add-box-right-rayout">
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
            <div className="add-box-right-rayout">
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
            <div className="add-box-right-rayout">
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
            <div className="add-box-right-rayout">
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
            </div>             
            </div> 
        );
}

export default Addlayout;
 