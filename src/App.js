import './App.css';
import './components/Login'
import Login from './components/Login';
import Main from './components/Main';
import Logout from './components/Logout';
import AddMenu from './components/AddMenu';
import Signup from './components/Signup';
import Detail from './components/Detail';
import Edit from './components/EditMenu';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(true);
  const [stateData, setStateData] = useState('main');
  const [kategorie, setKategorie] = useState('all')
  const [menuList, setList] = useState(null)
  const [targetID, setTargetID] =useState(null);
  const [token, setToken] = useState(null);
  let view = null;

  if(login === false || stateData ==='login'){
    view = <><Login setToken={setToken} setLogin={setLogin} setStateData={setStateData}></Login></>
    
  }
  if(login === true && stateData === 'main'){
    view =
      <>
        <Logout token={token} setStateData={setStateData} setLogin={setLogin}></Logout>
        <Main targetID={targetID} setTargetID={setTargetID} menuList={menuList} setList={setList} kategorie={kategorie} setKategorie={setKategorie} setStateData={setStateData}></Main>
      </> 
  }
  if(stateData === 'signup'){
    view = <Signup setStateData={setStateData}></Signup>
  }

  if(login === true && stateData === 'addMenu'){
    view =
      <>
        <Logout setStateData={setStateData} setLogin={setLogin}></Logout>
        <AddMenu></AddMenu>
      </>    
  }
  if(login === true && stateData === 'detail'){
    view =
      <>
        <Logout setStateData={setStateData} setLogin={setLogin}></Logout>
        <Detail targetID={targetID} setStateData={setStateData}></Detail>
      </>    
  }

  if(login === true && stateData === 'edit'){
    view =
      <>
        <Logout setStateData={setStateData} setLogin={setLogin}></Logout>
        <Edit targetID={targetID} setStateData={setStateData}></Edit>
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
