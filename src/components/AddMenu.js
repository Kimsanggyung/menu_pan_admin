import '../css/Addmenu.css'
import { useState } from "react";
import axios from 'axios';

function AddMenu({setStateData}){

  let imgFile = null
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [kategorie, setKategorie] = useState(null);
  const [info, setInfo] = useState(null);
  const [nutrition, setNutrition] = useState(null);
  const [allergy, setAllergy] = useState(null);
  const [date, setDate] = useState(null);
  const [price, setPrice] = useState(null)
  const [error, setError] = useState(null);

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
  const priceChange = event => { // 월 산텍창에서 선택을을 하는 등 이벤트가 발생하면 setSelectMonth
    setPrice(event.target.value);  
  };
  const handleChangeFile =(e)=>{
    let reader = new FileReader();
    if (e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const resultImage = reader.result;
      setImage(resultImage);
    };
  };
  const exit = () => {
    setStateData('main')
  }
  

  if(image !== null){
    imgFile =  
      <img src={image} alt="img" className='addimg'></img>
  }

  const submit = () => { // 등록버튼 함수
    if(image === null || image === ""){
      setError("상품 사진을 등록해주세요");
    };
    if(name === null || name === ""){
      setError("상품명을 입력해주세요");
    };
    if(kategorie === null || kategorie === "--"){
      setError("상품 분류를 선택해 주세요")
    }
    if(info === null || info === ""){
      setError("상품 정보를 입력해주세요")
    }
    if(nutrition === null || nutrition === ""){
      setError("상품의 영양정보를 입력해주세요")
    } 
    if(allergy === null || allergy === ""){
      setError("상품의 알러지정보를 입력해주세요")
    } 
    if(date === null || date === ""){
      setError("상품 출시일를 선택해주세요")
    }
    if(price === null || price === ""){
      setError("상품 가격을 입력해주세요")
    }
    if(image && name && kategorie && info && nutrition && allergy && date && price){
      setError('')
      axios.post("https://port-0-menu-pan-api-11er1a24lbd1a3g7.gksl2.cloudtype.app/menu/", {
        image: image,
        name: name,
        info: info,
        facts: nutrition,
        price: price,
        allergy: allergy,
        kategorie: kategorie,
        release_date: date
      })
      .then((response)=>{
        console.log(response.status)
        setStateData('main')
      })
      .catch(function(error){
        console.log(error)
      })
    }
  };

  return(
    <div className="addform">
      <div id='addtitle'>
        메뉴추가
      </div>

      <div className="image">
        <span className='imgtext'>상품사진: </span>
        <input type="file" 
          accept='image/jpg,impge/png,image/jpeg,image/gif'
          onChange={handleChangeFile}
          ></input>
        <div className='menuimg'>
          {imgFile}
        </div>
      </div>   
      
      <div className='name'>
        <span>상품명: </span>
        <input type="text" onChange={nameChange}></input>
      </div> 

      <div className='price'>
        <span>상품가격: </span>
        <input type="text" onChange={priceChange}></input>
      </div> 

      <div className='class'>
        <span>상품분류:</span>
        <select onChange={kategorieChange}>
          <option>--</option>
          <option>음료</option>
          <option>식사</option>
          <option>디저트</option>
          <option>사이드</option>
          <option>특선</option>
        </select>
      </div>

      <div>
        <span>상품정보: </span>
        <textarea type="text" onChange={infoChange}></textarea>
      </div>

      <div>
        <span>영양정보: </span>
        <textarea type="text" onChange={nutritionChange}></textarea>
      </div>

      <div>
        <span>알레르기정보: </span>
        <textarea type="text" onChange={allergyChange}></textarea>
      </div>

      <div>
        <span>출시일: </span>
        <input type="date" onChange={dateChange}></input>
      </div>

      <div className='error'>
        {error}
      </div>

      <div >
        <button type='submit' onClick={exit}>취소</button>
        <button type='submit' className='addbutton' onClick={submit}>등록</button>
      </div>
    </div>
  );

}

export default AddMenu;