import { Form, Row, Col, Label, Input, FormGroup, Alert, Button, FormFeedback } from 'reactstrap';
import { FaForward } from 'react-icons/fa';
import { useEffect, useState } from 'react/cjs/react.development';
import RegexValidation from '../Validations/RegexValidation';
const Page1 = (props) => {
  const [PageOne, setPageOne] = useState({
    companyName: '',
    website: '',
    industryCategory: 'Number 1',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    addressLine2: '',
    city: '',
    country: 'India',
    state: 'India',
    postal: ''
  })
  const [isFomValid, setisFormValid] = useState(false)
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
      touched: true,
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
      touched: true,
      valid: true
    },
    state: {
      touched: true,
      valid: true
    },
    postal: {
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
    // console.log(validation['email'])
    setisFormValid(valid)
    // console.log(valid)
  },[validation])
  const handleChange = (e) => {
    const isValid = RegexValidation(e.target.name, e.target.value)
    console.log(isValid)
    setValidation({...validation,[e.target.name]:{touched:true,valid:isValid}})
    
    setPageOne({ ...PageOne, [e.target.name]: e.target.value })
  
  }
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100 flex-column mx-0 px-3" style={{ background: '#F2F5F9' }}>
      <div className="w-100 mt-100 mx-auto" style={{ maxWidth: '1200px', maxHeight: '800px', marginTop: '5vh' }}>
        <h4 style={{ textAlign: 'left', color: 'blue' }}>Add New Advrtiser</h4>
        <div className="bg-white shadow p-4" style={{ borderRadius: '20px' }}>

          <Form>
            <Row >
              <Col md={6}>
                <FormGroup>
                  <Label className="Label">Company Name<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="text" name="companyName" placeholder="Company Name"
                    onChange={handleChange} invalid={!validation['companyName'].valid && validation['companyName'].touched } />
                  <FormFeedback>Please Enter Company Name !!</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Company Website Address<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="text" name="website" placeholder="e.g www.abc.com"
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
                   onChange={handleChange}>
                    <option>Number 1</option>
                    <option>Number 2</option>
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
                  <Input type="text" name="firstName" placeholder="First Name" 
                 onChange={handleChange}  invalid={!validation['firstName'].valid && validation['firstName'].touched }/>
                   <FormFeedback>Please Enter First Name!!</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Last Name<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="text" name="lastName" placeholder="Last Name"
                    onChange={handleChange} invalid={!validation['lastName'].valid && validation['lastName'].touched } />
                   <FormFeedback>Please Enter Last Name!!</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row >
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Email<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="email" name="email" placeholder="Enter Email" 
                   onChange={handleChange} invalid={!validation['email'].valid && validation['email'].touched }/>
                   <FormFeedback>Please Enter Email Correctly!!</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Phone<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="number" name="phone" placeholder="Enter Contact Number"
                   onChange={handleChange} invalid={!validation['phone'].valid && validation['phone'].touched } />
                   <FormFeedback>Please Enter Phone Correctly(10 digits)!!</FormFeedback>
                </FormGroup>
              </Col>
            </Row>

            <Alert color="info" style={{ textAlign: 'left' }}>
              <Input type="checkbox" id="checkbox2" />{' '}
              Secondary Contact(Billing-Optional)
            </Alert>

            <Alert color='info' style={{ textAlign: 'left' }} >
              Buisness Address
          </Alert>
            <Row >
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Address<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="text" name="address" placeholder="Enter Address" 
                  onChange={handleChange} invalid={!validation['address'].valid && validation['address'].touched }/>
                   <FormFeedback>Please Enter Address!!</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Address Line 2</Label>
                  <Input type="text" name="addressLine2" placeholder="Enter Address" 
                   onChange={handleChange} />
                </FormGroup>
              </Col>
            </Row>
            <Row >
              <Col md={6}>
                <FormGroup>
                  <Label className='Label' >City<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="city" name="city" placeholder="Enter City"
                   onChange={handleChange} invalid={!validation['city'].valid && validation['city'].touched } />
                    <FormFeedback>Please Enter Your City!!</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Country<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type='select' name="country" placeholder="Select" style={{ background: 'lightgrey' }}
                   onChange={handleChange}>
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
                   onChange={handleChange}>
                    <option>India</option>
                    <option>Other</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className='Label'>Postal<span style={{ color: 'red', fontSize: '17px' }}><sup>*</sup></span></Label>
                  <Input type="postal" name="postal" placeholder="Enter Postal Code" 
                   onChange={handleChange} invalid={!validation['postal'].valid && validation['postal'].touched }/>
                    <FormFeedback>Please Enter Postal Code!!</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Alert color="info" style={{ textAlign: 'left' }}>

              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
              Billing Address(Optional)
            </Label>
            </Alert>
            <Row>
              <Col md={2}>
                <Button color="black" style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', margin: '10px' }}>Cancle</Button>{' '}
              </Col>
              <Col md={7}>
              </Col>
              <Col md={3}>
                <Button color="primary" style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', margin: '10px' }}
                  onClick={props.nextStep}
                  disabled={!isFomValid}
                >Create Advertiser  <FaForward /></Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>

  )
}
export default Page1;