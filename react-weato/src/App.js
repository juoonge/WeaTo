import React, { Fragment} from 'react';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Sections from './components/sections/sections';
import {Routes,Route} from 'react-router-dom';
import Login from './components/sections/Login';
import SignUp from './components/sections/SignUp';
import WeatoHome from './components/sections/WeatoHome';

// import RightBox from './components/UI/RightBox';
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Sections />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/WeatoHome" element={<WeatoHome />} />
          {/* <Route path="/WeatoHome/RightBox" element={<RightBox />} />
          <Route path="/WeatoHome/cctv" element={<cctv />} /> */}
        </Routes>
      </main>
      <Footer />
    </Fragment>

// import React from "react";
// //import {Routes,Route} from 'react-router-dom';
// // import Login from './Login';
// // import SignUp from './SignUp';
// import WeatoAdd from './WeatoAdd.js';
// import './index.css';
// function App() {
//   return (
//     <WeatoAdd/>
//     // <Routes>
//     //   <Route path="/" element={<Login />}>
//     //     <Route path="/SignUp" element={<SignUp />} />
//     //   </Route>
//     // </Routes>

  );
}

export default App;
