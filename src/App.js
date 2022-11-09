import './App.css';
import './components/Login'
import Login from './components/Login';
import Main from './components/Main';
import Logout from './components/Logout';
import AddMenu from './components/AddMenu';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false)
  const [stateData, setStateData] = useState()
  let view = null;

  if(login === false || stateData ==='login'){
    view = <><Login setLogin={setLogin} setStateData={setStateData}></Login></>
    
  }
  if(login === true){
    view =
      <>
        <Logout setLogin={setLogin}></Logout>
        <Main setStateData={setStateData}></Main>
      </> 
  }
  if(stateData === 'signup'){
    view = <Signup setStateData={setStateData}></Signup>
  }
  if(login === true && stateData === 'addMenu'){
    view =
      <>
        <Logout setLogin={setLogin}></Logout>
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
