import { useEffect, useState } from "react";

function AddMenu(){

  const [image, setImage] = useState()
  const [name, setName] = useState()
  const [kategorie, setKategorie] = useState()
  const [info, setInfo] = useState()
  const [nutrition, setNutrition] = useState()
  const [allergy, setAllergy] = useState()
  const [date, setDate] = useState()

  const imgChange = event => { // 월 산텍창에서 선택을을 하는 등 이벤트가 발생하면 setSelectMonth
    setImage(event.target.value);  
  };
  const nameChange = event => { // 월 산텍창에서 선택을을 하는 등 이벤트가 발생하면 setSelectMonth
    setName(event.target.value);  
  };
  const kategorieChange = event => { // 월 산텍창에서 선택을을 하는 등 이벤트가 발생하면 setSelectMonth
    setKategorie(event.target.value);  
  };
  const infoChange = event => { // 월 산텍창에서 선택을을 하는 등 이벤트가 발생하면 setSelectMonth
    setInfo(event.target.value);  
  };
  const nutritionChange = event => { // 월 산텍창에서 선택을을 하는 등 이벤트가 발생하면 setSelectMonth
    setNutrition(event.target.value);  
  };
  const allergyChange = event => { // 월 산텍창에서 선택을을 하는 등 이벤트가 발생하면 setSelectMonth
    setAllergy(event.target.value);  
  };
  const dateChange = event => { // 월 산텍창에서 선택을을 하는 등 이벤트가 발생하면 setSelectMonth
    setDate(event.target.value);  
  };

  useEffect(()=>{
    console.log(allergy, date, image, info, kategorie, name, nutrition)   
  }, [allergy, date, image, info, kategorie, name, nutrition])

  

  return(
    <div>
      <div>
        <span>상품사진: </span>
        <input type="file" 
          accept='image/jpg,impge/png,image/jpeg,image/gif'
          onChange={imgChange}
        ></input>
      </div>   
      
      <div>
        <span>상품명: </span>
        <input type="text" onChange={nameChange}></input>
      </div> 

      <div>
        <span>상품분류:</span>
        <select onChange={kategorieChange}>
          <option>--</option>
          <option>음료</option>
          <option>식사</option>
          <option>디저트</option>
          <option>사이드</option>
        </select>
      </div>

      <div>
        <span>상품정보: </span>
        <input type="text" onChange={infoChange}></input>
      </div>

      <div>
        <span>영양정보: </span>
        <input type="text" onChange={nutritionChange}></input>
      </div>

      <div>
        <span>알레르기정보: </span>
        <input type="text" onChange={allergyChange}></input>
      </div>

      <div>
        <span>출시일: </span>
        <input type="text" onChange={dateChange}></input>
      </div>


    </div>
  );

}

export default AddMenu;