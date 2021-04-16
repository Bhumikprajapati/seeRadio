import {React} from 'react';
import {Col,Form,FormGroup,Input,Label,Button,FormText, FormFeedback} from 'reactstrap';
import {FaEyeSlash,FaEye} from 'react-icons/fa';
import { useEffect, useState } from 'react/cjs/react.development';
import RegexValidation from '../Validations/RegexValidation';
import { changePassWith } from '../../ApiCalls/Api';
const Changepasword=(props)=>{
  const [pass,setPass]=useState({
    currentPass:'',
    newPass:'',
    confirmNewPass:''
  })
  const [validation,setValidation]=useState({
    currentPass:{
      touched:false,
      valid:false
    },
    newPass:{
      touched:false,
      valid:false
    },
    confirmNewPass:{
      touched:false,
      valid:false
    }
  })
  const [isFormValid,setisFormValid]=useState(false)
  const [currentPassToggle,setCurrentPassToggle]=useState(false)
  const [newPassToggle,setNewPassToggle]=useState(false)
  const [confirmNewToggle,setConfirmNewToggle]=useState(false)
  let visibleForcurrentPass
  let visibleForNewPass
  let visibleForConfirmNewPass
  useEffect(()=>{
    document.body.style = 'background: #F2F5F9;'
let valid=true;
for(let item in validation)
{
  valid=valid && validation[item].valid
}
setisFormValid(valid)
  },[validation])
  const handleChange=(e)=>{
   const isValid=RegexValidation(e.target.name,e.target.value)
      setValidation({...validation,[e.target.name]:{touched:true,valid:isValid}})
      setPass({...pass,[e.target.name]:e.target.value})
  }
  const handlePassSuccess=(e)=>{
    e.preventDefault()
    // if(pass['currentPass']===pass['newPass'])
    // {
    //   alert('Old password & new password can not be same')
    // }
     if(pass['newPass']!==pass['confirmNewPass'])
    {
      alert('Please Match Password & confirm password')
    }
    else{
    const payload= {
      "oldPassword":pass['currentPass'],
      "newPassword":pass['newPass']
    }
      changePassWith(payload)
      .then(res=>{console.log(res)
        alert('password changed successfully')
        props.history.push('/dashBoard')
      })
      .catch(err=>console.error('Error '+err))
    
    }
  }
  const setVisibilityForCurrentPass=()=>{
    var p= document.getElementById('currentPass')
    if(p.type==='password')
    {
     p.type='text'
     setCurrentPassToggle(!currentPassToggle)
    }
    else{
      p.type='password'
      setCurrentPassToggle(false)
    }
   }
   const setVisibilityForNewPass=()=>{
    var p= document.getElementById('newPass')
    if(p.type==='password')
    {
     p.type='text'
     setNewPassToggle(!newPassToggle)
    }
    else{
      p.type='password'
      setNewPassToggle(false)
    }
   }
   const setVisibilityForConfirmNewPass=()=>{
    var p= document.getElementById('confirmNewPass')
    if(p.type==='password')
    {
     p.type='text'
     setConfirmNewToggle(!confirmNewToggle)
    }
    else{
      p.type='password'
      setConfirmNewToggle(false)
    }
   }
   if(currentPassToggle){
    visibleForcurrentPass= <FaEyeSlash style={{position:'absolute',top:'50px',right:'25px'}} onClick={setVisibilityForCurrentPass}  />
   }
   else{
    visibleForcurrentPass=<FaEye  style={{position:'absolute',top:'50px',right:'25px'}} onClick={setVisibilityForCurrentPass} />
   }
   if(newPassToggle){
    visibleForNewPass= <FaEyeSlash style={{position:'absolute',top:'50px',right:'25px'}} onClick={setVisibilityForNewPass}  />
   }
   else{
    visibleForNewPass=<FaEye  style={{position:'absolute',top:'50px',right:'25px'}} onClick={setVisibilityForNewPass} />
   }
   if(confirmNewToggle){
    visibleForConfirmNewPass= <FaEyeSlash style={{position:'absolute',top:'50px',right:'25px'}} onClick={setVisibilityForConfirmNewPass}  />
   }
   else{
    visibleForConfirmNewPass=<FaEye  style={{position:'absolute',top:'50px',right:'25px'}} onClick={setVisibilityForConfirmNewPass} />
   }
    return(     
         <div className="d-flex flex-wrap justify-content-center align-items-center w-100 px-3" style={{background:'#F2F5F9'}}>
            <div className="w-100 mt-100 mx-auto" style={{maxWidth:'500px',maxHeight:'500px',marginTop:'15vh'}}>
                <div className="bg-white shadow rounded-20 p-4" style={{borderRadius:'20px'}}>  
             <Form onSubmit={handlePassSuccess}>
               <Col>
               <FormGroup >
                 <Label className='Label'>Current Password<span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
                 <Input className="form-control border-top-0 border-left-0 border-right-0 border-bottom"  type='password' id='currentPass'
                 name='currentPass' placeholder='Enter Current Password' style={{position:'relative'}}
                 value={pass['currentPass']}
                 onChange={handleChange} invalid={!validation['currentPass'].valid && validation['currentPass'].touched}
                 />
                 {!validation['currentPass'].valid && validation['currentPass'].touched?null:
                visibleForcurrentPass }
                    
                <FormFeedback>Please enter correct password</FormFeedback>
                 </FormGroup>
                 </Col>
                 <Col >
                 <FormGroup>
                 <Label className='Label'>New password <span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
                 <Input className="form-control border-top-0 border-left-0 border-right-0 border-bottom" type='password' 
                id='newPass' name='newPass' placeholder='Enter New Password'  style={{position:'relative'}} value={pass['newPass']}
                 onChange={handleChange} invalid={!validation['newPass'].valid && validation['newPass'].touched} />
                  {!validation['newPass'].valid && validation['newPass'].touched?null: 
                  visibleForNewPass}  
                     <FormFeedback>Please enter password in correct format</FormFeedback>
                     <FormText>Use 8 or more character with a mix of UpperCase,LowerCase,numbers & symbols.</FormText>
               </FormGroup>              
               </Col>
               <Col>               
                <FormGroup>
                <Label className='Label'>Confirm password <span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
                <Input className="form-control border-top-0 border-left-0 border-right-0 border-bottom" type='password' 
               id='confirmNewPass' name='confirmNewPass' placeholder='Confirm Password' style={{position:'relative'}} value={pass['confirmNewPass']}
                onChange={handleChange} invalid={!validation['confirmNewPass'].valid && validation['confirmNewPass'].touched} />
                {!validation['confirmNewPass'].valid && validation['confirmNewPass'].touched?null: 
                visibleForConfirmNewPass } 
                  <FormFeedback>Please match correctly</FormFeedback>
              </FormGroup>           
              </Col>
               <Col>
               <Button  color='primary' block  disabled={!isFormValid}>Change Password</Button>
               </Col> 
             </Form>
             </div></div></div>
      
    )
}
export default Changepasword;