import React from "react";
import { Link } from "react-router-dom";
import back from "../../../image/img_comment_picture.png";
import hot from "../../../image/icon_comment_hot.png";
import cloudy from "../../../image/icon_comment_cloudy1.png";
import wet from "../../../image/icon_weather_wet.png";
const Comment = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  return (
    <div className="contentBox">
      <div className="comment-go">
        <div className="comment-time">
          오전 {hours}:{minutes}
        </div>
        <div className="comment-gobox">
          <div className="comment-gobox-inner">
            <h6>지금 날씨는 어때 보이나요? 코멘트를 자유롭게 남겨보세요!</h6>
            <Link to="/commet-submit" className="comment-gobox-btn ">
              게시하러 가기
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="comment-list ">
        <div className="comment-cctv">
          <Link to="/cctv" className="comment-cctvbtn btn">
            지역 CCTV 확인하기
          </Link>
        </div>
        <div className="comment-boxs">
          <div className="comment-listbox">
            <div className="comment-usertime">
              오후 5:34
              <div className="comment-userweather" style={{ color: "#328D8A" }}>
                흐림
              </div>
            </div>
            <div className="comment-userbox">
              <div
                className="comment-userbox-color"
                style={{ backgroundColor: "#328D8A" }}
              ></div>
              <div className="comment-userbox-in">
                <div className="comment-userbox-circle">
                  <div
                    className="comment-userbox-image"
                    style={{ backgroundImage: `url(${back})` }}
                  ></div>
                  <div className="comment-userbox-iconbox">
                    <div className="comment-userbox-icon">
                      <img src={hot} alt="" />
                    </div>
                    <text>더움</text>
                  </div>
                  <div className="comment-userbox-iconbox">
                    <div className="comment-userbox-icon">
                      <img src={cloudy} alt="" />
                    </div>
                    <text>구름조금</text>
                  </div>
                  <div className="comment-userbox-iconbox">
                    <div className="comment-userbox-icon">
                      <img src={wet} alt="" />
                    </div>
                    <text>습함</text>
                  </div>
                </div>

                <div className="comment-userbox-inner">
                  아깐 분명 맑았는데... 갑자기 흐려지네요ㅠ
                  <br />
                  사진에서 보시는 것보다 구름도 여기저기 껴있어서 좀 흐려요.
                  <br />
                  덥고 습한건 여전하네요. 시원하게 좀 살고 싶어요..
                </div>
              </div>
            </div>
          </div>
          <div className="comment-listbox">
            <div className="comment-usertime">
              오전 11:20
              <div className="comment-userweather" style={{ color: "#58B3DB" }}>
                구름 조금
              </div>
            </div>
            <div className="comment-userbox">
              <div
                className="comment-userbox-color"
                style={{ backgroundColor: "#58B3DB" }}
              ></div>
              <div className="comment-userbox-in">
                <div className="comment-userbox-inner">
                  여러분 우산 들고가세요
                  <br />저 비오는 날에만 허리가 쑤시는데 오늘 늦잠자고
                  일어났더니 딱 아프네요..
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
