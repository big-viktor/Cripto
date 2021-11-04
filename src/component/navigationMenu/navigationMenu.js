
import React, { } from 'react';
import './navigationMenu.css';
import Header from './../header/header';
import Menu from './../menu/menu';



const NavigationMenu = ({ children }) => {

  return (
    <>
      <div className="">
        <Header />
        <div className="container_navigation_menu">
          <div>
            <Menu />
          </div>
          <div className="children_content">
            {children}
          </div>

        </div>
      </div>

    </>

  )
}

export default NavigationMenu;