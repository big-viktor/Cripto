import './App.css';
import NavigationMenu from './component/navigationMenu/navigationMenu';
import Purse from './component/purse/purse';
import ButtonVariant from './component/buttonVariant/buttonVariant';
import DownPurse from './component/downPurse/downPurse';
import LogoValute from './img/Group 42.png'

function App() {
  return (
    <div className="App">
      <NavigationMenu >
        <Purse title="$ 0.00">
          <div className="content_navigatino">
            <ButtonVariant name="Только с балансом" isShow={true} />
            <ButtonVariant name="Мои кошельки" />
          </div>
          <div>
            <DownPurse price="0" namePrice="Bitcoin BTC" src={LogoValute} >
              ASD
            </DownPurse>
          </div>

        </Purse>
      </NavigationMenu>
    </div>
  );
}

export default App;
