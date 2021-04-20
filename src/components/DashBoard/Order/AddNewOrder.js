import {Form,Row,Col,Label,Input,FormGroup,Alert,Button, FormFeedback,Spinner} from 'reactstrap';
import {FaForward,FaBackward} from 'react-icons/fa';
import { useState,useEffect, } from 'react/cjs/react.development';
import RegexValidation from '../../Validations/RegexValidation';
import CustomStepper from './Stepper/CustomStepper';
import {getAdvertiser,getTargetMarket,addCampaign} from '../../../ApiCalls/Api';

const AddNewOrder=(props)=>{
    const {PageTwo,setPageTwo,nextStep,prevStep,step,resetStep}=props
     const [isFomValid, setisFormValid] = useState(false)
     const [advertiserOption,setAdvertiserOption]=useState([])
     const [targetMarketOption,setTargetMarketOption]=useState([])
     const [loading,setLoading]=useState(false);
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
      for(let item in validation)
      {
        valid=valid && validation[item].valid
      }
      setisFormValid(valid)
    },[validation])
   
    useEffect(()=>{
      getAdvertiser()
      .then(res=>{
        // console.log(res)
        let data=res
        setAdvertiserOption(
            data.map((adv)=>{
                return {label:adv.companyName,value:adv.id}
            }))
      })
      .catch(err=>console.error(err))

      getTargetMarket()
      .then(res=>{
        let markets=res
        setTargetMarketOption(
          markets.map((market)=>{
            return {label:market.name,id:market.id,value:market.name}
          })
        )
      })
      .catch(err=>console.error(err))
    },[])
    const handleChange = (e) => {
      const isValid = RegexValidation(e.target.name, e.target.value)
      setValidation({...validation,[e.target.name]:{touched:true,valid:isValid}})
     setPageTwo({ ...PageTwo, [e.target.name]: e.target.value })
    
    }
    const submitted=(e)=>{
      setLoading(true);
      e.preventDefault()
      console.log(PageTwo)
      let advertiserIndex=advertiserOption.findIndex(i=>i.label===PageTwo['advertiser'])
      let advertiserId=advertiserOption[advertiserIndex].value
      const clientData=JSON.parse(localStorage.getItem('clientData'))
      const soaID=clientData.salesOrgCompany.soaID
      const sosID=clientData.salesOrgCompany.sosID
      const salesOrgCompanyID=clientData.salesOrgCompany.parentSalesOrgCompanyID
      const statusByPersonID=clientData.person.createdByPerson
      const statusWithPersonID=clientData.salesOrgCompany.clientPersonID
      const campaign={
        "clientCompanyID": advertiserId,
        "title": PageTwo['title'],
        "description": PageTwo['description'],
        "landingpageURL": PageTwo['landingUrl'],
        "targetMarket": PageTwo['targetMarket'],
        "distributionBudget": PageTwo['budget'],
        "startDate": "04/22/2021",
        "price": PageTwo['price'],
        "soaID": soaID,
        "sosID": sosID,
        "salesOrgCompanyID": salesOrgCompanyID,
        "statusByPersonID": statusByPersonID,
        "statusWithPersonID": statusWithPersonID
    }
    //  addCampaign(campaign)
    //   .then(res=>{
    //     setLoading(false);
    //     console.log(res)
    //     localStorage.setItem('OrderData',JSON.stringify(res))
    //     nextStep()})
    //   .catch(err=>{ setLoading(false); console.log(err)})
      nextStep()
    }
    return(
        <div>
        <div className="d-flex justify-content-center align-items-center w-100 h-100 flex-column mx-0 px-3" style={{background:'#F2F5F9'}}>
      <div className="w-100 mt-100 mx-auto" style={{maxWidth:'1200px',maxHeight:'800px'}}>
        <CustomStepper activeStep={step} />
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
            value={PageTwo['advertiser']} onChange={handleChange}>
           {advertiserOption.map((adv)=><option key={adv.value} value={adv.id}>{adv.label}</option>)}
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className='Label'>Title<span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
            <Input type="title" name="title" placeholder="Title" 
            value={PageTwo['title']} onChange={handleChange} invalid={!validation['title'].valid && validation['title'].touched} />
             <FormFeedback>Please write title!!</FormFeedback>
          </FormGroup>
        </Col>
      </Row>
     
            <Row >
        <Col md={6}>
        <FormGroup>
            <Label className='Label'>Preffered Landing Page URL<span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
            <Input type='text' name="landingUrl" placeholder="www.testbacancy.com" 
            value={PageTwo['landingUrl']} onChange={handleChange} invalid={!validation['landingUrl'].valid && validation['landingUrl'].touched}/>
              <FormFeedback>Please write URL!!</FormFeedback>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className='Label'>Price<span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
            <Input type="" name="price" placeholder="Price" 
            value={PageTwo['price']} onChange={handleChange} invalid={!validation['price'].valid && validation['price'].touched} />
             <FormFeedback>Please write Price in digit!!</FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row >
        <Col md={6}>
          <FormGroup>
            <Label className='Label'>Description<span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
            <Input style={{height:'100px'}} type="textarea" name="description" placeholder="Description"
            value={PageTwo['description']} onChange={handleChange} invalid={!validation['description'].valid && validation['description'].touched} />
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
            value={PageTwo['targetMarket']} onChange={handleChange} >
            {targetMarketOption.map((market)=><option value={market.value} key={market.id}>{market.label}</option>)}
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className='Label'>Budget<span style={{color:'red',fontSize:'17px'}}><sup>*</sup></span></Label>
            <Input type="number" name="budget" placeholder="$0"
            value={PageTwo['budget']} onChange={handleChange} invalid={!validation['budget'].valid && validation['budget'].touched}/>
             <FormFeedback>Please write Budget in digit!!</FormFeedback>
          </FormGroup>
        </Col>
      </Row>  
    <Row>
        <Col md={2}>
        <Button  color="primary" style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',margin:'10px'}}
        onClick={prevStep}
        ><FaBackward/>  Back</Button>
        </Col>
        <Col md={6}>
        </Col>
        <Col md={4}>
        <Button color="black" style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',margin:'10px'}}
         onClick={resetStep} >Cancle</Button>
          {loading ?
            <Button variant="primary" >
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                margin='2px'
              />
           Creating Order...
           </Button>
           :  
           <Button color="primary"  style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',margin:'10px'}}
           onClick={ submitted}
           //  disabled={!isFomValid}
           >Create Order  <FaForward/></Button> }
         
        </Col>

    </Row>
        </Form>
         
        </div></div></div>
        </div>
    )
}
export default AddNewOrder;