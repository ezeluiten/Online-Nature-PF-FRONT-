import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import style from './PopupForm.module.css';
import { updateAnimal } from "../../../store/actions/index.js"
import { useDispatch, useSelector, useEffect } from "react-redux";



export default function PopUpFormEdit({ handleClick ,showForm, _id}) {

  


   const dispatch = useDispatch();
    let catalogue = useSelector((state) => state.donationCatalogue._id)
    console.log(_id)



  const [formData, setFormData] = useState({
    title:"",
    image:"",
    image_detail:"",
    description:"",
    amount: 0
  })
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  } 



   
    const handleSubmit = (id, e) => {
        e.preventDefault()
        dispatch(updateAnimal(id))
    }


  return (
    <div>
      {/* <button onClick={handleClick}>Show Form </button> */}
      <Button onClick={handleClick} variant="primary">update</Button>{' '}
      {showForm && (<div className={style.formPopup}>
          {/* {catalogue.map((e) => {return(
            
          )})} */}
          <form onSubmit={handleSubmit}>
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
