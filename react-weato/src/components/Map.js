/*global kakao*/ 
import React,{useEffect,useState} from 'react';

const {kakao} = window;
const MapTest=()=>{
    const [map,setMap]=useState(null);
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = { center: new kakao.maps.LatLng(34.550701, 127.400000) };
        const kakaoMap = new kakao.maps.Map(container, options);
        setMap(kakaoMap);
    },[])

    return (
        <div
            style={{
                width: '100%',
                display: 'inline-block',
                marginLeft: '5px',
                marginRight: '5px',
            }}
        >
            <div id="map" style={{ width: '99%', height: '500px' }}></div>
        </div>
    );
}