import React from "react";
import styled, {css} from "styled-components";

const topbtn = [
    {
        name: 'comment',
        text: '날씨 코멘트'
    },
    {
        name: 'region',
        text: '날씨별 지역보기'
    },
    {
        name: 'recommendmap',
        text: '편의시설 지도'
    },
];
const Weatherbtn = styled.div` 
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color:inherit
    padding-bottom: 0.25rem;
    width: 250px;
    text-align: center;
    font-size: 1.2rem;
    background-color: #5BB7DE;

    font-weight: 600;
    padding: 15px 40px;
    border-radius: 10px;
    &:hover{
        color: #5BB7DE;
        background-color: #f2f2f2;
    }
    ${props => 
        props.active && css`
        font-weight: 600;
        horder-bottom:2px solid #bule;
        color: #5BB7DE;
        background-color: #f2f2f2;
        &:hover{
        color: #5BB7DE;
        background-color: #f2f2f2;
        }
    `}
    &+&{
        margin-left: 1rem;
    }
`;


const Topbtn = ( {onSelect, btn} ) => {
    return(
        <div className='rightBox-top'>
        {topbtn.map(c=>(
            <Weatherbtn
            classnames="rightBox-btn" 
            key={c.name} 
            active={btn === c.name}
            onClick={()=> onSelect(c.name)}
            >
            {c.text}</Weatherbtn>
        ))}
        </div>
    )
};

export default Topbtn;