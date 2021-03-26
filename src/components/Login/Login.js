import {React, useState} from 'react';
import {Col,Form,FormGroup,Input,Label,Button, CardLink, FormFeedback} from 'reactstrap';
import './Login.css';
import logo from '../../assets/logo.png';
import {FaEyeSlash} from 'react-icons/fa';
import RegexValidation from '../Validations/RegexValidation';
// import { useEffect } from 'react/cjs/react.development';
const Login=()=>{
     const [loginInfo,setLoginInfo]=useState({Email:'',Password:''})
     const [isFormValid,setisFormValid]=useState(false);
     const [validations,setValidations]=useState({
      Email: {
        touched: false,
        valid: false,
        validation:{
          required:true,
          email:true
        }
      },
      Password: {
        touched: false,
        valid: false,
        validation:{
          required:true,
          password:true
        }
      }
    })
     const submitted=(e)=>{  
       e.preventDefault();
       if(isFormValid){
         alert('Logged in with email '+loginInfo.Email)
       }    
     }  
    //  useEffect(()=>{
    //   let formValid=true;
    //   for(let item in validation){
    //     formValid=formValid && !validation[item].valid  
    //   }
    //   console.log('Form Valid '+formValid)
    //   setisFormValid(formValid)
    //  },[validation])
    //  useEffect(()=>{
    //   setisFormValid(false)
    // },[])
  const handleChange=(e)=>{
    const isValid=RegexValidation(e.target.value,validations[e.target.name].validation)
    console.log('valid '+isValid)
    setValidations({...validations,[e.target.name]:{touched:true,valid:!isValid}})
    let formValid=true;
    for(let item in validations){
      formValid=formValid && !validations[item].valid  
    }
    console.log('Form Valid '+formValid)
    setisFormValid(formValid)
    setLoginInfo({...loginInfo,[e.target.name]:e.target.value})

  }
    return(     
         <div className="d-flex flex-wrap justify-content-center align-items-center w-100 px-3" style={{background:'#F2F5F9'}}>
            <div className="w-100 mt-100 mx-auto" style={{maxWidth:'500px',maxHeight:'500px',marginTop:'15vh'}}>
                <div className="text-center mb-3">
                    <img alt="See Radio Logo" src={logo}></img>
                </div>
                <div className="bg-white shadow rounded-20 p-4" style={{borderRadius:'20px'}}>  
             <Form onSubmit={submitted} noValidate >
               <Col>
               <FormGroup >
                 <Label className='Label'>Email <span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
                 <Input className="form-control border-top-0 border-left-0 border-right-0 border-bottom" 
                 invalid={validations['Email'].valid && validations['Email'].touched} 
                 type='email' name='Email' placeholder='Enter Email' value={loginInfo.Email}
                 onChange={handleChange} />
                 <FormFeedback >Please write the mail Correctly!!</FormFeedback>
                 </FormGroup>
                 </Col>
                 <Col>
                 <div>
                 <FormGroup>
                 <Label className='Label'>Password <span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
                 <Input className="form-control border-top-0 border-left-0 border-right-0 border-bottom"
                  invalid={validations['Password'].valid && validations['Email'].touched}
                  type='password' name='Password' placeholder='Enter Password' value={loginInfo.Password}
                  onChange={handleChange} 
                  style={{position:'relative'}}  />
                  {!validations['Password'].valid?  <FaEyeSlash style={{position:'absolute',top:'50px',right:'25px',}}  />:null }
                   
                   <FormFeedback >Please Follow the password pattern(Atleast 3 Characters,Atmost 8)!!</FormFeedback>
               </FormGroup>
               </div>
               </Col>
               <Col>
               <Button  color='primary' block  disabled={!isFormValid}>LOGIN</Button>
               </Col> <br/>
               <CardLink >Forgot password?</CardLink>
             </Form>
             </div></div></div>
      
    )
}
export default Login;