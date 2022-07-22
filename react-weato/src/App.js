<<<<<<< HEAD

=======
>>>>>>> 657c57879ba959840b7862987b35d0f5ca975dc3
import React, { Fragment} from 'react';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Sections from './components/sections/sections';
import {Routes,Route} from 'react-router-dom';
import Login from './components/sections/Login';
import SignUp from './components/sections/SignUp';
import WeatoHome from './components/sections/WeatoHome';
<<<<<<< HEAD
=======
import CCTV from './components/UI/Map';
import CommetSubmit from './components/Today/WeatoAdd';
>>>>>>> 657c57879ba959840b7862987b35d0f5ca975dc3

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

<<<<<<< HEAD

 );
=======
  );
>>>>>>> 657c57879ba959840b7862987b35d0f5ca975dc3
}

export default App;
