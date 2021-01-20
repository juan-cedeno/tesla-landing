
import './App.css';
import { Header } from './components/Header';
import { Item } from './components/Item';

import SolarPanel from './assets/SolarPanels.jpeg'
import ModelS from './assets/ModelS.jpeg'
import Model3 from './assets/Model3.jpeg'
import ModelX from './assets/ModelX.jpeg'
import ModelY from './assets/ModelY.jpeg'
import SolarRoof from './assets/SolarRoof.jpeg'
import Accessories from './assets/Accessories.jpg'
import { Footer } from './components/Footer';


function App() {
  return (
    <div>
      <Header/>

    <div>

      <Item
        title = 'lowest cost solar panels in america'
        desc = 'money-back guarantee'
        image= {SolarPanel}
        rigthBtnText = 'learn more'
        leftBtntext = 'order now'
        twoBtn = 'true'
        first
        />
       <Item
        title = 'model s '
        desc = 'starting at $69,420'
        image= {ModelS}
        rigthBtnText = 'existing inventory'
        leftBtntext = 'custom order'
        twoBtn = 'true'
        />
      <Item
        title = 'model 3'
        desc = 'order online for touchless delivery'
        image= {Model3}
        rigthBtnText = 'existing inventory'
        leftBtntext = 'custom order'
        twoBtn = 'true'
        />
      <Item
        title = 'model x'
        desc = 'order online for touchless delivery'
        image= {ModelX}
        rigthBtnText = 'existing inventory'
        leftBtntext = 'custom order'
        twoBtn = 'true'
        />
      <Item
        title = 'model y'
        desc = 'order online for touchless delivery'
        image= {ModelY}
        rigthBtnText = 'lear more'
        leftBtntext = 'custom order'
        twoBtn = 'true'
        />
      <Item
        title = 'solar for new roofs'
        desc = 'solar roof costs less than a new roof plus solar panels'
        image= {SolarRoof}
        rigthBtnText = 'lear more'
        leftBtntext = 'order now'
        twoBtn = 'true'
        />
      <Item
        title = 'accessories'
        desc = ''
        image= {Accessories}
        rigthBtnText = ''
        leftBtntext = 'show now'
        />
    </div>

    <Footer/>
    </div>
  );
}

export default App;
