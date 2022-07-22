import React from "react";
import styled, {css} from "styled-components";

const buttons = [
    {
        name: 'temp',
        text: '기온 비교'
    },
    {
        name: 'rainy',
        text: '강수확률 비교'
    },
    {
        name: 'humidity',
        text: '습도 비교'
    },
];
const Comparebtn = styled.div` 
    cursor: pointer;
    white-space: pre;
    color:inherit;
    padding-bottom  : 0.25rem;
    width : 110px;
    text-align: center;

    font-weight: 600;
    padding: 1px 2px;
    border-radius: 10px;
    &:hover{
        color:#ffffff;
        background-color: #5BB7DE;
    }
    ${props => 
        props.active && css`
        font-weight: 600;
        color: #ffffff;
        background-color: #5BB7DE;
        &:hover{
        color: #ffffff;
        background-color: #5BB7DE;
        }
    `}
    &+&{
        margin-left: 1rem;
    }
`;

const Buttons = ( {onSelect, btn} ) => {
    return(
        <div className='leftBox-top'>
            {buttons.map(c=>(
                <Comparebtn
                classnames="leftBox-btn" 
                key={c.name} 
                active={btn === c.name}
                onClick={()=> onSelect(c.name)}
                >
                {c.text}</Comparebtn>
            ))}
        </div>
    )
};

export default Buttons;