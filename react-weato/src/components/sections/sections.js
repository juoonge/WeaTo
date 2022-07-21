import React, { Fragment } from 'react';
import Home from './Home';
import About from './about';



const sections = () => {
  return (
    <Fragment>
      <Home />
      <About />
    </Fragment>
  );
};

export default sections;