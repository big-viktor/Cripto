
import React, { Children, useState } from 'react';
import './downPurse.css';
import ArrowDown from '../../img/ArrowDown.png'


const DownPurse = ({ price, namePrice, src, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className={isOpen ? 'container_downPurse' : 'container_downPurse_closed'}>
        <div className="conetn_downPurse" onClick={() => setIsOpen(!isOpen)}>
          <div className="content_info">
            <img src={src} alt="valute" />
            <div className="content_text">
              <div className="price_down_purse">
                {price}
              </div>
              <div className="down_name_price">
                {namePrice}
              </div>
            </div>
          </div>
          <div>
            <img src={ArrowDown} alt="arow" className={isOpen ? 'top' : 'booton'} />
          </div>
        </div>
        <div className={isOpen ? 'display_none' : 'content_children_show'}>{children}</div>
      </div>
    </>

  )
}

export default DownPurse;