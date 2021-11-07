
import React, { useState } from 'react';
// import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './downPurse.css';
import ArrowDown from '../../img/ArrowDown.png'


const DownPurse = ({ price, namePrice, src, children, isVariant, titleDown }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>

      {!isVariant ? (
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
      ) : (<>
        <div className="content_container_down">
          <div className="title_down">
            {titleDown}
          </div>
          <div className={isOpen ? 'container_down' : 'container_down_closed'}>
            <div className="conetn_down" onClick={() => setIsOpen(!isOpen)}>
              <div className="content_info">
                <div className="content_text">
                  <div className="price_down">
                    {price}
                  </div>
                </div>
              </div>
              <div>
                <img src={ArrowDown} alt="arow" className={isOpen ? 'top_revers' : 'booton-revers'} />
              </div>
            </div>
            <div className={isOpen ? 'display_none' : 'content_children_show_dowwn'}>{children}</div>
          </div>
        </div>

      </>)}
    </>

  )
}

export default DownPurse;