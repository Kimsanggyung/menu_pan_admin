import { useEffect, useState } from 'react';
import Itmes from './Items';
import Buttons from './Buttons';

function Main() {

  const [view, setView] = useState();
  useEffect(()=>{
    console.log(view)
  },[view])

  return (
    <div>
      <h1 className="App">Menu Pan</h1>
      <Buttons setView={setView}></Buttons>
    </div>
  );
}

export default Main;