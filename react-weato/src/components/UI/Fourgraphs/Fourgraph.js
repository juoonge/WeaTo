import React, { useMemo } from "react";
import styled from "styled-components";

import TempCompare from "./TempCompare";
import RainCompare from "./RainCompare";
import HumCompare from "./HumCompare";

const CompareList = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    width:100%;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
}
`;
const Fourgraph = (btn) => {

    const Graphs = useMemo(() => {;
        if (!btn)
            return null;
        switch (btn.btn) {
            case 'temp':
                return  (
                    <div>
                        <TempCompare/>
                    </div>
                )
            case 'rainy':
                return (
                    <div>
                        <RainCompare/>
                    </div>
                )
            case 'humidity':
                return (
                    <div>
                        <HumCompare/>
                    </div>
                )
            default: 
                return null;
        }
    },[btn])

    return(
        <div className='leftbox-list'>
            <CompareList>
                {Graphs}
            </CompareList>
        </div>
    )
};

export default Fourgraph;
