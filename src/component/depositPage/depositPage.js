
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './depositPage.css';
import ButtonIcon from './../buttonIcon/buttonIcon';
import ButtonVariant from './../buttonVariant/buttonVariant';
import Purse from './../purse/purse';
import NavigationMenu from './../navigationMenu/navigationMenu';
import LogoValute from '../../img/Group 42.png'
import ButtonVariantCentr from './../ButtonVariantCentr/ButtonVariantCentr';
import CurrencyBox from './../currencyBox/currencyBox';
import Next from '../../img/Vector (24).png'
import Preww from '../../img/CaretLeft.png'
import ButtonSlider from './../buttonSlider/buttonSlider';
import Input from './../input/input';

const DepositPage = () => {
  const [isVariant, setIsVariant] = useState(false);
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <ButtonSlider img={Next} isVariant={true} />,
    prevArrow: <ButtonSlider img={Preww} />
  };
  return (
    <>
      <div>
        <NavigationMenu >
          <Purse title="Вывод">
            <div className="title">Выберите валюту</div>
            <div className="container_currencyBox">
              {item.map(() => <CurrencyBox src={LogoValute} name="Tether USD" />)}
            </div>
            <div className="title">Выберите метод</div>
            <div className="content_navigatino">
              <div onClick={() => setIsVariant(!isVariant)}>
                <ButtonVariant name="USDT Address" isShow={true} />
              </div>
              <div onClick={() => setIsVariant(!isVariant)}>
                <ButtonVariantCentr name="CRYPTOMERCHANT код" />
              </div>
              <div onClick={() => setIsVariant(!isVariant)}>
                <ButtonVariant name="To user" />
              </div>
            </div>
            <Slider {...settings}>
              <div>
                <CurrencyBox src={LogoValute} name="Tether USD" />
              </div>
              <div>
                <CurrencyBox src={LogoValute} name="Tether USD" />
              </div>
              <div>
                <CurrencyBox src={LogoValute} name="Tether USD" />
              </div>
              <div>
                <CurrencyBox src={LogoValute} name="Tether USD" />
              </div>
              <div>
                <CurrencyBox src={LogoValute} name="Tether USD" />
              </div>
              <div>
                <CurrencyBox src={LogoValute} name="Tether USD" />
              </div>
            </Slider>
            <div>
              <Input title="Адрес" placeholder="Адрес" />
              <ButtonIcon isVariant={true} name="Вставить" />
            </div>
            <Input title="Сумма" placeholder="1" />
            {!isVariant ? (
              <>




              </>
            ) : (<> </>)}
          </Purse>
        </NavigationMenu>
      </div>
    </>

  )
}

export default DepositPage;