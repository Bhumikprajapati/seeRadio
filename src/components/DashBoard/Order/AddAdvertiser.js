import { Form, Row, Col, Label, Input, FormGroup, Alert, Button, FormFeedback } from 'reactstrap';
import { FaForward } from 'react-icons/fa';
import { useEffect, useState } from 'react/cjs/react.development';
import RegexValidation from '../../Validations/RegexValidation';
import CustomStepper from './Stepper/CustomStepper';
const AddAdvertiser = (props) => {

  const [isFomValid, setisFormValid] = useState(false)
  const [primaryToggle,setPrimaryToggle]=useState(false)
  const [billingToggle,setBillingToggle]=useState(false)

  const [validation, setValidation] = useState({
    companyName: {
      touched: false,
      valid: false
    },
    website: {
      touched: false,
      valid: false
    },
    industryCategory: {
      touched: false,
      valid: true
    },
    firstName: {
      touched: false,
      valid: false
    },
    lastName: {
      touched: false,
      valid: false
    },
    email: {
      touched: false,
      valid: false
    },
    phone: {
      touched: false,
      valid: false
    },
    address: {
      touched: false,
      valid: false
    },
    addressLine2: {
      touched: true,
      valid: true
    },
    city: {
      touched: false,
      valid: false
    },
    country: {
      touched: false,
      valid: true
    },
    state: {
      touched: false,
      valid: true
    },
    postal: {
      touched: false,
      valid: false
    }
  })
  const [billValidation,setBillValidation]=useState({
    address2: {
      touched: false,
      valid: false
    },
    addressLine22: {
      touched: true,
      valid: true
    },
    city2: {
      touched: false,
      valid: false
    },
    country2: {
      touched: false,
      valid: true
    },
    state2: {
      touched: false,
      valid: true
    },
    postal2: {
      touched: false,
      valid: false
    }
  })
  useEffect(()=>{
    let valid=true;
   
    for(let item in validation)
    {
      valid=valid && validation[item].valid
    }
    if(billingToggle){
      for (let item in billValidation)
      {
        valid=valid && billValidation[item].valid
      }
    }
    // console.log(validation['email'])
    setisFormValid(valid)
   
  },[validation,billValidation,billingToggle])

  const handleChange = (e) => {
    const isValid = RegexValidation(e.target.name, e.target.value)
    // console.log(isValid)
    setValidation({...validation,[e.target.name]:{touched:true,valid:isValid}})
    if(billingToggle)
    {
      setBillValidation({...billValidation,[e.target.name]:{touched:true,valid:isValid}})
    }
   
    props.setPageOne({ ...props.PageOne, [e.target.name]: e.target.value })
  
  }
  const primaryChecked=()=>{
    setPrimaryToggle(!primaryToggle)
  }
  const billingChecked=()=>{
    setBillingToggle(!billingToggle)
  }
  const submitted=(e)=>{
 e.preventDefault()
    console.log(props.PageOne)
   
    props.nextStep()
  }
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100 flex-column mx-0 px-3" style={{ background: '#F2F5F9' }}>
      <div className="w-100 mt-100 mx-auto" style={{ maxWidth: '1200px', maxHeight: '800px', marginTop: '5vh' }}>
        <CustomStepper  activeStep={props.step} />
        <h4 style={{ textAlign: 'left', color: 'blue' }}>Add New Advertiser</h4>
        <div className="bg-white shadow p-4" style={{ borderRadius: '20px' }}>
          <Form  >
            <Row >
              <Col md={6}>
                <FormGroup>
                  <Label className="Label">Company Name<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="text" name="companyName" placeholder="Company Name" value={props.PageOne['companyName']}
                    onChange={handleChange} invalid={!validation['companyName'].valid && validation['companyName'].touched } />
                  <FormFeedback>Please Enter Company Name !!</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Company Website Address<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="text" name="website" placeholder="e.g www.abc.com" value={props.PageOne['website']}
                  onChange={handleChange} invalid={!validation['website'].valid && validation['website'].touched } />
                   <FormFeedback>Please Enter Website address!!</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Industry Category<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type='select' name="industryCategory" placeholder="Select" style={{ background: 'lightgrey' }} 
                   value={props.PageOne['industryCategory']} onChange={handleChange}>
                    <option>Arts & Entertainment</option>
                    <option>Autos & Vehicles</option>
                    <option>Beauty & Fitness</option>
                    <option>Books & Literature </option>
                    <option>Business & Industrial</option>
                    <option>Computers & Electronics</option>
                    <option>Finance</option>
                    <option>Food & Drink</option>
                    <option>Games</option>
                    <option>Health</option>
                    <option>Hobbies & Leisure</option>
                    <option>Home & Garden</option>
                    <option>Internet & Telecom</option>
                    <option>Job & Education</option>
                    <option>Law & Government</option>
                    <option>News</option>
                    <option>Online Communities</option>
                    <option>Pets & Animals</option>
                    <option>Real Estate</option>
                    <option>Reference</option>
                    <option>Science</option>
                    <option>Shopping</option>
                    <option>Sports</option>
                    <option>Travel</option>
                   
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
              </Col>
            </Row>
            <Alert color="info" style={{ textAlign: 'left' }}>
              Primary Contact
            </Alert>
            <Row >
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>First Name<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="text" name="firstName" placeholder="First Name" value={props.PageOne['firstName']}
                 onChange={handleChange}  invalid={!validation['firstName'].valid && validation['firstName'].touched }/>
                   <FormFeedback>Please Enter First Name!!</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Last Name<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="text" name="lastName" placeholder="Last Name" value={props.PageOne['lastName']}
                    onChange={handleChange} invalid={!validation['lastName'].valid && validation['lastName'].touched } />
                   <FormFeedback>Please Enter Last Name!!</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row >
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Email<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="email" name="email" placeholder="Enter Email" value={props.PageOne['email']}
                   onChange={handleChange} invalid={!validation['email'].valid && validation['email'].touched }/>
                   <FormFeedback>Please Enter Email Correctly!!</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Phone<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="number" name="phone" placeholder="Enter Contact Number" value={props.PageOne['phone']}
                   onChange={handleChange} invalid={!validation['phone'].valid && validation['phone'].touched } />
                   <FormFeedback>Please Enter Phone Correctly(10 digits)!!</FormFeedback>
                </FormGroup>
              </Col>
            </Row>

            <Alert color="info" style={{ textAlign: 'left' }}>
              <Input type="checkbox" id="checkbox2" onClick={primaryChecked} />
              Secondary Contact (Billing - Optional)
            </Alert>
            {primaryToggle?
            <div>
             <Row >
             <Col md={6}>
               <FormGroup>
                 <Label className='Label'>First Name</Label>
                 <Input type="text" name="firstName2" placeholder="First Name" value={props.PageOne['firstName2']}
                onChange={handleChange}  />
               </FormGroup>
             </Col>
             <Col md={6}>
               <FormGroup>
                 <Label className='Label'>Last Name</Label>
                 <Input type="text" name="lastName2" placeholder="Last Name"
                 value={props.PageOne['lastName2']}  onChange={handleChange}  />
               </FormGroup>
             </Col>
           </Row>
           <Row >
             <Col md={6}>
               <FormGroup>
                 <Label className='Label'>Email</Label>
                 <Input type="email" name="email2" placeholder="Enter Email" 
                value={props.PageOne['email2']}  onChange={handleChange}/>
               </FormGroup>
             </Col>
             <Col md={6}>
               <FormGroup>
                 <Label className='Label'>Phone</Label>
                 <Input type="number" name="phone2" placeholder="Enter Contact Number"
                 value={props.PageOne['phone2']}  onChange={handleChange}  />
               </FormGroup>
             </Col>
           </Row>
           </div>
            :null}

            <Alert color='info' style={{ textAlign: 'left' }} >
              Buisness Address
          </Alert>
            <Row >
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Address<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="text" name="address" placeholder="Enter Address" value={props.PageOne['address']}
                  onChange={handleChange} invalid={!validation['address'].valid && validation['address'].touched }/>
                   <FormFeedback>Please Enter Address!!</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Address Line 2</Label>
                  <Input type="text" name="addressLine2" placeholder="Enter Address" value={props.PageOne['addressLine2']}
                   onChange={handleChange} />
                </FormGroup>
              </Col>
            </Row>
            <Row >
              <Col md={6}>
                <FormGroup>
                  <Label className='Label' >City<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="city" name="city" placeholder="Enter City" value={props.PageOne['city']}
                   onChange={handleChange} invalid={!validation['city'].valid && validation['city'].touched } />
                    <FormFeedback>Please Enter Your City!!</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Country<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type='select' name="country" placeholder="Select" style={{ background: 'lightgrey' }}
                  value={props.PageOne['country']} onChange={handleChange}>
                    <option>India</option>
                    <option>Other</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row >
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>State/Province<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type='select' name="state" placeholder="Select" style={{ background: 'lightgrey' }}
                  value={props.PageOne['state']} onChange={handleChange}>
                    <option>India</option>
                    <option>Other</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Postal<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="postal" name="postal" placeholder="Enter Postal Code" 
                  value={props.PageOne['postal']} onChange={handleChange} invalid={!validation['postal'].valid && validation['postal'].touched }/>
                    <FormFeedback>Please Enter Postal Code!!</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Alert color="info" style={{ textAlign: 'left' }}>
              <Label check>
                <Input type="checkbox" id="checkbox2" onClick={billingChecked} />
              Billing Address ( Optional )
            </Label>
            </Alert>
            {billingToggle?
            <div>
               <Row >
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Address<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="text" name="address2" placeholder="Enter Address" value={props.PageOne['address2']}
                  onChange={handleChange} invalid={!billValidation['address2'].valid && billValidation['address2'].touched }/>
                   <FormFeedback>Please Enter Address!!</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Address Line 2</Label>
                  <Input type="text" name="addressLine22" placeholder="Enter Address" 
                  value={props.PageOne['addressLine22']} onChange={handleChange} />
                </FormGroup>
              </Col>
            </Row>
            <Row >
              <Col md={6}>
                <FormGroup>
                  <Label className='Label' >City<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="city" name="city2" placeholder="Enter City" value={props.PageOne['city2']}
                   onChange={handleChange} invalid={!billValidation['city2'].valid && billValidation['city2'].touched } />
                    <FormFeedback>Please Enter Your City!!</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Country<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type='select' name="country2" placeholder="Select" style={{ background: 'lightgrey' }}
                  value={props.PageOne['country2']} onChange={handleChange}>
                    <option>India</option>
                    <option>Other</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row >
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>State/Province<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type='select' name="state2" placeholder="Select" style={{ background: 'lightgrey' }}
                  value={props.PageOne['state2']} onChange={handleChange}>
                    <option>India</option>
                    <option>Other</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Postal<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="postal" name="postal2" placeholder="Enter Postal Code" 
                  value={props.PageOne['postal2']} onChange={handleChange} invalid={!billValidation['postal2'].valid && billValidation['postal2'].touched }/>
                    <FormFeedback>Please Enter Postal Code!!</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            </div>
            :null}
            <Row>
              <Col md={2}>
                <Button color="black" style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', margin: '10px' }}>Cancle</Button>{' '}
              </Col>
              <Col md={7}>
              </Col>
              <Col md={3}>
                <Button color="primary" style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', margin: '10px' }}
                  onClick={submitted} 
                // disabled={!isFomValid}
                >Create Advertiser  <FaForward /></Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>

  )
}
export default AddAdvertiser;