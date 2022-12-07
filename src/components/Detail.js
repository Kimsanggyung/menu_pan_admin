import axios from "axios";
import '../css/Detail.css'
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
    axios.get(`https://port-0-menu-pan-api-11er1a24lbd1a3g7.gksl2.cloudtype.app/menu/${targetID}`)
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
      axios.delete(`https://port-0-menu-pan-api-11er1a24lbd1a3g7.gksl2.cloudtype.app/menu/${targetID}`,{
      }).then(()=>{
        axios.get("https://port-0-menu-pan-api-11er1a24lbd1a3g7.gksl2.cloudtype.app/menu/", {
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
      <div className="detailcontents">
        <div>
          <div>
            <img className="detailimage" src={image} alt={name + "상품사진"}></img>
          </div>
      
          <div>
            <div className="porductname">{name}</div>
          </div>

          <div className="pricebox">
            <div className="pricetag">가격: </div>
            <div className="price">{price}</div>
          </div>

          <div className="infobox">
            <div className="productinfo">{info}</div>
          </div>
      
        
          <div className="factsbox">
            <div>영양정보: </div>
            <div>{facts}</div>
          </div>

          <div className="allergybox">
            <div className="allergytag">알러지 성분: </div>
            <div>{allergy}</div>
          </div>

          <div className="kategoriebox">
            <div className="kategorietag">상품분류: </div>
            <div id="kategorieis">{kategorie}</div>
          </div>

          <div className="datebox">
            <div className="datetag">출시일: </div>
            <div className="date">{date}</div>
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