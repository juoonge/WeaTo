import React, {useState} from 'react'
import Section from '../../HOC/section';
import "../../static/style.css";
import bgImage from '../../image/back.png';

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
    <Section id='SignUp'>
            <div
          className='SignUp-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
      >
      <div className='container '>
        <div className='section-header pt-5 pb-5 text-center'>
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
        </div>
      </div>
      </div>
    </Section>
  );
}
export default SignUp;