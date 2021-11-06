
import React, { Children, useState } from 'react';
import './pursePage.css';
// import ArrowDown from '../../img/ArrowDown.png'
import ButtonColor from './../buttonColor/buttonColor';
import ButtonIcon from './../buttonIcon/buttonIcon';
import ButtonVariant from './../buttonVariant/buttonVariant';
import Purse from './../purse/purse';
import NavigationMenu from './../navigationMenu/navigationMenu';
import IconBtn from '../../img/ArrowSquareIn (1).png';
import IconBtn2 from '../../img/CaretDoubleDown.png'
import LogoValute from '../../img/Group 42.png'
import DownPurse from './../downPurse/downPurse';

const PursePage = () => {
  const [isVariant, setIsVariant] = useState(false);

  return (
    <>
      <div>
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
    </>

  )
}

export default PursePage;