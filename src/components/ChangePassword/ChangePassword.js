import {React} from 'react';
import {Col,Form,FormGroup,Input,Label,Button,FormText} from 'reactstrap';
import {FaEyeSlash} from 'react-icons/fa';
const Changepasword=()=>{
    return(     
         <div className="d-flex flex-wrap justify-content-center align-items-center w-100 px-3" style={{background:'#F2F5F9'}}>
            <div className="w-100 mt-100 mx-auto" style={{maxWidth:'500px',maxHeight:'500px',marginTop:'15vh'}}>
                <div className="bg-white shadow rounded-20 p-4" style={{borderRadius:'20px'}}>  
             <Form >
               <Col>
               <FormGroup >
                 <Label className='Label'>Current Password<span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
                 <Input className="form-control border-top-0 border-left-0 border-right-0 border-bottom"  type='password' 
                 name='currentPass' placeholder='Enter Current Paaword' style={{position:'relative'}}
                 />
                <FaEyeSlash style={{position:'absolute',top:'50px',right:'25px',}} />     

                 </FormGroup>
                 </Col>
                 <Col >
                 <FormGroup>
                 <Label className='Label'>New password <span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
                 <Input className="form-control border-top-0 border-left-0 border-right-0 border-bottom" type='password' 
                 name='newPassword' placeholder='Enter New Password'  style={{position:'relative'}}
                 />
                     <FaEyeSlash style={{position:'absolute',top:'50px',right:'25px',}} />     
                     <FormText>Use 8 or more character with a mix of UpperCase,LowerCase,numbers & symbols.</FormText>
               </FormGroup>
              
               </Col>
               <Col>
                
                <FormGroup>
                <Label className='Label'>Confirm password <span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
                <Input className="form-control border-top-0 border-left-0 border-right-0 border-bottom" type='password' 
                name='conNewPassword' placeholder='Confirm Password' style={{position:'relative'}}
                />
                  <FaEyeSlash style={{position:'absolute',top:'50px',right:'25px',}} />
                   
              </FormGroup>
             
              </Col>
               <Col>
               <Button  color='primary' block >Change Password</Button>
               </Col> 
             </Form>
             </div></div></div>
      
    )
}
export default Changepasword;