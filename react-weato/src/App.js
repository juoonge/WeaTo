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
//   );
// }

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