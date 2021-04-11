import {Redirect, Route} from 'react-router-dom';
import NavigationBar from '../DashBoard/NavigationBar/NavigationBar';
const AuthGuard=(props)=>{

const token=localStorage.getItem('token')

    return(
        <>
            <NavigationBar/>
          <Route   path= {props.path}
          render={()=>
              token? 
             ( <props.component></props.component>)
              :(
                  alert('Someone Interrupted , Login first!!'),
              <Redirect   to={{pathname:'/login'}} /> )
          }
          
          />
         </>  
    )
}
export default AuthGuard;