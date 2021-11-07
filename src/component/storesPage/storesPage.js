
import React, { useState } from 'react';
import './storesPage.css';
import NavigationMenu from './../navigationMenu/navigationMenu';
import Purse from './../purse/purse';
import ButtonVariant from './../buttonVariant/buttonVariant';
import ButtonColor from './../buttonColor/buttonColor';
import AddStores from './../addStores/addStores';
import SaveStores from './../saveStores/saveStores';
import { Link } from 'react-router-dom';


const StoresPage = () => {
  const [isVariant, setIsVariant] = useState(false);
  const [isSave, setIsSave] = useState(false);
  return (
    <>
      <>
        <div>
          <NavigationMenu >
            {!isVariant ? (
              <>
                <Purse title="Магазины">
                  <div className="content_navigatino">
                    <Link to="/SaveStores">
                      <div >
                        <ButtonVariant name="Все магазины" isShow={true} />
                      </div>
                    </Link>
                    <Link to="/DocumentationPage">
                      <div >
                        <ButtonVariant name="Документация" />
                      </div>
                    </Link>
                  </div>
                  <div className="margin_top">
                    <ButtonColor isVariant={false} name="0 Подтвержденный(ых) магазина(ы)" />
                  </div>
                  <div className="width" onClick={() => setIsVariant(!isVariant)}>
                    <ButtonColor isVariant={true} name="Добавить магазин" />
                  </div>
                </Purse>
              </>
            ) : (
              <>
                <Purse title="Добавление магазина">
                  <AddStores />
                  <Link to="/SaveStores">
                    <div className="width" >
                      <ButtonColor isVariant={true} name="Сохранить" />
                    </div>
                  </Link>
                </Purse>
              </>
            )}
          </NavigationMenu>
        </div>
      </>

    </>

  )
}

export default StoresPage;