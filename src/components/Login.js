import { useState } from "react";
import '../css/Login.css'

function Login(){
  
  const [inputID, setInputID] = useState()
  const [inputPWD, setInputPWD] = useState()

  const inputIdChange = event => { // 아이디 입력창에 입력을 하는 등 이벤트가 발생하면 setInputID
    setInputID(event.target.value);
  };
  const inputPwdChange = event => { // 비밀번호 입력창에 입력을 하는 등 이벤트가 발생하면 setInputPWD
    setInputPWD(event.target.value);
  };
  const login = () => {
    console.log("ID", inputID, "PWD", inputPWD)
  }

  return( 
    <div>
      <div>
        <form className="form">
            <h3>로그인</h3>

            <label className="id">아이디</label>
            <input type="text" placeholder="아이디를 입력하세요" className="text" onChange={inputIdChange}></input>

            <label className="password">비밀번호</label>
            <input type="password" placeholder="비밀번호를 입력하세요" className="text" onChange={inputPwdChange}></input>
            <div className="checkbox">
              <label className="save"><input type="checkbox"></input>아이디저장</label>
              <label className="auto"><input type="checkbox"></input>자동로그인</label>
            </div>
            <div className="loginbutton">
              <button type="button" onClick={login}>로그인</button>
            </div>
        </form>
      </div>
    </div>
  )

}

export default Login;