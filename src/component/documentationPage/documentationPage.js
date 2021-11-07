
import React, { useState } from 'react';
import './documentationPage.css';
import NavigationMenu from './../navigationMenu/navigationMenu';
import Purse from './../purse/purse';
import ButtonVariant from './../buttonVariant/buttonVariant';
import ButtonColor from './../buttonColor/buttonColor';
import NewMagazin from './../newMagazin/newMagazin';
import { Link } from 'react-router-dom';

const DocumentationPage = () => {
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
            <div>
              Documentation for integration with online stores, Forex, trading platforms, Etc. examples of implementation are available for popular programming languages: PHP, Python, C#, Node.JS. We hope that the implementation will be simple and clear.
            </div>

          </Purse>
        </NavigationMenu>
      </div>
    </>

  )
}

export default DocumentationPage;