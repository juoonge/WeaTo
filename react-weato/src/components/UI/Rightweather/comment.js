import React from 'react';
import {Link} from 'react-router-dom'


const Comment = () => {
  return (
    
    <div className="contentBox">
        <div className="comment-go">
            <div className= "comment-time">
                오후 몇시
            </div>
            <div className="comment-gobox">
                <div className= "comment-gobox-inner">
                    <h6>지금 날씨는 어때 보이나요? 코멘트를 자유롭게 남겨보세요!</h6>
                    <Link to ="/commet-submit" className='comment-gobox-btn' >
                    게시하러 가기
                    </Link>
                </div>
            </div>
            
        </div>
        <hr/>
        <div className="comment-list ">
            <div className="comment-cctv">
                <Link to ="/cctv" className='comment-cctvbtn btn' >
                    지역 CCTV 확인하기
                </Link>
            </div>

        </div>
    </div>     
  );
};

export default Comment;