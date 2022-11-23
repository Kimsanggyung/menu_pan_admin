import axios from "axios";
import { useEffect, useState } from "react";

function Edit({targetID, setStateData}){

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [facts, setFacts] = useState('');
  const [price, setPrice] = useState('');
  const [allergy, setAllergy] = useState('');
  const [kategorie, setKategorie] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  const [imgFile, setImg] = useState()

  const nameChange = event => { // 월 산텍창에서 선택을을 하는 등 이벤트가 발생하면 setSelectMonth
    setName(event.target.value);  
  };
  const kategorieChange = event => { // 월 산텍창에서 선택을을 하는 등 이벤트가 발생하면 setSelectMonth
    setKategorie(event.target.value);  
  };
  const infoChange = event => { // 월 산텍창에서 선택을을 하는 등 이벤트가 발생하면 setSelectMonth
    setInfo(event.target.value);  
  };
  const factsChange = event => { // 월 산텍창에서 선택을을 하는 등 이벤트가 발생하면 setSelectMonth
    setFacts(event.target.value);  
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
    reader.onloadend = () =>{
        const resultImage = reader.result;

        setImage(resultImage)
    };
}

useEffect(()=>{
  axios.get(`http://127.0.0.1:8000/menu/${targetID}/`)
    .then((response)=>{
      setImage(response.data.image)
      setName(response.data.name)
      setInfo(response.data.info)
      setFacts(response.data.facts)
      setPrice(response.data.price)
      setAllergy(response.data.allergy)
      setKategorie(response.data.kategorie)
      setDate(response.data.release_date)
    })
    .catch((error)=>{
      console.log(error)
    })
},[targetID])

useEffect(()=>{
  setImg(<img src={image} alt="img" className='addimg'></img>)
},[image])

const submit = () => {

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
  if(facts === null || facts === ""){
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
  if(image && name && kategorie && info && facts && allergy && date && price){
    setError('')
    axios
    .put(`http://127.0.0.1:8000/menu/${targetID}`, {
      image: image,
      name: name,
      info: info,
      facts: facts,
      price: price,
      allergy: allergy,
      kategorie: kategorie,
      release_date: date
    })
    .then(function(response){
      setStateData('main')
      console.log(response.status)
    })
    .catch(function(error){
      console.log(error)
    })
  }
}

const exit = () => {
  setStateData('detail')
}

return(
  <>
    <div className="addform">
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
        <input type="text" value={name} onChange={nameChange}></input>
      </div> 

      <div className='price'>
        <span>상품가격: </span>
        <input type="text" value={price} onChange={priceChange}></input>
      </div> 

      <div className='class'>
        <span>상품분류:</span>
        <select value={kategorie} onChange={kategorieChange}>
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
        <textarea type="text" value={info} onChange={infoChange}></textarea>
      </div>

      <div>
        <span>영양정보: </span>
        <textarea type="text" value={facts} onChange={factsChange}></textarea>
      </div>

      <div>
        <span>알레르기정보: </span>
        <textarea type="text" value={allergy} onChange={allergyChange}></textarea>
      </div>

      <div>
        <span>출시일: </span>
        <input type="date" value={date} onChange={dateChange}></input>
      </div>

      <div className='error'>
        {error}
      </div>

      <div >
        <button type='submit' onClick={exit}>취소</button>
        <button type='submit' className='addbutton' onClick={submit}>수정</button>
      </div>
    </div>
  </>
)

}

export default Edit;