import axios from "axios";
import { useState } from "react";
import '../css/Signup.css'

function Signup({setStateData}){
  const [inputID, setInputID] = useState("");
  const [inputPWD, setInputPWD] = useState("");
  const [checkPWD, setCheckPWD] = useState("");
  const [checkMessage, setCheckMessage] = useState('');
  const [checked, setChecked] = useState('');
  const [error, setError] = useState("")
  const reUsername = /^[a-z]+[a-z0-9]{5,19}$/g;
  const rePassword =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
  const inputIdChange = event => { 
    setInputID(event.target.value); // 아이디 입력창에 입력을 하는 등 이벤트가 발생하면 setInputID
  };
  const inputPwdChange = event => {
    setInputPWD(event.target.value); // 비밀번호 입력창에 입력을 하는 등 이벤트가 발생하면 setInputPWD
  };
  const checkPwdChange = event => {
    setCheckPWD(event.target.value); // 비밀번호확인 입력창에 입력을 하는 등 이벤트가 발생하면 setCheckPWD
  };

  const checkSameID = () => {
    if(reUsername.test(inputID)){
      axios.get("http://127.0.0.1:8000/signup/")
      .then((response)=>{
        if(response.data.length > 0){
          const checkSame = response.data.find((data)=>{
            const checkInputID = data.username === inputID;
            return checkInputID
          })
          if(checkSame){
            console.log("이미사용되고있는 아이디입니다.");
            setError("이미사용되고있는 아이디입니다.");
            setCheckMessage("")
            setChecked(false)
          }else{
            console.log("사용가능한 아이디입니다.");
            setChecked(true)
            setError("");
            setCheckMessage("사용가능한 아이디입니다.")
          }
        }
      })
    }else if(inputID === ""){
      setError('사용하실 아이디를 입력해주세요')
      setCheckMessage('')
    }else{
      setError('아이디는 6자 이상 20자 이하에 영문혹은 숫자여야합니다')
    }
  }

  const submit = () => { //등록 버튼 함수
    if(checked === false){ //중복확인을 하지않았다면
      setError("아이디 중복확인을 해주세요."); // 에러메시지 세팅
    };
    if(!rePassword.test(inputPWD)){ // 비밀번호가 10자리이상에 슷자나 문자를 포함하지 않았다면
      setError("비밀변호는 최소 8 자, 최소 하나의 문자 및 하나의 숫자를 포함하고 있어야합니다"); // 에러메시지 세팅
    };
    if(inputPWD !== checkPWD){ // 입력한 비밀번호와 비밀번호확인이 서로 다르면
      setError("입력하신 비밀번호가 다릅니다."); // 에러메시지 세팅
    };
    if(checkPWD === ''){ // 비밀번호 확인 창에 입력을 하지 않았다면
      setError("비밀번호를 한번더 입력해주세요."); //에러 메시지 세팅
    };
    if(inputPWD === ''){
      setError("비밀번호를 입력해주세요."); //에러 메시지 세팅
    }
    if(inputID === ""){ //아이디 입력창이 비어있다면
      setError("아이디를 입력해주세요"); //에러메시지 세팅
      console.log("아이디를 입력해주세요"); //콘솔로그에 에러보여주기
    };
    if(inputID !== null && inputPWD !== null && inputPWD !== null && checkPWD === inputPWD && rePassword.test(inputPWD) && checked === true){ // 입력창에 모두 비어있지 않고 중복확인을 하고 입력한 비밀번호와 비밀번호 확인이 같다면
    axios
    .post("http://127.0.0.1:8000/signup/", {
      id: inputID,
      password: inputPWD
    })
    .then(function (response){
      console.log(response.status);
    })
    .catch(function (error){
      console.log(error)
    });
    console.log('회원이 되신 것을 환영합니다'); // 회원가입성공시 콘솔에 메시지보여주
  };}

  const cancel = () => { // 취소버튼 함수
    setStateData('login'); //회원 가입을 취소하고 로그인화면을 보여주기 위해 signUpState를 false로
  };
  

  return(
    <div className="parents">
      <div className="top">
        <div>
          <h1>관리자 등록</h1>
        </div>
        <div className="inputone">
          <input 
            type="text"
            onChange={inputIdChange}
            value={inputID}
            placeholder="아이디를 입력해주세요."
            className="inputID"
          />
          <button onClick={checkSameID} className="checkSame">중복확인</button>
          <div>{checkMessage}</div>
        </div>

        <div className="inputtwo">
          <input 
            type="password"
            onChange={inputPwdChange}
            value={inputPWD}
            placeholder="비밀번호를 입력해주세요"
            className="inputPWD"
          />
        </div>

        <div>
          <input 
            type="password"
            onChange={checkPwdChange}
            value={checkPWD}
            placeholder="비밀번호를 한번 더 입력해주세요"
            className="inputPWD"
          />
        </div>

        <div className="error">
          {error}
        </div>
    
        <div>
          <button type="submit" className="submit" onClick={submit}>등록</button>
        </div>

        <div>
          <button type="submit" className="cancel" onClick={cancel}>취소</button>
        </div>
        
      </div>
    </div>
  )
}

export default Signup;