
import React, { } from 'react';
import './buttonSlider.css'
import Next from '../../img/Vector (24).png'
import Preww from '../../img/CaretLeft.png'

const ButtonSlider = ({ img, onClick, isVariant }) => {

  return (

    <>
      {!isVariant ? (
        <>
          <img src={img} alt="icon" className="button-slider" onClick={onClick} />
        </>
      ) : (<>
        <img src={img} alt="icon" className="button-slider-right" onClick={onClick} />

      </>)}
    </>

  )
}

export default ButtonSlider;