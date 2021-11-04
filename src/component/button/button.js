
import React, { } from 'react';
import './button.css';



const Button = ({ name }) => {

  return (
    <>
      <div className="container_button">
        {name}
      </div>

    </>

  )
}

export default Button;