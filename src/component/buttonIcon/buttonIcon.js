
import React from 'react';
import './buttonIcon.css';


const ButtonIcon = ({ name, src, isVariant }) => {
  return (
    <>
      {!isVariant ? (
        <>
          <div className="container_buuton_icon">
            <img src={src} alt="icon" />
            <div className="content_name">{name}</div>
          </div>
        </>
      ) : (<>
        <div className="container_buuton_icon">
          <div className="content_name">{name}</div>
        </div>
      </>)}

    </>

  )
}

export default ButtonIcon;