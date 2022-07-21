// import React from "react";
// import {Routes,Route} from 'react-router-dom';
// import Login from './Login';
// import SignUp from './SignUp';
// import './index.css';

// function App() {
//   return (
//     <Login/>
//     // <Routes>
//     //   <Route path="/" element={<Login />}>
//     //     <Route path="/SignUp" element={<SignUp />} />
//     //   </Route>
//     // </Routes>
//   );
// }

// export default App;

import React from 'react';

import Layout from './components/Layout/Layout';
import {Routes,Route} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/Login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>

  );
}

export default App;