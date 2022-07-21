import React, { Fragment } from 'react';

import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Sections from '../sections/sections';
import {Routes,Route} from 'react-router-dom';
import Login from '../sections/Login';
import SignUp from '../sections/SignUp';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Sections />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;