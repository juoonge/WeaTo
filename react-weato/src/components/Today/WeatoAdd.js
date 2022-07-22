import React, {useState} from 'react'
import Addlayout from './Addlayout';
import "../../static/css/WeatoAdd.css";
import {Link} from 'react-router-dom';


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
            <Addlayout/>            
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