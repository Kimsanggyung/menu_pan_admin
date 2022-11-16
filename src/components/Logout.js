import axios from "axios";

function Logout({token, setStateData, setLogin}){
  console.log(token)
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
    <button className="font-Do w-20 h-8 ml-4 rounded border-2 text-xl border-gray-500" onClick={logout}>로그아웃</button>
  );

}

export default Logout;