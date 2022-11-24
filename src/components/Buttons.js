import '../css/Buttons.css'

function Buttons({setKategorie}){

  const viewAll = () => {
    setKategorie("all")
  }
  const viewDrink = () => {
    setKategorie("음료")
  }
  const viewMeal = () => {
    setKategorie("식사")
  }
  const viewDessert = () => {
    setKategorie("디저트")
  }
  const viewSide = () => {
    setKategorie("사이드")
  }
  const viewSpecialties = () => {
    setKategorie("특선")
  }

  return(
    <>
      <div className="buttons">
        <div className="bb">
          <div onClick={viewAll}>전체</div>
        </div> 

        <div className="bb">
          <div onClick={viewDrink}>음료</div>
        </div>

        <div className="bb">
          <div onClick={viewMeal}>식사</div>
        </div>

        <div className="bb">
          <div onClick={viewDessert}>디저트</div>
        </div>  

        <div className="bb">
          <div onClick={viewSide}>사이드</div> 
        </div>

        <div className="bb">
          <div onClick={viewSpecialties}>특선</div>
        </div>
      </div>  
      <div className='underline'></div>
    </>
    
  )
}

export default Buttons