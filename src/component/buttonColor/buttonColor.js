
import React, { } from 'react';
import './buttonColor.css';


const ButtonColor = ({ name, isVariant }) => {
  return (
    <>
      {!isVariant ? (
        <>
          <div className="container_button_color">
            {name}
          </div>
        </>
      ) : (<>
        <div className="container_button_color_bacg">
          {name}
        </div>
      </>)}

    </>

  )
}

export default ButtonColor;