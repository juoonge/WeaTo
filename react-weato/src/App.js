import React from "react";
import {Routes,Route} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import './index.css';

function App() {
  return (
    <Login/>
    // <Routes>
    //   <Route path="/" element={<Login />}>
    //     <Route path="/SignUp" element={<SignUp />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
