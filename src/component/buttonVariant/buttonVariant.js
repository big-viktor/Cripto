
import React, { } from 'react';
import './buttonVariant.css';



const ButtonVariant = ({ name, isShow }) => {

  return (
    <>

      {!isShow ? (
        <>
          <div className="container_buttonVariant">
            {name}
          </div>
        </>
      ) : (
        <>
          <div className="container_buttonVariant_right">
            {name}
          </div>
        </>
      )}
    </>

  )
}

export default ButtonVariant;