
import React, { } from 'react';
import './menu.css';
import MenuLink from './../menuLink/menuLink';
import Wallet from '../../img/Wallet (1).png';
import Bank from '../../img/Bank.png';
import GitDiff from '../../img/GitDiff.png';
import ArrowSquareIn from '../../img/ArrowSquareIn.png';
import ClockCounterClockwise from '../../img/ClockCounterClockwise.png';
import Storefront from '../../img/Storefront.png';
import Handshake from '../../img/Handshake.png';
import Question from '../../img/Question.png';
import IdentificationCard from '../../img/IdentificationCard.png';
import Sliders from '../../img/Sliders.png';
import SignOut from '../../img/SignOut.png';
import UserImg from '../../img/UserCircle.png';
import { Link } from 'react-router-dom';


const Menu = () => {

  return (
    <>
      <div className=" container_Menu">
        <div className="content_user">
          <img src={UserImg} alt="user_img" className="user_img" />
          USER2021
        </div>
        <Link to="/Cripto">
          <MenuLink src={Wallet} linkName="Кошельки" />
        </Link>
        <Link to="/DepositPage">
          <MenuLink src={Bank} linkName="Депозит" />
        </Link>
        <MenuLink src={GitDiff} linkName="Обмен" />
        <MenuLink src={ArrowSquareIn} linkName="Вывод" />
        <Link to="/HistoryPage">
          <MenuLink src={ClockCounterClockwise} linkName="История" href="/" />
        </Link>
        <Link to="/StoresPage">
          <MenuLink src={Storefront} linkName="Магазины" href="/" />
        </Link>
        <MenuLink src={Handshake} linkName="Партнёрская программа" />
        <MenuLink src={Question} linkName="FAQ" />
        <MenuLink src={IdentificationCard} linkName="Контакты" />
        <MenuLink src={Sliders} linkName="Настройкиты" />
        <MenuLink src={SignOut} linkName="Выйти" />
      </div>

    </>

  )
}

export default Menu;