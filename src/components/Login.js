import { useEffect, useState } from "react";
import '../css/Login.css'
import axios from 'axios'

function Login({setLogin, setToken, setStateData}){
  
  const [inputID, setInputID] = useState('');
  const [inputPWD, setInputPWD] = useState('');
  const [error, setError] = useState('');
  const [saveID, setSaveID] = useState(false);
  const [saveLogin, setSaveLogin] = useState(false);
  
  let savedID = sessionStorage.getItem('saveID');
  let loggedID = sessionStorage.getItem('loggedUser');
  let getToken = localStorage.getItem('Token')

  useEffect(()=>{
    if(savedID){
      setInputID(savedID)
    }else if(loggedID){
      setLogin(true);
      setStateData('main');
    }
  },[])
  

  const inputIdChange = event => { // 아이디 입력창에 입력을 하는 등 이벤트가 발생하면 setInputID
    setInputID(event.target.value);
  };
  const inputPwdChange = event => { // 비밀번호 입력창에 입력을 하는 등 이벤트가 발생하면 setInputPWD
    setInputPWD(event.target.value);
  };
  const saveIDClick = () => { // 로그인 저장버튼 함수
    setSaveID(true);
  };
  const saveLoginClick = () => { // 로그인 저장버튼 함수
    setSaveLogin(true);
  };
  
  const login = () => {
    if(inputPWD === ''){ //아이디 입력창이 비어있다면
      setError("비밀번호를 입력해주세요"); //에러메시지 세팅
      };
    if(inputID === ''){ //비밀번호 입력창이 비어있다면
      setError("아이디를 입력해주세요"); //에러메시지 세팅
    };
    if(inputID !== "" && inputPWD !== ""){
      axios
      .post("http://127.0.0.1:8000/login/", {
        id: inputID,
        password: inputPWD
      })
      .then(function (response){
        setLogin(true);
        setStateData('main');
        setToken(response.data.Token)
        sessionStorage.setItem('Token', response.data.Token)
        if(saveLogin === true){
          sessionStorage.setItem("loggedUser", inputID )
          localStorage.setItem('Token', response.data.Token)
        }
        if(saveID === true){
          sessionStorage.setItem('saveID', inputID)
        }
      })
      .catch(function (error){
        console.log(error)
      });
    } 
  }

  const signup = () => {
    setStateData('signup')
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
            <input type="text" placeholder="아이디를 입력하세요" className="text" onChange={inputIdChange} value={inputID || ""}></input>

            <label className="password">비밀번호</label>
            <input type="password" placeholder="비밀번호를 입력하세요" className="text" onChange={inputPwdChange}></input>

            <div className="error">
              {error}
            </div>

            <div className="checkbox">
              <label className="save"><input type="checkbox" onClick={saveIDClick}></input>아이디저장</label>
              <label className="auto"><input type="checkbox" onClick={saveLoginClick}></input>자동로그인</label>
            </div>
            <div>
              <button className="loginbutton" type="button" onClick={login}>로그인</button>
            </div>
            <div className="signup">
              <button className="singupbutton" type="button" onClick={signup}>관리자 등록</button>
            </div>
        </form>
      </div>
    </div>
  )

}

export default Login;