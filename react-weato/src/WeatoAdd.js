import React, {useState} from 'react'
import "./static/style.css";
import {Link} from 'react-router-dom';


  // import { faUser } from "@fortawesome/free-solid-svg-icons";
  // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WeatoAdd() {
  let now= new Date();
  let year=now.getFullYear();
  let todayMonth=now.getMonth()+1;
  let todayDate=now.getDate();
  const week=['일','월','화','수','목','금','토'];
  let datOfWeek=week[now.getDay()];
  let hours=now.getHours();
  let minutes=now.getMinutes();
    
  const [textValue, setTextValue] = useState("");
  const handleSetValue = (e) => {
    setTextValue(e.target.value);
  };

  const [fileImage, setFileImage] = useState("");
  
  const saveFileImage = (e) => {// 첨부한 사진 링크 가져오기
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const areaname="대구광역시 수성구 신매동";

    return(
      <div className="add-main"> 
        <div className="add-Container">
          <div className="add-title-box">
            <div className="add-title">현재지역</div>
            <div className="title-display"> {/*페이지 제목 */}
              <div className="locate-Img"></div>
              <div className="area-name">{areaname}</div>
              <button className="gps-button" ></button>
            </div>
            <ul className="area-link">이 지역이 아니신가요? <Link to ="">직접찾기</Link></ul>
            {/* 오늘 날짜/시간 */}
            <div className="add-today">{year}.{todayMonth}.{todayDate} ({datOfWeek}) {hours}:{minutes}</div> 
            <hr></hr>
          </div>
          {/* 사진 등록, 상태 체크 */}
          <div className="add-content-box">
            <div className="add-box">
              {/* 레이아웃 왼쪽 */}
              <div className="add-box-left">
                {fileImage ? 
                  <img
                  className="sampleImg"
                    alt="sample"
                    src={fileImage}
                  />
                  : <div className="NosampleImg"></div>
                }
                  <input type='file' className="imgInput" id="weatherImg" name="Inputfile" onChange={saveFileImage}></input>    
              </div>
            </div>
            <div className="add-box">
              {/* 레이아웃 오른쪽 */}
              <div className="add-box-right">
                <div className="add-box-right-rayout">
                  <div className="add-box-right-title">· 오늘의 온도는</div>
                  <div className="add-box-right-state">
                    <input type="checkbox" id="hot" name="temp" ></input>
                    <label for="hot"></label>
                    <input type="checkbox" id="warm" name="temp" ></input>
                    <label for="warm"></label>
                    <input type="checkbox" id="cold"name="temp" ></input>
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
                    <input type="checkbox" id="sunny" name="sky" ></input>
                    <label for="sunny"></label>
                    <input type="checkbox" id="cloudy1" name="sky" ></input>
                    <label for="cloudy1"></label>
                    <input type="checkbox" id="cloudy2"name="sky" ></input>
                    <label for="cloudy2"></label>
                    <input type="checkbox" id="cloudy3"name="sky" ></input>
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
                    <input type="checkbox" id="dry" name="hum" ></input>
                    <label for="dry"></label>
                    <input type="checkbox" id="moderate" name="hum" ></input>
                    <label for="moderate"></label>
                    <input type="checkbox" id="wet"name="hum" ></input>
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
                    <input type="checkbox" id="windless" name="windy" ></input>
                    <label for="windless"></label>
                    <input type="checkbox" id="windy" name="windy" ></input>
                    <label for="windy"></label>
                    <input type="checkbox" id="typoon"name="windy" ></input>
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
                    <input type="checkbox" id="rainy" name="rainOrsnow" ></input>
                    <label for="rainy"></label>
                    <img src="img/icon_weather_rainy.png" alt="rainy"/>
                    <label>비</label>
                    <input type="checkbox" id="snow" name="rainOrsnow" ></input>
                    <label for="snow"></label>
                    <img src="img/icon_weather_snowy.png" alt="snow"/>
                    <label>눈</label>
                  </div>
                </div>             
              </div>              
            </div>
          </div>
          {/* 코멘트 입력 공간 */}
          <textarea className="comment-input" type="text" placeholder="지금 날씨는 어때 보이나요? 코멘트를 자유롭게 남겨보세요!"  value={textValue} onChange={(e) => handleSetValue(e)} ></textarea>
          <button className="comment-add-button">게시하기</button>
        </div>
      </div>
    );
  }
  
  export default WeatoAdd;  
