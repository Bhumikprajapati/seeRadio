import {Form,Row,Col,Label,Input,FormGroup,Alert,Button, FormFeedback} from 'reactstrap';
import {FaForward,FaBackward} from 'react-icons/fa';
import { useState,useEffect, } from 'react/cjs/react.development';
import RegexValidation from '../../Validations/RegexValidation';
import CustomStepper from './Stepper/CustomStepper';
const AddNewOrder=(props)=>{
     
     const [isFomValid, setisFormValid] = useState(false)
     const [validation,setValidation]=useState({
      advertiser:{
        touched:false,
        valid:true
      },
      title:{
        touched:false,
        valid:false
      },
      landingUrl:{
        touched:false,
        valid:false
      },
      price:{
        touched:false,
        valid:false
      },
      description:{
        touched:false,
        valid:false
      },
      targetMarket:{
        touched:false,
        valid:true
      },
      budget:{
        touched:false,
        valid:false
      }        
     })
     useEffect(()=>{
      let valid=true;
      // console.log(validation)
      for(let item in validation)
      {
        valid=valid && validation[item].valid
      }
      setisFormValid(valid)
      // console.log(valid)
    },[validation])
    const handleChange = (e) => {
      const isValid = RegexValidation(e.target.name, e.target.value)
      // console.log(isValid)
      setValidation({...validation,[e.target.name]:{touched:true,valid:isValid}})
      props.setPageTwo({ ...props.PageTwo, [e.target.name]: e.target.value })
    
    }
    const submitted=(e)=>{
      e.preventDefault()
      console.log(props.PageTwo)
      props.nextStep()
    }
    return(
        
        <div className="d-flex justify-content-center align-items-center w-100 h-100 flex-column mx-0 px-3" style={{background:'#F2F5F9'}}>
      <div className="w-100 mt-100 mx-auto" style={{maxWidth:'1200px',maxHeight:'800px',marginTop:'5vh'}}>
        <CustomStepper activeStep={props.step} />
      <h4 style={{textAlign:'left',color:'blue'}}>Add New Orders</h4> 
          <div className="bg-white shadow p-4" style={{borderRadius:'20px'}}>
        <Form >
        <Alert color="info" style={{textAlign:'left'} }>    
           Order
            </Alert>  
        <Row >
        <Col md={6}>
        <FormGroup>
            <Label className='Label'>Advertiser<span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
            <Input type='select' name="advertiser" placeholder="Test Bacancy" style={{background:'lightgrey'}} 
            value={props.PageTwo['advertiser']} onChange={handleChange}>
            <option>Test Bacancy</option>
            <option>Number 2</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className='Label'>Title<span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
            <Input type="title" name="title" placeholder="Title" 
            value={props.PageTwo['title']} onChange={handleChange} invalid={!validation['title'].valid && validation['title'].touched} />
             <FormFeedback>Please write title!!</FormFeedback>
          </FormGroup>
        </Col>
      </Row>
     
            <Row >
        <Col md={6}>
        <FormGroup>
            <Label className='Label'>Preffered Landing Page URL<span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
            <Input type='text' name="landingUrl" placeholder="www.testbacancy.com" 
            value={props.PageTwo['landingUrl']} onChange={handleChange} invalid={!validation['landingUrl'].valid && validation['landingUrl'].touched}/>
              <FormFeedback>Please write URL!!</FormFeedback>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className='Label'>Price<span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
            <Input type="" name="price" placeholder="Price" 
            value={props.PageTwo['price']} onChange={handleChange} invalid={!validation['price'].valid && validation['price'].touched} />
             <FormFeedback>Please write Price in digit!!</FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row >
        <Col md={6}>
          <FormGroup>
            <Label className='Label'>Description<span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
            <Input style={{height:'100px'}} type="textarea" name="description" placeholder="Description"
            value={props.PageTwo['description']} onChange={handleChange} invalid={!validation['description'].valid && validation['description'].touched} />
             <FormFeedback>Please write Description!!</FormFeedback>
          </FormGroup>
        </Col>
        <Col md={6}>
      
        </Col>
      </Row>  
          <Alert color='info' style={{textAlign:'left'}} >
            Distribution
          </Alert>  
          <Row >
        <Col md={6}>
          <FormGroup>
            <Label className='Label'>Target Market</Label>
            <Input type='select' name="targetMarket" placeholder="Select" style={{background:'lightgrey'}}
            value={props.PageTwo['targetMarket']} onChange={handleChange} >
            <option>Calgary</option>
            <option>Other</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className='Label'>Budget<span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
            <Input type="number" name="budget" placeholder="$0"
            value={props.PageTwo['budget']} onChange={handleChange} invalid={!validation['budget'].valid && validation['budget'].touched}/>
             <FormFeedback>Please write Budget in digit!!</FormFeedback>
          </FormGroup>
        </Col>
      </Row>  
    <Row>
        <Col md={2}>
        <Button  color="primary" style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',margin:'10px'}}
        onClick={props.prevStep}
        ><FaBackward/>  Back</Button>
        </Col>
        <Col md={6}>
        </Col>
        <Col md={4}>
        <Button color="black" style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',margin:'10px'}}
         onClick={props.resetStep} >Cancle</Button>
          <Button color="primary"  style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',margin:'10px'}}
          onClick={ submitted}
          //  disabled={!isFomValid}
          >Create Order  <FaForward/></Button>
        </Col>

    </Row>
        </Form>
         
        </div></div></div>
    )
}
export default AddNewOrder;