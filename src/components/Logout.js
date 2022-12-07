import axios from "axios";
import '../css/logout.css'

function Logout({token, setStateData, setLogin}){
  
  const logout = () => {
    setLogin(false)
    setStateData('login')
    localStorage.clear()
    sessionStorage.clear()
    axios
      .delete(`https://port-0-menu-pan-api-11er1a24lbd1a3g7.gksl2.cloudtype.app/logout/`,{
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