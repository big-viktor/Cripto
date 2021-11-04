
import React, { Children, useState } from 'react';
import './buttonIcon.css';
import ArrowDown from '../../img/ArrowDown.png'


const ButtonIcon = ({ name, src }) => {
  return (
    <>
      <div className="container_buuton_icon">
        <img src={src} alt="icon" />
        <div className="content_name">{name}</div>
      </div>
    </>

  )
}

export default ButtonIcon;