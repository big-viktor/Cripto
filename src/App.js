import React, { useState } from 'react';
import './App.css';
import NavigationMenu from './component/navigationMenu/navigationMenu';
import Purse from './component/purse/purse';
import ButtonVariant from './component/buttonVariant/buttonVariant';
import DownPurse from './component/downPurse/downPurse';
import LogoValute from './img/Group 42.png'
import ButtonIcon from './component/buttonIcon/buttonIcon';
import IconBtn from './img/ArrowSquareIn (1).png';
import IconBtn2 from './img/CaretDoubleDown.png'
import ButtonColor from './component/buttonColor/buttonColor';

function App() {
  const [isVariant, setIsVariant] = useState(false);
  return (
    <div className="App">
      <NavigationMenu >
        <Purse title="$ 0.00">
          <div className="content_navigatino">
            <div onClick={() => setIsVariant(!isVariant)}>
              <ButtonVariant name="Мои кошельки" isShow={true} />
            </div>
            <div onClick={() => setIsVariant(!isVariant)}>
              <ButtonVariant name="Только с балансом" />
            </div>
          </div>
          <div className="scroll_navigation">
            {!isVariant ? (
              <>
                <DownPurse price="0" namePrice="Bitcoin BTC" src={LogoValute} >
                  <div className="content_btn_setting">
                    <ButtonIcon name="Отправить" src={IconBtn} />
                    <ButtonIcon name="Получить" src={IconBtn2} />
                  </div>
                  <div>
                    <ButtonColor name="Извините, операций не найдено" />
                  </div>
                </DownPurse>
                <DownPurse price="0" namePrice="Tether USD" src={LogoValute} >
                  <div className="content_btn_setting">
                    <ButtonIcon name="Отправить" src={IconBtn} />
                    <ButtonIcon name="Получить" src={IconBtn2} />
                  </div>
                  <div>
                    <ButtonColor name="Извините, операций не найдено" />
                  </div>
                </DownPurse>
                <DownPurse price="0" namePrice="Litecoin LTC" src={LogoValute} >
                  <div className="content_btn_setting">
                    <ButtonIcon name="Отправить" src={IconBtn} />
                    <ButtonIcon name="Получить" src={IconBtn2} />
                  </div>
                  <div>
                    <ButtonColor name="Извините, операций не найдено" />
                  </div>
                </DownPurse>
                <DownPurse price="0" namePrice="Ethereum ETH" src={LogoValute} >
                  <div className="content_btn_setting">
                    <ButtonIcon name="Отправить" src={IconBtn} />
                    <ButtonIcon name="Получить" src={IconBtn2} />
                  </div>
                  <div>
                    <ButtonColor name="Извините, операций не найдено" />
                  </div>
                </DownPurse>
                <DownPurse price="0" namePrice="BitcoinCash BCH" src={LogoValute} >
                  <div className="content_btn_setting">
                    <ButtonIcon name="Отправить" src={IconBtn} />
                    <ButtonIcon name="Получить" src={IconBtn2} />
                  </div>
                  <div>
                    <ButtonColor name="Извините, операций не найдено" />
                  </div>
                </DownPurse>
                <DownPurse price="0" namePrice="Dash DASH" src={LogoValute} >
                  <div className="content_btn_setting">
                    <ButtonIcon name="Отправить" src={IconBtn} />
                    <ButtonIcon name="Получить" src={IconBtn2} />
                  </div>
                  <div>
                    <ButtonColor name="Извините, операций не найдено" />
                  </div>
                </DownPurse>
                <DownPurse price="0" namePrice="EOS EOS" src={LogoValute} >
                  <div className="content_btn_setting">
                    <ButtonIcon name="Отправить" src={IconBtn} />
                    <ButtonIcon name="Получить" src={IconBtn2} />
                  </div>
                  <div>
                    <ButtonColor name="Извините, операций не найдено" />
                  </div>
                </DownPurse>
              </>
            ) : (<>
              <DownPurse price="1" namePrice="Ethereum ETH" src={LogoValute} >
                <div className="content_btn_setting">
                  <ButtonIcon name="Отправить" src={IconBtn} />
                  <ButtonIcon name="Получить" src={IconBtn2} />
                </div>
              </DownPurse>
            </>)}
          </div>

        </Purse>
      </NavigationMenu>
    </div>
  );
}

export default App;
