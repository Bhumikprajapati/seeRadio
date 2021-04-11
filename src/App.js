import './App.css';

import Changepasword from './components/ChangePassword/ChangePassword';
import Login from './components/Login/Login';
import Order from './components/DashBoard/Order/Order';
import DashBoard from './components/DashBoard/DashBoard';
import {Route,Switch,Redirect} from 'react-router-dom'
import VideosInProduction from './components/DashBoard/Campaigns/VideosInProduction/VideosInProduction';
import AuthRoute from './components/AuthGuard/AuthGuard';
function App() {

   let  route=(<div>
     
      <Switch>
        <Route path='/login' exact component={Login}  />
      <AuthRoute path='/dashBoard' exact component={DashBoard} />
       <AuthRoute path='/order' exact component={Order} />
       <AuthRoute path='/videosInProduction' exact component={VideosInProduction}  />
       <AuthRoute path='/changePassword' exact component={Changepasword} />
       <Redirect to='/login'/>
       </Switch>
      </div>)
    
   
 

  return (
    <div className="App">
        {route}
      {/* {localStorage.getItem('token') ? route:<Login />} */}
     {/* <Switch>
       <Route path='/dashBoard/order' component={Order} />
       <Route path='/videosInProduction' component={VideosInProduction}  />
       <Route path='/changePassword' component={Changepasword} />
       <Route path='/dashBoard' component={DashBoard}  />
       <Route  path='/' exact component={Login}  />
       <Redirect to='/'/>
      </Switch>  */}
    </div>
  );
}

export default App;
