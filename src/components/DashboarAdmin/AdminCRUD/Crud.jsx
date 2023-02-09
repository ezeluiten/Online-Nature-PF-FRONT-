import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import style from "./Crud.module.css";
import FormPopup from "./PopupForm";
import { useSelector, useDispatch } from "react-redux";
import { sendId, deleteItem } from "../../../store/actions";
import PopUpFormEdit from "./PopUpFormEdit"
import Swal from 'sweetalert2'
import NavBar from "../../NavBar/NavBar";




export default function Crud() {
	const [showForm, setShowForm] = useState(false);
	const [showFormEdit, setShowFormEdit] = useState(false);
	const [dataToEdit, setDataToEdit] = useState(null);
	let catalogue = useSelector((state) => state.donationCatalogue);
	const dispatch = useDispatch();
	const handleClick = () => {
      setShowForm(!showForm);
    };

    const handleUpdate = (id) => {
        setShowFormEdit(!showFormEdit);
        dispatch(sendId(id))
      };

      const handleDelete=(id)=>{
        
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
              dispatch(deleteItem(id));
setTimeout(function () {
  window.location.reload();
}, 1000);        
          }
        });

      }

    return(
        <>
		<NavBar/>
        <div className={style.btnCreate}>
            <FormPopup handleClick={handleClick} showForm={showForm} />
        </div>
        <div className={style.containerCrud}>
            <table className={style.table}>
            <thead>
            <tr className={style.trCrud}>
                <th className={style.thCrud}>Title</th>
                <th className={style.thCrud}>Image</th>
                <th className={style.thCrud}>Image detail</th>
                <th className={style.thCrud}>Description</th>
                <th className={style.thCrud}>Amount</th>
                <th className={style.thCrud}>Accions</th>
            </tr>
            </thead>
            <tbody>
                {
                  catalogue?.map(e => (
                    <tr key={e._id}>
                        {
                            <>
                            <td className={style.tdCrud}>{e?.title && e?.title}</td>
                            <td className={style.tdCrud}>{e?.image && e?.image.substr(0, 40)  + "..."}</td>
                            <td className={style.tdCrud}>{e?.image_detail && e?.image_detail.substr(0, 40) + "..."}</td>
                            <td className={style.tdCrud}>{e?.description && e?.description.substr(0, 40) + "..."}</td>
                            <td className={style.tdCrud}>{e?.amount && e?.amount}</td>
                            <td className={style.tdCrudButtons}>
                                <PopUpFormEdit handleUpdate={() => handleUpdate(e._id)} showFormEdit={showFormEdit} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
                                <Button variant="danger" onClick={()=>handleDelete(e._id)}>Delete</Button>{' '}
                            </td>
                            </>
                        }
                    </tr>
                  ))  
                }
            </tbody>
        </table>
        </div>
        </>
    )
}
