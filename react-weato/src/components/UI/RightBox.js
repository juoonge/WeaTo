import React, { useEffect } from "react";
import { useState, useCallback } from "react";

import Topbtn from './Rightweather/topbtn'
import Content from './Rightweather/content'

const RightBox = () =>{
    const onSelect = useCallback(btn => setTopbtn(btn),[]);
    const [btn, setTopbtn] = useState('comment');

    useEffect(() => {
        console.log(btn);
    },[btn])

    return (
        <div className='rightBox'>
            <div className="rigithBox-top">
                <Topbtn btn={btn} onSelect={onSelect}/>
                
            </div>
            <Content btn={btn}/>
        </div>
    );
};
export default RightBox;