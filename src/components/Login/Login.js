import {React, useState} from 'react';
import {Col,Form,FormGroup,Input,Label,Button, CardLink, FormFeedback} from 'reactstrap';
import './Login.css';
import logo from '../../assets/logo.png';
import {FaEyeSlash,FaEye} from 'react-icons/fa';
import RegexValidation from '../Validations/RegexValidation';
import { useEffect } from 'react/cjs/react.development';
import {useHistory} from 'react-router-dom';
import { loginwith } from '../../ApiCalls/Api';
const Login=()=>{
     let history=useHistory();
     const [loginInfo,setLoginInfo]=useState({email:'',password:''})
     const [isFormValid,setisFormValid]=useState(false);
     const [toggle,setToggle]=useState(false);
     const [validation,setValidation]=useState({
      email: {
        touched: false,
        valid: false
      },
      password: {
        touched: false,
        valid: false
      }
    })
 
     const submitted=(e)=>{  
       e.preventDefault();
      
         loginwith(loginInfo)
         .then(res=>
          {
            console.log(res.personData);
            localStorage.setItem('token',res.token)
            localStorage.setItem('role',res.personData.roleCode)
            localStorage.setItem('loginMail',res.personData.email)
            localStorage.setItem('createdByPerson',res.personData.createdByPerson)
            localStorage.setItem('loginId',res.personData.id)
          
            history.push('/dashBoard')
         
          })
         .catch(err=>
          {
            console.log(err);
      alert(JSON.parse(err.request.response).errorMessage)
          })
     }  
     useEffect(()=>{
      document.body.style = 'background: #F2F5F9;'
      let formValid=true;
      for(let item in validation){
        formValid=formValid && validation[item].valid  
      }
      setisFormValid(formValid)
     },[validation])
  const handleChange=(e)=>{
    const isValid=RegexValidation(e.target.name,e.target.value)
    setValidation({...validation,[e.target.name]:{touched:true,valid:isValid}})
    setLoginInfo({...loginInfo,[e.target.name]:e.target.value})

  }

  const setVisibility=()=>{
   var p= document.getElementById('password')
   if(p.type==='password')
   {
    p.type='text'
    setToggle(!toggle)
   }
   else{
     p.type='password'
     setToggle(false)
   }
  }
  let eyeVisible
  if(toggle){ 
    eyeVisible=<FaEyeSlash  style={{position:'absolute',top:'50px',right:'25px'}} onClick={setVisibility}/>
  }
  else{
    eyeVisible=<FaEye  style={{position:'absolute',top:'50px',right:'25px'}} onClick={setVisibility} />
  }
    return(     
         <div className="d-flex justify-content-center align-items-center w-100 h-100 flex-column mx-0 px-3" >
            <div className="w-100 mt-100 mx-auto" style={{maxWidth:'500px',maxHeight:'500px',marginTop:'15vh'}}>
                <div className="text-center mb-3">
                    <img alt="See Radio Logo" src={logo}></img>
                </div>
                <div className="bg-white shadow p-4" style={{ borderRadius: '20px' }}>  
             <Form onSubmit={submitted} noValidate >
               <Col>
               <FormGroup >
                 <Label className='Label'>Email <span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
                 <Input className="form-control border-top-0 border-left-0 border-right-0 border-bottom" 
                 type='email' name='email' placeholder='Enter Email' value={loginInfo.email}
                   invalid={!validation['email'].valid && validation['email'].touched} 
                 onChange={handleChange} />
                 <FormFeedback >Please enter mail correctly !!</FormFeedback>
                 </FormGroup>
                 </Col>
                 <Col>
                 <div>
                 <FormGroup>
                 <Label className='Label'>Password <span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
                 <Input className="form-control border-top-0 border-left-0 border-right-0 border-bottom"                
                  type='password' name='password' placeholder='Enter Password' value={loginInfo.password}  id='password'
                  invalid={!validation['password'].valid && validation['password'].touched}
                  onChange={handleChange} 
                  style={{position:'relative'}}  />
                  {!validation['password'].valid && validation['password'].touched ?null 
                  : eyeVisible
                   }            
                   <FormFeedback >Please enter password </FormFeedback>
               </FormGroup>
               </div>
               </Col>
               <Col>
               <Button  color='primary' block 
                disabled={!isFormValid}  >LOGIN</Button>
               </Col> <br/>
               <CardLink  >Forgot password?</CardLink>
             </Form>
             </div>
             </div>
             </div>
      
    )
}
export default Login;