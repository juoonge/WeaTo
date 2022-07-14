import React, {useState} from 'react'
import "./static/style.css";

function SignUp() {
    const [name, setName] = useState("")
    const [ID, setID] = useState("");
    const [PW, setPW] = useState(""); 
    const [confirmPW, setConfirmPW] = useState("");

    const onNameHandler = (event) => {
      setName(event.currentTarget.value)
    }

    const onIDHandler = (event) => {
        setID(event.currentTarget.value)
    }
  
    const onPWHandler = (event) => {
        setPW(event.currentTarget.value)
    }
  
    const onConfirmPWHandler = (event) => {
        setConfirmPW(event.currentTarget.value)
    }
  
    const onSubmit = (event) => {
      event.preventDefault();
      if(PW !== confirmPW) {
        return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
      }
    }
  
    return (
    <div className="main">
      <div className="sub-main">
        <h1 className="SignUp-title">Sign Up</h1>
            <form>
              <div><input name="name" type="text" placeholder="닉네임" value={name} onChange={onNameHandler} class="SignUp-input"/></div>
              <div><input name="ID" type="text" placeholder="ID" value={ID} onChange={onIDHandler} class="SignUp-input"/></div>
              <div><input name="PW" type="text" placeholder="PW" value={PW} onChange={onPWHandler} class="SignUp-input"/></div>
              <div><input name="confirmPW" type="text" placeholder="Confirm PW" value={confirmPW} onChange={onConfirmPWHandler} class="SignUp-input"/></div>
              <div><button type="submit" onSubmit={onSubmit} class="SignUp-button">계정 생성하기</button></div>          
            </form>
       </div>  
    </div>
    );
  }
  export default SignUp;