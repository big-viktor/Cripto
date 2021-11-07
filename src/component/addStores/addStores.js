
import React, { useState } from 'react';
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/core/SwitchUnstyled';
import './addStores.css';
import Input from './../input/input';
import ButtonIcon from './../buttonIcon/buttonIcon';
import CopiBtn from './../copiBtn/copiBtn';
import CopiIcon from '../../img/Copy.png'


const Root = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 64px;
height: 32px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #b3c3d3;
    border-radius: 15px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 28px;
    height: 28px;
    top: 2apx;
    left: 0px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 36px;
      top: 2px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: #705ED8;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;
const AddStores = () => {
  const [isVariant, setIsVariant] = useState(false);
  const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };
  return (
    <>
      <>
        <div>
          <Input title="Комиссия %" placeholder="1,5" />
          <Input title="Домен" placeholder="domain.com" />
          <div className="container_input_child">
            <Input title="Доп ссылка " placeholder="https://domain.com/pay/status" />
            <ButtonIcon isVariant={true} name="Вставить" />
          </div>
          <div className="container_input_child">
            <Input title="Успешная оплата " placeholder="https://domain.com/pay/success" />
            <ButtonIcon isVariant={true} name="Вставить" />
          </div>
          <div className="container_input_child">
            <Input title="Ошибка оплаты " placeholder="https://domain.com/pay/error" />
            <ButtonIcon isVariant={true} name="Вставить" />
          </div>
          <div className="container_input_child">
            <Input title="Магазин ID " placeholder="615b1ceb01fsd3b702342f5ebc" />
            <CopiBtn src={CopiIcon} />
          </div>
          <div className="container_input_child">
            <Input title="Секретный ключ " placeholder="5b1ceb01fsd3b7023403452f5ebc232" />
            <CopiBtn src={CopiIcon} />
          </div>
          <SwitchUnstyled component={Root} {...label} />
        </div>
      </>

    </>

  )
}

export default AddStores;