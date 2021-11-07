
import React, { useState } from 'react';
import './saveStores.css';
import NavigationMenu from './../navigationMenu/navigationMenu';
import Purse from './../purse/purse';
import ButtonVariant from './../buttonVariant/buttonVariant';
import ButtonColor from './../buttonColor/buttonColor';
import NewMagazin from './../newMagazin/newMagazin';
import { Link } from 'react-router-dom';

const SaveStores = () => {
  const [isVariant, setIsVariant] = useState(false);

  return (
    <>
      <div>
        <NavigationMenu >
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
              <ButtonColor isVariant={false} name="1 Подтвержденный(ых) магазина(ы)" />
            </div>
            <NewMagazin />
            <Link to="/StoresPage">
              <div className="width" >
                <ButtonColor isVariant={true} name="Добавить магазин" />
              </div>
            </Link>
          </Purse>
        </NavigationMenu>
      </div>
    </>

  )
}

export default SaveStores;