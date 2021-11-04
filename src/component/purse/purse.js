
import React, { } from 'react';
import './purse.css';
import DownPurse from './../downPurse/downPurse';



const Purse = ({ children, title }) => {

  return (
    <>
      <div className="">
        <div className="mani">
          {title}
        </div>
        <div className="container_navigation">
          {children}
        </div>
      </div>
    </>

  )
}

export default Purse;