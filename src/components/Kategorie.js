import { useEffect, useState } from "react"

function Kategorie({kategorie, menuList}){

  const [Items, setItems] = useState();

  useEffect(()=>{
    console.log(menuList)
    console.log(kategorie)
    if(kategorie !== 'all'){
      setItems(
        menuList.map((menu, index) => {
          if(kategorie === menu.kategorie){
            return(
              <div key={index} className="itemtop" >
                <div>
                  <img src={menu.image} alt={menu.name + "사진"} className="itemimg"></img>
                </div>  
                  
                <div className='name'>
                  <span>상품명: {menu.name}</span>
                </div> 
  
                <div className='price'>
                  <span>상품가격: </span>
                </div>
              </div>
            )
          }
        })
      )
    }
  },[menuList, kategorie])

  return(
    <>
      {Items}
    </>
  )
}

export default Kategorie