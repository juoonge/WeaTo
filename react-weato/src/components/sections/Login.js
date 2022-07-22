import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section from "../../HOC/section";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  const onIDHandler = (event) => {
    setID(event.currentTarget.value);
  };

  const onPWHandler = (event) => {
    setPW(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Section id='Login'>
      {/* <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
      >  */}
      <div className='container'>
        <div className='section-header pt-5 pb-5 text-center'>
          <div className="main">
            <div className="sub-main">
              <h1 className="Login-title">Login</h1>
              <form> 
                <div Login-layout>
                  <div className="icon-layout">
                    <FontAwesomeIcon icon={faUser} className="ID-icon"/>
                    <input name="input_ID" type="text" placeholder="ID" value={ID} onChange={onIDHandler} className="login-input"></input>
                  </div>
                  <div className="icon-layout">
                    <FontAwesomeIcon icon={faLock} className="PW-icon"/>                     
                    <input name="input_PW" type="text" placeholder="PW" value={PW} onChange={onPWHandler}className="login-input"></input>
                  </div>       
                </div>                         
                <button type="submit" onSubmit={onSubmit} className="login-button">Login</button>
                <ul className="link">계정이 없다면? <Link to ="/SignUp">Sign Up</Link></ul>  
              </form>
            </div>  
          </div>
        </div>
      </div>
      {/* </div> */}
    </Section>
  );
}

export default Login;
