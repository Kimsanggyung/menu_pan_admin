import '../css/Buttons.css'

function Buttons({setView}){

  const viewAll = () => {
    setView("all")
  }
  const viewDrink = () => {
    setView("dirnk")
  }
  const viewMeal = () => {
    setView("meal")
  }
  const viewDessert = () => {
    setView("dessert")
  }
  const viewSide = () => {
    setView("side")
  }
  const viewSpecialties = () => {
    setView("specialties")
  }

  return(
    <>
      <div className="buttons">
        <div className="bb">
          <div onClick={viewAll}>전체</div>
        </div> 

        <div>
          <div onClick={viewDrink}>음료</div>
        </div>

        <div>
          <div onClick={viewMeal}>식사</div>
        </div>

        <div>
          <div onClick={viewDessert}>디저트</div>
        </div>  

        <div>
          <div onClick={viewSide}>사이드</div> 
        </div>

        <div>
          <div onClick={viewSpecialties}>특선</div>
        </div>
      </div>  
    </>
    
  )
}

export default Buttons