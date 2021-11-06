
import React, { } from 'react';
import './input.css'

const Input = ({ title, placeholder }) => {

  return (

    <>
      <div className="container_input">
        <div className="input_title">{title}</div>
        <input type="text" placeholder={placeholder} className="input_placeholder" />
      </div>
    </>

  )
}

export default Input;