import React from "react";
import styled, {css} from "styled-components";
import { useState} from "react";

// const topbtn = [
//     {
//         name: 'comment',
//         text: '날씨 코멘트'
//     },
//     {
//         name: 'region',
//         text: '날씨별 지역보기'
//     },
//     {
//         name: 'recommendmap',
//         text: '편의시설 지도'
//     },
// ];
// const Weatherbtn = styled.div` 
//     font-size: 1.125rem;
//     cursor: pointer;
//     white-space: pre;
//     text-decoration: none;
//     color:inherit
//     padding-bottom: 0.25rem;

//     &:hover{
//         color: blue;
//     }
//     ${props => 
//         props.active && css`
//         font-weight: 600;
//         horder-bottom:2px solid #bule;
//         color : #blue;
//         &:hover{
//         color:aqua;
//         }
//     `}
//     &+&{
//         margin-left: 1rem;
//     }
// `;
const articles = [
    {
        name: 'comment',
        text: '날씨DFSDFSDFSDF 코멘트'
    },
    {
        name: 'region',
        text: '날씨별DFSDFSFSD 지역보기'
    },
    {
        name: 'recommendmap',
        text: '편의시DFSDFSDFSDF설 지도'
    },
];
const Item = styled.div` 
    font-size: 1.125rem;

    }
`;
const content = ({btn} ) => {
    // const [articles, setArticles] = useState(null);

    return(
        <div className='rightBox-content'>
            {articles.map(article=>(
                <Item key={articles.name} article={articles} />

            ))}
        </div>
    )
};

export default content;