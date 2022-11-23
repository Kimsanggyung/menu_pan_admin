import { useEffect, useState } from 'react';
import Itmes from './Items';
import Kategorie from './Kategorie';
import Buttons from './Buttons';

function Main({menuList, kategorie, setKategorie, setList, setStateData}) {

  const [Items, setItems] = useState()

  useEffect(()=>{
    if(kategorie === 'all'){
      setItems(<Itmes menuList={menuList} setList={setList}/>)
    }
    if(kategorie !== 'all'){
      setItems(<Kategorie menuList={menuList} kategorie={kategorie} ></Kategorie>)
    }
  },[menuList, kategorie, setList])

  const viewAdd = () => {
    setStateData('addMenu')
  }

  return (
    <>
      <div>
        <h1 className="App">Menu Pan</h1>
        <Buttons setKategorie={setKategorie}></Buttons>
      </div>
      <div>
        <button onClick={viewAdd}>메뉴추가</button>
      </div>
      <div>
        {Items}
      </div>
    </>
  );
}

export default Main;