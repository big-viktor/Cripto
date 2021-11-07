
import React, { useState } from 'react';
import './historyPage.css';
import Purse from './../purse/purse';
import NavigationMenu from './../navigationMenu/navigationMenu';
import ButtonColor from './../buttonColor/buttonColor';
import DownPurse from './../downPurse/downPurse';

const HistoryPage = () => {
  const [isVariant, setIsVariant] = useState(false);
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,];

  return (
    <>
      <div>
        <NavigationMenu >
          <Purse title="История">
            <div className="content_down">
              <DownPurse isVariant={true} price="exchange" titleDown="Тип транзакции">
                <div>all</div>
                <div>exchange</div>
                <div>withdrawal</div>
                <div>shop</div>
                <div>deposit</div>
                <div>partner</div>
                <div>unaccepted</div>
                <div>валюта</div>
              </DownPurse>
              <div className="margin_">
                <DownPurse isVariant={true} price="all" titleDown="Валюта">
                  <div>all</div>
                  <div>BTC </div>
                  <div>USD </div>
                  <div>ETH </div>
                  <div>LTC </div>
                  <div>BCH </div>
                  <div>XRP </div>
                  <div>DASH  </div>
                  <div>ZEC  </div>
                  <div>XEM  </div>
                  <div>TRX  </div>
                  <div>ETC  </div>
                  <div>DOGE </div>
                </DownPurse>
              </div>
            </div>
            <ButtonColor isVariant={false} name="Извините, операций не найдено" />
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

export default HistoryPage;