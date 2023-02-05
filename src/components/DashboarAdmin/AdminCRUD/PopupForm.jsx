import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import style from './PopupForm.module.css'
import validationCreate from "./validationCreate"
import { useDispatch, useSelector } from "react-redux";
import { postNewAnimal, postNewTree } from "../../../store/actions";

export default function FormPopup({handleClick, showForm}) {
  // const catalogue = useSelector((state) => state.donationCatalogue);
  // console.log(catalogue[28].item_type)
  const typeOfItem = ["animal", "tree"]

  const dispatch = useDispatch()
  const [fomrInfo, setFormInfo] = useState({
    title: '',
    image: '',
    image_detail: '',
    description: '',
    amount: 0,
    item_type: []
})

console.log(fomrInfo.item_type.toString())

const [error, setError] = useState({
    title: '',
    image: '',
    image_detail: ' ',
    description: '',
    amount: 0,
    item_type: []
})

const handleInputChange = (e) => {
  setFormInfo({
      ...fomrInfo,
      [e.target.name]:e.target.value
  })

  setError(
      validationCreate({
          ...fomrInfo,
          [e.target.name]:e.target.value
      })
  )
}

const handleSelectForPlatforms = (e) =>{
  setFormInfo({
      ...fomrInfo,
      item_type: [...new Set([...fomrInfo.item_type, e.target.value])]
})
  
  setError(
      validationCreate({
          ...fomrInfo,
          [e.target.name]:e.target.value
      })
  )  
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(!Object.keys(error).length) {

      if(fomrInfo.item_type.toString() === "tree") {
        dispatch(postNewTree(fomrInfo))
        setFormInfo({
            title: '',
            image: '',
            image_detail: '',
            description: '',
            amount: 0,
            item_type: []
        })
  
        setError(
            validationCreate({
                ...fomrInfo,
                [e.target.name]:e.target.value
            })
        )
        alert('Item created successfully')
      }
      else {

        dispatch(postNewAnimal(fomrInfo))
        setFormInfo({
            title: '',
            image: '',
            image_detail: '',
            description: '',
            amount: 0,
            item_type: []
        })
    
        setError(
            validationCreate({
                ...fomrInfo,
                [e.target.name]:e.target.value
            })
        )
        alert('Item created successfully')
      }

  } else {
      alert('You must comple the form')
  }   
}

  return (
    <div className={style.containerFormCreate}>
      <Button onClick={handleClick} variant="success">Create</Button>{' '}
      {showForm && (
        <div className={style.formPopup}>

          <div>
            <form onSubmit={handleSubmit}> 
                    <select className={style.select} onChange={handleSelectForPlatforms}>
                                <option value="platforms">Item type</option>
                                {
                                    typeOfItem?.map((item, i) => (
                                        <option key={i} value={item}>{item}</option>
                                    ))
                                }
                    </select>
                    <p className={style.danger}>{error.item_type}</p>
                    <br />
                    <label htmlFor="title">Title:</label>
                    <input className={error.title && style.warning} value={fomrInfo.title} onChange={handleInputChange} type="text" id="title" name="title" placeholder="ej: Pig"/>
                    <p className={style.danger}>{error.title}</p>
                    <br />
                    
                    <label htmlFor="image">Image</label>
                    <input className={error.image && style.warning} value={fomrInfo.image} onChange={handleInputChange} type="text" id="image" name="image" placeholder="URL"/>
                    <p className={style.danger}>{error.image}</p>
                    <br />

                    <label htmlFor="image_detail">Image detail:</label>
                    <input className={error.image_detail && style.warning} value={fomrInfo.image_detail} onChange={handleInputChange} type="text" id="image_detail" name="image_detail" placeholder="URL"/>
                    <p className={style.danger}>{error.image_detail}</p>
                    <br />
                    
                    <label htmlFor="description">Description:</label>
                    <textarea className={error.description && style.warning} value={fomrInfo.description} onChange={handleInputChange} type="text"  id="description" name="description" placeholder="Description"/>
                    <p className={style.danger}>{error.description}</p>
                    <br />

                    <label htmlFor="amount">Amount:</label>
                    <input className={error.amount && style.warning} value={fomrInfo.amount} onChange={handleInputChange} type="number" id="amount" name="amount" placeholder="ej: 30"/>
                    <p className={style.danger}>{error.amount}</p>
                    <br />

              <Button type="submit" variant="success">Create</Button>{' '}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
