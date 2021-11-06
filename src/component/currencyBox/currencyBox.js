
import React, { Children, useState } from 'react';
import './currencyBox.css';
// import ArrowDown from '../../img/ArrowDown.png'


const CurrencyBox = ({ src, name }) => {
  const [isVariant, setIsVariant] = useState(false);

  return (
    <>
      <div className="currency_box">
        <img src={src} alt="box" />
        <div className="currency_box_name">{name}</div>
      </div>
    </>

  )
}

export default CurrencyBox;