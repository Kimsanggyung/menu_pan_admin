import { useEffect, useState } from 'react';
import Itmes from './Items';
import Buttons from './Buttons';

function Main({setStateData}) {

  const [view, setView] = useState();
  useEffect(()=>{
    console.log(view)
  },[view])

  const viewAdd = () => {
    setStateData('addMenu')
  }

  return (
    <>
      <div>
        <h1 className="App">Menu Pan</h1>
        <Buttons setView={setView}></Buttons>
        <button onClick={viewAdd}>메뉴추가</button>
      </div>
      <div>
        <Itmes/>
      </div>
    </>
  );
}

export default Main;