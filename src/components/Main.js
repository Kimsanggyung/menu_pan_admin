import { useEffect, useState } from 'react';
import Itmes from './Items';
import Kategorie from './Kategorie';
import Buttons from './Buttons';
import '../css/main.css'

function Main({setTargetID, menuList, kategorie, setKategorie, setList, setStateData}) {

  const [Items, setItems] = useState()

  useEffect(()=>{
    if(kategorie === 'all'){
      setItems(
        <>
          <div id='alltitle'>전체메뉴</div>
          <Itmes setStateData={setStateData} menuList={menuList} setList={setList} setTargetID={setTargetID}/>
          <div className='addtop'>
            <button className='addsize' onClick={viewAdd}>메뉴추가
            <div className='plus'>+</div>
            </button>
    
          </div>
        </>
      
      )
    }
    if(kategorie !== 'all'){
      setItems(
        <>
          <div id='katagorietitle'>
            {kategorie+"메뉴"}
          </div>
          <Kategorie setStateData={setStateData} menuList={menuList} setList={setList} setTargetID={setTargetID}/>
          <div className='addtop'>
            <button className='addsize' onClick={viewAdd}>메뉴추가
              <div className='plus'>+</div>
            </button>
          </div>
      </>
      )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[menuList, kategorie])

  const viewAdd = () => {
    setStateData('addMenu')
  }

  return (
    <>
      <div>
        <h1 className="maintitle">Menu Pan</h1>
        <Buttons setKategorie={setKategorie}></Buttons>
      </div>

      <div>
        {Items}
      </div>
    </>
  );
}

export default Main;