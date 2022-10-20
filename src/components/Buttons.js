

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
          <span id="all" onClick={viewAll}>전체</span>
          <span id="drink" onClick={viewDrink}>음료</span>
          <span id="meal" onClick={viewMeal}>식사</span>
          <span id="dessert" onClick={viewDessert}>디저트</span>
          <span id="side" onClick={viewSide}>사이드</span>
          <span id="specialties" onClick={viewSpecialties}>특선</span>
        </div> 
      </div>  
    </>
    
  )
}

export default Buttons