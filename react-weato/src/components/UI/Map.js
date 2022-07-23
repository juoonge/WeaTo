// /*global kakao*/ 
// import React,{useEffect,useState} from 'react';
// import axios from 'axios';

// const {kakao} = window;

// const MapTest=()=>{
//     const [map,setMap]=useState(null);
//     useEffect(()=>{
//         const container = document.getElementById('map');
//         const options = { 
//             center: new kakao.maps.LatLng(34.550701, 127.400000),
//             level:6
//         };
//         const kakaoMap = new kakao.maps.Map(container, options);
//         setMap(kakaoMap);

//         window.addEventListener("load", (event)=> {
//             getCurrentPosBtn();

//             // // 주소-좌표 변환 객체를 생성
//             var geocoder = new kakao.maps.services.Geocoder();

//             let loc=JSON.parse(sessionStorage.getItem("location"));
//             let coords=new kakao.maps.LatLng(loc.lat,loc.lng);

//             let callback=function(result, status) {
//                 if (status === kakao.maps.services.Status.OK) {
//                     // 결과값 어떻게 표현할지? 일단 콘솔에
//                     //console.log(result[0].road_address); 도로명 주소
//                     console.log(result[0].address.address_name);

//                 }   
//             };
//             geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
                            
//         });

//         function locationLoadSuccess(pos) {
//             // 현재 위치 받아오기
//             var currentPos = new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

//             let lat=pos.coords.latitude
//             let lng=pos.coords.longitude

//             // 위도, 경도 저장
//             let locationObj={'lat':lat,'lng':lng};
//             sessionStorage.setItem('location',JSON.stringify(locationObj));

//             // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
//             map.panTo(currentPos);

//             // 마커 생성
//             var marker = new kakao.maps.Marker({
//                 position: currentPos
//             });

//             // 기존에 마커가 있다면 제거
//             marker.setMap(null);
//             marker.setMap(map);
//         };

//         function locationLoadError(pos) {
//             alert('위치 정보를 가져오는데 실패했습니다.');
//         };

//         // 위치 가져오기 버튼 클릭시
//         function getCurrentPosBtn() {
//             navigator.geolocation.getCurrentPosition(locationLoadSuccess,locationLoadError);
//         };


//         // CCTV로 확인하기 버튼을 눌렀을 때의 동작
//         let cctv=[];
//         function addCctv(){
//             // 현재위치 받아옴
//             let location=JSON.parse(sessionStorage.getItem("location"));
//             console.log("location",location)
            
//             let apikey = "539decf6895149d4841444601842430f";
//             // let type = "its";
//             // let cctvType = 2;
//             let minX=(location["lng"]-0.25);
//             let maxX=(location["lng"]+0.25);
//             let minY=(location["lat"]-0.25);
//             let maxY=(location["lat"]+0.25);

//             axios.get("https://openapi.its.go.kr:9443/cctvInfo?apiKey="+apikey+"&type=its&cctvType=2&minX="+minX+"&maxX="+maxX+"&minY="+minY+"&maxY="+maxY+"&getType=json")
//             .then(()=>{
//                 (response)=>{
//                     console.log(response)
//                     len=response['response']['datacount']
//                     for (let i=0;i<len;i++){
//                         cctv.push({
//                             name: response['response']["data"][i]["cctvname"],
//                             url: response['response']["data"][i]["cctvurl"],
//                             coordx: response['response']["data"][i]["coordx"],
//                             coordy: response['response']["data"][i]["coordy"]
//                         });
//                     }
            
//                     // 마커를 표시할 위치와 title 객체 배열입니다 
//                     let positions=[]
//                     console.log(cctv)
//                     for (let i=0;i<len;i++){
//                         positions.push({
//                             title:cctv[i]["name"],
//                             url: cctv[i]["url"],
//                             latlng:new kakao.maps.LatLng(cctv[i]["coordy"],cctv[i]["coordx"])
//                         });
//                     }
                    

//                     // 마커 이미지의 이미지 주소입니다
//                     let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
                        
//                     for (let i = 0; i < positions.length; i ++) {
                        
//                         // 마커 이미지의 이미지 크기 입니다
//                         let imageSize = new kakao.maps.Size(24, 35); 
                        
//                         // 마커 이미지를 생성합니다    
//                         let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
                        
//                         // 마커를 생성합니다
//                         let marker = new kakao.maps.Marker({
//                             map: map, // 마커를 표시할 지도
//                             position: positions[i].latlng, // 마커를 표시할 위치
//                             title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//                             image : markerImage // 마커 이미지 
//                         });
//                         kakao.maps.event.addListener(marker,'click',function(){
//                             window.open(cctv[i]["url"]);
//                         })
//                     }
//                 }

//             })
//             .catch(()=>{
//                 alert("Error!");
//             })
        
//             }
//     },[])


//     return (
//         <>
//         <button onClick={()=>addCctv()}>CCTV로 확인하기</button>
//         <div
//             style={{
//                 width: '100%',
//                 display: 'inline-block',
//                 marginLeft: '5px',
//                 marginRight: '5px',
//             }}
//         >
//             <div id="map" style={{ width: '99%', height: '500px' }}></div>
//         </div>
//         </>
//     );
// }

// export default MapTest;