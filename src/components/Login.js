import { useState } from "react";
import '../css/Login.css'
import axios from 'axios'

function Login({setLogin}){
  
  const [inputID, setInputID] = useState()
  const [inputPWD, setInputPWD] = useState()

  const inputIdChange = event => { // 아이디 입력창에 입력을 하는 등 이벤트가 발생하면 setInputID
    setInputID(event.target.value);
  };
  const inputPwdChange = event => { // 비밀번호 입력창에 입력을 하는 등 이벤트가 발생하면 setInputPWD
    setInputPWD(event.target.value);
  };
  
  const login = () => {
    axios
      .post("http://127.0.0.1:8000/login/", {
        id: inputID,
        password: inputPWD
      })
      .then(function (response){
        console.log(response.status);
      })
      .catch(function (error){
        console.log(error)
        console.log("틀림"); // 콘솔로그에 에러보여주기
      });
  }

  return( 
    <div>
      <div>
        <h1 className="title">관리자 사이트</h1>
      </div>
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
            <div>
              <button className="loginbutton" type="button" onClick={login}>로그인</button>
            </div>
            <div className="signup">
              <button className="singupbutton" type="button" onClick={login}>회원가입</button>
            </div>
        </form>
      </div>
    </div>
  )

}

export default Login;