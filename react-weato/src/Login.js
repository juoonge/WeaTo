import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import "./static/style.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Login() {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState(""); 
  
  const onIDHandler = (event) => {
    setID(event.currentTarget.value);
  }

  const onPWHandler = (event) => {
    setPW(event.currentTarget.value)
}

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="main">
      <div className="sub-main">
        <h1 className="Login-title">Login</h1>
        <form>
          <FontAwesomeIcon icon={faUser} className="ID-icon"/>
          <FontAwesomeIcon icon={faLock} className="PW-icon"/> 
          <input name="input_ID" type="text" placeholder="ID" value={ID} onChange={onIDHandler} className="login-input"></input>                
          <input name="input_PW" type="text" placeholder="PW" value={PW} onChange={onPWHandler}className="login-input"></input>
          <button type="submit" onSubmit={onSubmit} className="login-button">Login</button>
          <ul className="link">계정이 없다면? <Link to ="/SignUp">Sign Up</Link></ul>  
        </form>    
      </div>  
    </div>
    );
  }

export default Login;