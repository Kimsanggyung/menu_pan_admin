import axios from "axios";
import '../css/logout.css'

function Logout({token, setStateData, setLogin}){
  
  const logout = () => {
    setLogin(false)
    setStateData('login')
    localStorage.clear()
    sessionStorage.clear()
    axios
      .delete(`http://127.0.0.1:8000/logout/`,{
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(()=>{
        localStorage.clear()
        sessionStorage.clear()
        console.log("success")
      })
      .catch(function(error){
        console.log(error);
      });
  }

  return(
    <button className="logoutButton" onClick={logout}>로그아웃</button>
  );

}

export default Logout;