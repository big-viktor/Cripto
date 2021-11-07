
import React, { useState } from 'react';
import './newMagazin.css';
import Trash from '../../img/Trash.png';
import Gear from '../../img/Gear.png'


const NewMagazin = () => {

  return (
    <>
      <div className="container_magazine">
        <div>
          <div>
            Магазин1
          </div>
          <div className="content_setting">
            <img src={Gear} alt="icon" />
            <div>Настройки</div>
          </div>
        </div>
        <img src={Trash} alt="icon" />
      </div>
    </>

  )
}

export default NewMagazin;