import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import style from './PopupForm.module.css';
import { getCatalogue, updateAnimal } from "../../../store/actions/index.js"
import { useDispatch, useSelector, useEffect } from "react-redux";



export default function PopUpFormEdit({ handleClick ,showForm}) {

  
  
  let id = useSelector((state) => state.id);
  console.log(id)
   const dispatch = useDispatch();
    let catalogue = useSelector((state) => state.donationCatalogue)
    // const catalogueIds = catalogue.map(item => {
    //   return {}  
    // })



  const [formData, setFormData] = useState({
    title:"",
    image:"",
    image_detail:"",
    description:"",
    amount: 0
  })
  
  const handleInputChange = (e) => {
    console.log(e.target.value, e.target.name , "datos de input")
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  } 



   
    const handleSubmit = (e) => {
        e.preventDefault()
        const itemModified = {
          title: formData?.title == "" ? undefined : formData?.title,
          image: formData?.image == "" ? undefined : formData?.image,
          image_detail: formData?.image_detail == "" ? undefined : formData?.image_detail,
          description: formData?.description == "" ? undefined : formData?.description,
          amount: formData?.amount == 0 ? undefined : formData?.amount
        }
        console.log(itemModified, "item modificado")
        dispatch(updateAnimal(id, itemModified))
        window.location.reload()
    }


  return (
    <div>
      {/* <button onClick={handleClick}>Show Form </button> */}
      <Button onClick={handleClick} variant="primary">update</Button>{' '}
      {showForm && (<div className={style.formPopup}>
          {/* {catalogue.map((e) => {return(
            
          )})} */}
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>
              Title:
              <input type="text" onChange={handleInputChange} id="title" name="title" value={formData.title}/>
            </label>
            <br />
            <label>
              Image:
              <input type="text" onChange={handleInputChange} id="image" name="image" value={formData.image}/>
            </label>
            <br />
            <label>
              Image Detail:
              <input type="text" onChange={handleInputChange} id="image_detail" name="image_detail" value={formData.image_detail}/>
            </label>
            <br />
            <label>
              Description :
              <input type="text" onChange={handleInputChange} id="description" name="description" value={formData.description}/>
            </label>
            <br />
            <label>
              Amount :
              <input type="number" onChange={handleInputChange} id="amount" name="amount" value={formData.amount}/>
            </label>
            <br />
            <Button type="submit"  variant="success">update</Button>{' '}
          </form> 
        
          
        </div>
      )}
    </div>
  );
};
