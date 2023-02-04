import React from "react";
import Button from 'react-bootstrap/Button';
import style from './PopupForm.module.css'

export default function FormPopup({handleClick, showForm}) {

  return (
    <div>
      {/* <button onClick={handleClick}>Show Form </button> */}
      <Button onClick={handleClick} variant="success">Create animal</Button>{' '}
      {showForm && (
        <div className={style.formPopup}>
          <form>
            <label>
              Name:
              <input type="text" />
            </label>
            <br />
            <label>
              Email:
              <input type="email" />
            </label>
            <br />
            <Button variant="success">Create</Button>{' '}
          </form>
        </div>
      )}
    </div>
  );
};
