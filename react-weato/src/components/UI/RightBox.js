import React from "react";
import { useState, useCallback } from "react";
import WeatoAdd from '../Today/WeatoAdd';
import Topbtn from './Rightweather/topbtn'
import Content from './Rightweather/content'

const RightBox = () =>{
    const [btn, setTopbtn] = useState('all');
    const onSelect = useCallback(btn => setTopbtn(btn),[]);

    return (
        <div className='rightBox'>
            <div className="rigithBox-top">
                <Topbtn btn={btn} onSelect={onSelect}/>
                <Content btn={btn}>dffsdfsdf</Content> 
            </div>
            <div className="contentBox">
                <div className="comment-go">
                    <div className= "comment-time">
                        오후 몇시
                    </div>
                    <div className="comment-gobox">
                        <div className= "comment-gobox-inner">
                            <h6>지금 날씨는 어때 보이나요? 코멘트를 자유롭게 남겨보세요!</h6>
                            <button type="button" className="comment-gobox-btn" onClick={<WeatoAdd/>}>게시하러 가기</button>
                        </div>
                    </div>
                    
                </div>
                {/* <span/> */}
                <div className="comment-list">
                    
                </div>
            </div>


        </div>
    );
};
export default RightBox;