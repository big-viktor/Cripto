
import React, { } from 'react';

import Logo from '../../img/Group 15.png';
import prapor from '../../img/Group 1 (5).png';

import './header.css';
import Button from './../button/button';




const Header = () => {

  return (
    <>
      <div className="container_header">
        <div className="content_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="content_a">
          <div>
            О нас
          </div>
          <div>
            Accepter
          </div>
          <div>
            BoxExchager
          </div>
        </div>
        <div className="content_lang_logo">
          <div className="content_lang">
            <div className="name_lang">
              Рус
            </div>
            <div className="prapor">
              <img src={prapor} alt="prapor" />
            </div>
          </div>
          <Button name="Войти" />
        </div>

      </div>
    </>

  )
}

export default Header;