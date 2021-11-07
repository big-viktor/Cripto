
import React, { } from 'react';
import './menuLink.css';



const MenuLink = ({ src, linkName }) => {

  return (
    <>
      <div className="container_menu_link" >
        <img src={src} alt="kard" className="img_menuLink" />
        {linkName}
      </div>

    </>

  )
}

export default MenuLink;