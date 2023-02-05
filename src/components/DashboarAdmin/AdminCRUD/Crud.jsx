import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import style from "./Crud.module.css"
import FormPopup from "./PopupForm";
import { useSelector } from "react-redux";

export default function Crud() {
    const [showForm, setShowForm] = useState(false);
    let catalogue = useSelector((state) => state.donationCatalogue);

    const handleClick = () => {
      setShowForm(!showForm);
    };

    return(
        <>
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
                            <td className={style.tdCrud}>{e.title}</td>
                            <td className={style.tdCrud}>{e.image.substr(0, 40) + "..."}</td>
                            <td className={style.tdCrud}>{e.image_detail.substr(0, 40) + "..."}</td>
                            <td className={style.tdCrud}>{e.description.substr(0, 40) + "..."}</td>
                            <td className={style.tdCrud}>{e.amount}</td>
                            <td className={style.tdCrudButtons}>
                                <Button variant="primary">Edit</Button>{' '}
                                <Button variant="danger">Delete</Button>{' '}
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