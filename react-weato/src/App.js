<<<<<<< HEAD
import React, { Fragment} from 'react';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Sections from './components/sections/sections';
import {Routes,Route} from 'react-router-dom';
import Login from './components/sections/Login';
import SignUp from './components/sections/SignUp';
import WeatoHome from './components/sections/WeatoHome';
=======
import React from 'react';

import Layout from './components/Layout/Layout';
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import Login from './components/sections/Login';
import SignUp from './components/sections/SignUp';
function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/Login" Component={<Login />}/>
        <Route path="/SignUp" Component={<SignUp />} />
      </Routes>
    </>
  );
}
export default App;
// 나원님 꺼


>>>>>>> 46550c718f1ccd4428512cf5516ecba718acee50

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

<<<<<<< HEAD
  );
}

export default App;
=======
// import React from 'react';

//  import WeatoHome from './components/sections/WeatoHome';

// function App() {
//   return (
//     <>
//       <WeatoHome/>
//     </>
//   );
// }

// export default App;
>>>>>>> 46550c718f1ccd4428512cf5516ecba718acee50
