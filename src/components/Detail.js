import axios from "axios";
import { useEffect, useState } from "react";

function Detail({targetID, setList, setStateData}){

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [facts, setFacts] = useState('');
  const [price, setPrice] = useState('');
  const [allergy, setAllergy] = useState('');
  const [kategorie, setKategorie] = useState('');
  const [date, setDate] = useState('');

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/menu/${targetID}`)
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

  const exit = () =>{
    setStateData('main')
  }
  const editMode = () => {
    setStateData('edit')
  }

  const drop = () => {
    if (window.confirm(`${name} 메뉴을 삭제 하시겠습니까?`) === true){ 
      axios.delete(`http://127.0.0.1:8000/menu/${targetID}`,{
      }).then(()=>{
        axios.get("http://127.0.0.1:8000/menu/", {
        })
        .then((response)=>{
          setList(response.data)
          setStateData('main')
          console.log("success get")
        })
        .catch(function(error){
          console.log(error);
        })
      })
    }
  };

  return(
    <>
      <div>
        <div>
          <div>
            <img src={image} alt={name + "상품사진"}></img>
          </div>
      
          <div>
            <div>{name}</div>
          </div>

          <div>
            <div>상품분류: </div>
            <div>{kategorie}</div>
          </div>

          <div>
            <div>{info}</div>
          </div>
      
          <div>
            <div>출시일: </div>
            <div>{date}</div>
          </div>

          <div>
            <div>가격: </div>
            <div>{price}</div>
          </div>

          <div>
            <div>영양정보: </div>
            <div>{facts}</div>
          </div>

          <div>
            <div>알러지 성분: </div>
            <div>{allergy}</div>
          </div>

          <div>
            <button onClick={editMode}>수정</button>
            <button onClick={exit}>메인화면</button>
          </div>

          <div>
            <button onClick={drop}>메뉴삭제</button>
          </div>
        </div>
      </div>
    </>
  )

}

export default Detail;