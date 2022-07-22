import React from "react";
import { Link } from "react-router-dom";

const Comment = () => {
  return (
    <div className="contentBox">
      <div className="comment-go">
        <div className="comment-time">오후 몇시</div>
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
              오후 몇시
              <div className="comment-userweather">날씨</div>
            </div>
            <div className="comment-userbox">
              <div className="comment-userbox-color"></div>
              <div className="comment-userbox-in">
                <div className="comment-userbox-circle">
                  <div className="comment-userbox-image"></div>
                  <div className="comment-userbox-iconbox">
                    <div className="comment-userbox-icon"></div>
                    <text>더움</text>
                  </div>
                  <div className="comment-userbox-iconbox">
                    <div className="comment-userbox-icon"></div>
                    <text>더움</text>
                  </div>
                  <div className="comment-userbox-iconbox">
                    <div className="comment-userbox-icon"></div>
                    <text>더움</text>
                  </div>
                </div>

                <div className="comment-userbox-inner">코멘트 글</div>
                <h6>몇시에 올림</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
