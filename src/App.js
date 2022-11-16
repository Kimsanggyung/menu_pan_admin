import './App.css';
import './components/Login'
import Login from './components/Login';
import Main from './components/Main';
import Logout from './components/Logout';
import AddMenu from './components/AddMenu';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false);
  const [stateData, setStateData] = useState('addMenu');
  const [token, setToken] = useState(null);
  let view = null;

  if(login === false || stateData ==='login'){
    view = <><Login setToken={setToken} setLogin={setLogin} setStateData={setStateData}></Login></>
    
  }
  if(login === true && stateData === 'main'){
    view =
      <>
        <Logout token={token} setStateData={setStateData} setLogin={setLogin}></Logout>
        <Main setStateData={setStateData}></Main>
      </> 
  }
  if(stateData === 'signup'){
    view = <Signup setStateData={setStateData}></Signup>
  }

  if(login === false && stateData === 'addMenu'){
    view =
      <>
        <Logout setStateData={setStateData} setLogin={setLogin}></Logout>
        <Main></Main>
        <AddMenu></AddMenu>
      </> 
      
  }

  return (
    <>
      <div className="App">
        {view}
      </div>
    </>
  );
}

export default App;
