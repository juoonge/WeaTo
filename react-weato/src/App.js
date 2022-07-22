import React, { Fragment} from 'react';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Sections from './components/sections/sections';
import {Routes,Route} from 'react-router-dom';
import Login from './components/sections/Login';
import SignUp from './components/sections/SignUp';
import WeatoHome from './components/sections/WeatoHome';
import CCTV from './components/UI/Map';
import CommetSubmit from './components/Today/WeatoAdd';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Sections />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/weatohome" element={<WeatoHome />} />
          <Route path="/cctv" element={<CCTV />} />
          <Route path="/commet-submit" element={<CommetSubmit />} />
          <Route path="/WeatoHome/cctv" element={<cctv />} /> 
        </Routes>
      </main>
      <Footer />
    </Fragment>

  );
}

export default App;
