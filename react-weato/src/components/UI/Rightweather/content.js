import React, { useMemo } from "react";
import styled from "styled-components";

import Comment from "./comment";
import Region from "./region";
import Recommendmap from "./recommendmap";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
}
`;
const Content = (btn) => {

    const Contentitem = useMemo(() => {;
        if (!btn)
            return null;
        switch (btn.btn) {
            case 'comment':
                return  (
                    <div>
                        <Comment/>
                    </div>
                )
            case 'region':
                return (
                    <div>
                        <Region/>
                    </div>
                )
            case 'recommendmap':
                return (
                    <div>
                        <Recommendmap/>
                    </div>
                )
            default: 
                return null;
        }
    },[btn])

    return(
        <div className='rightBox-content'>
            <NewsListBlock>
                {Contentitem}
            </NewsListBlock>
        </div>
    )
};

export default Content;