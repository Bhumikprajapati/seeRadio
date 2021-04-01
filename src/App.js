import './App.css';

import Changepasword from './components/ChangePassword/ChangePassword';
import Login from './components/Login/Login';
import Order from './components/DashBoard/Order/Order';
// import Page3 from './components/Order/Page3';
import DashBoard from './components/DashBoard/DashBoard';
import {Route,Switch} from 'react-router-dom'
import VideosInProduction from './components/DashBoard/Campaigns/VideosInProduction';
import NavigationBar from './components/DashBoard/NavigationBar/NavigationBar';
function App() {
 
  return (
    <div className="App">
     {window.location.pathname!=='/'?<NavigationBar/>:null}
     <Switch>
       <Route path='/order' component={Order} />
       <Route path='/dashBoard' component={DashBoard} />
       <Route path='/videosInProduction' component={VideosInProduction}  />
       <Route path='/changePassword' component={Changepasword} />
       <Route  path='/' exact component={Login} />
   
      </Switch>
     
      {/* <Order/> */}
  {/* <Page2/> */}
  {/* <Page3/> */}
      {/* <Changepasword/> */}
     {/* <Login/> */}
    </div>
  );
}

export default App;
