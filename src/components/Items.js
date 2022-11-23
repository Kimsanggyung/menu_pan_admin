import axios from "axios";
import '../css/Items.css'
import { useEffect, useState } from "react";

function Itmes({menuList, setList, setTargetID, setStateData}){

  const [Items, setItems] = useState();

  const Detail = (id) => {
    setStateData('detail')
    setTargetID(id)
  }

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/menu/")
    .then(function(response){
      console.log(response.status)
      setList(response.data)
    })
    .catch(function(response){
      console.log(response)
    })
  },[setList])

  useEffect(()=>{
    if(menuList !== null){
      setItems(
        menuList.map((menu, index)=>{
          return(
            <div key={index} className="itemtop" onClick={()=>{Detail(menu.id)}}>
              <div>
                <img src={menu.image} alt={menu.name + "사진"} className="itemimg"></img>
              </div>  
                
              <div className='name'>
                <span>상품명: {menu.name}</span>
              </div> 

              <div className='price'>
                <span>상품가격: </span>
                <div>{menu.price}</div>
              </div>
            </div>
          )
        })
      )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[menuList])

  

 return(
  <>
    {Items}
  </>
 )

}

export default Itmes;