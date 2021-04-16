import {Row,Col,Card,Input,Button,Alert} from 'reactstrap';
import {BiHistory} from 'react-icons/bi';
import {FaDownload,FaFileAlt} from 'react-icons/fa';
import { RiFileCopyLine } from 'react-icons/ri';
import { BsFillMicFill } from 'react-icons/bs'
import Dropzone from "react-dropzone";
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';
import { campaign } from '../../../../ApiCalls/Api';

const CampaignDetail=()=>{
    const {id}=useParams()
const [script,setScript]=useState([])
const [audio, setAudio] = useState([])
const [multifiles, setmultifiles] = useState([])
  const [campaignDetails,setCampaignDetails]=useState({
    advertiser: '',
    orderName: '',
    orderNumber: '',
    salesOrganization: '',
    sescription: '',
    landingWebsiteURL: '',
    distributionBudget: '',
    targetMarket: '',
    industryCategory: '',
    actionRequiredBy: '',
    scriptFileData:null,
    audioFileData:null,
    multipleFileData:[]
  })
useEffect(()=> { document.body.style = 'background: #F2F5F9';
campaign(id)
.then( res=>{
        console.log(res)
        const scriptData=res.CampaignAssets.filter(file=>file.type==='SCRIPT')[0]
        const audioData=res.CampaignAssets.filter(file=>file.type==='AUDIO')[0]
        const multiData=res.CampaignAssets.filter(file=>file.type==='OTHER')
        console.log(multiData)
        setCampaignDetails({
            advertiser: res.clientCompany.companyName,
            orderName: res.title,
            orderNumber: res.clientCampaignNumber,
            salesOrganization: res.SalesOrgCompany.companyName,
            description: res.title,
            landingWebsiteURL: res.landingpageURL,
            distributionBudget: res.distributionBudget,
            targetMarket: res.targetMarket,
            industryCategory: res.clientCompany.Industry.name,
            actionRequiredBy: res.statusWithPerson.firstName + ' ' + res.statusWithPerson.lastName,
            scriptFileData:scriptData,
            audioFileData:audioData,
            multipleFileData:multiData
        })

    }
)
.catch(err=>console.log(err))
},[id])
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]
const onDropScript=(file)=>{
    const fileName = file[0].name
    console.log(file[0])    
   let date=todayDate()
    setScript([fileName,date])
    // afterUpload('SCRIPT',file[0])
}
const todayDate=()=>{
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]
    let today=new Date()
    const month=today.getMonth()
    const date=`${today.getDate()}-${monthNames[month]}-${today.getFullYear()}`
    return date
  } 
const onDropAudio = (file) => {
    const fileName = file[0].name
    let date=todayDate()
    setAudio([fileName,date])
    // afterUpload('AUDIO',file[0])
  }
  const onDropMultiFile = (file) => {
    const files = file
    for(let i=0;i<files.length; i++) {
      multifiles.push(files[i].name)
      }
      
      console.log(files)
    //   afterUpload('OTHER',files)
  }
const scriptFile=()=>{
    return document.getElementById('script').click()
   }
   const voiceFile=()=>{
    return document.getElementById('voice').click()
   }
   const multipleFile=()=>{
    return document.getElementById('multi').click()
   }
const uploadScriptHandler=(e)=>{
setScript(e.target.files[0].name)
}
const uploadAudioHandler=(e)=>{
    let file=e.target.files
    const fileName=file[0].name
    let date=todayDate()
    setAudio([fileName,date])
    // afterUpload('AUDIO',file[0])
     }
     const uploadMultiFileHandler=(e)=>{
    let files=e.target.files
    for(let i=0;i<files.length; i++) {
    multifiles.push(files[i].name)
    }
    console.log(multifiles)
    // afterUpload('OTHER',files)
     }
let scriptFileData=(
    <Row>
   <Col md={6}>
   <Card style={{ height: '100px', marginBottom: '20px' }}>
     <Dropzone onDrop={onDropScript}
        accept='.docx,.pdf'
       maxFiles={1}
       multiple={false}
     >
       {({ getRootProps, getInputProps, isDragActive,isDragReject }) =>
       (
         <section >
           <div {...getRootProps()}>
             <input {...getInputProps()} />
             {!isDragActive && 'Drag & Drop Your SCRIPT File Here'}
             {isDragReject && 'Select proper file type'}
             <br />
           </div>
           {script}
         </section>
       )}
     </Dropzone>
     <FaFileAlt style={{ color: '#007acc', fontSize: '50px', margin: '10px' }} />
   </Card>
 </Col>
 <Col md={6}>
   <Row >
     <h5 >OR</h5>
     <Input type='file' id='script' style={{display:'none',name:'UPLOAD'}} accept='.pdf,.doc,.docx' 
     onChange={uploadScriptHandler}  />
     <Button  color='black'  style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', marginLeft: '30px' }}
    onClick={scriptFile} >UPLOAD</Button>
   </Row>
 </Col>
 </Row>
  )
  let audioFileData=(
    <Row>
    <Col md={6}>
      <Card style={{ height: '100px', marginBottom: '20px' }}>
        <Dropzone onDrop={onDropAudio}
           accept='.audio,.mp3'
          maxFiles={1}
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive,isDragReject }) =>
          (
            <section >
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {!isDragActive && 'Drag & Drop Your AUDIO File Here'}
                {isDragReject && "Select only one file!"}
                <br />
              </div>
              {audio}
            </section>
          )}
        </Dropzone>
        <BsFillMicFill style={{ color: '#007acc', fontSize: '60px', margin: '10px' }} />
      </Card>
    </Col>
    <Col md={6}>
      <Row >
        <h5 >OR</h5>
        <Input type='file' id='voice' style={{display:'none'}} accept='audio/*'
         onChange={uploadAudioHandler} />
        <Button color='black' style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', marginLeft: '30px' }} 
        onClick={voiceFile}>UPLOAD</Button>
      </Row>
    </Col>
  </Row>
   ) 
   let multiple=(
    <table>
                  <thead>
                    <tr>
                      <th>File Name</th>
                      <th>File Upload By</th>
                      <th>File Upload Date</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {sdate=new Date()} */}
                  {/* { `${sdate.getDate()}-${monthNames[sdate.getMonth()]}-${sdate.getFullYear()}` }                 */}
                  {campaignDetails.multipleFileData.map((i)=>{
                   return( <tr key={i.id}>
                      <td>{i.assetOrignalName }</td>
                      <td>{<strong>{i.uploadedByPerson.firstName+' '+i.uploadedByPerson.lastName}</strong>}</td>
                      <td> {  i.updatedAt} </td>
                      <td>download</td>
                    </tr>)
                  })}
                  </tbody>
                </table>
     ) 
     let sdate
     if(campaignDetails.scriptFileData!==null){
      sdate=new Date(campaignDetails.scriptFileData.updatedAt)       
     }
     let vdate
     if(campaignDetails.audioFileData!==null){
      vdate=new Date(campaignDetails.audioFileData.updatedAt)       
     }
    return(
        <div>
          <div className=" justify-content-center align-items-center w-100 h-100 flex-column mx-0 px-3">
        <Row>
            <Col md={3}> Advertiser </Col>
            <Col md={3}> Order Name </Col>
            <Col md={3}> Order Number </Col>
            <Col md={3}> Sales Organization </Col>
        </Row>
        <Row>
            <Col md={3}> {campaignDetails.advertiser} </Col>
            <Col md={3}> {campaignDetails.orderName}</Col>
            <Col md={3}> {campaignDetails.orderNumber} </Col>
            <Col md={3}> {campaignDetails.salesOrganization} </Col>

        </Row>
      
        <div className="w-100 mt-100 mx-auto" style={{ maxWidth: '1200px', maxHeight: '800px'}}>
        <div className="bg-white  p-4">
        <Row>
            <Col md={3}> Status </Col>
            <Col md={3}> Action Required By </Col>
            <Col md={3}> Action Due By </Col>
            <Col md={3}> <BiHistory style={{fontSize:'25px'}} /> </Col>
        </Row>
        <Row style={{fontWeight:'bold'}}>
            <Col md={3}> Advertiser assets required </Col>
            <Col md={3}>{campaignDetails.actionRequiredBy}</Col>
            <Col md={3}> Invalid date </Col>
            {/* <Col md={3}>  </Col> */}
        </Row>
        <hr/>
        <Row >Information</Row>
        <hr/>
        <Row>
            <Col md={4} style={{background:'#b6e3db',marginRight:'10px'}}>Account Manager Assigned </Col>
            <Col md={4}  style={{background:'#b6e3db'}}>Distribution Partner Company Assigned</Col>
            <Col md={4}> </Col>
        </Row>
        <Row  style={{marginBottom:'20px'}}> 
            <Col md={4} >Hiral Baraiya </Col>
            <Col md={4} >Not Yet Assigned</Col>
            <Col md={4}> </Col>
        </Row>
        <Row>
            <Col md={4} style={{background:'#b6e3db',marginRight:'10px'}}>Sales Person Assigned </Col>
            <Col md={4}  style={{background:'#b6e3db'}}>Graphic Designer Assigned</Col>
            <Col md={4}> </Col>
        </Row>
        <Row  style={{marginBottom:'27px'}}> 
            <Col md={4} >Hiral Baraiya </Col>
            <Col md={4} >Not Yet Assigned</Col>
            <Col md={4}> </Col>
        </Row>
        <Row>Production Progress</Row>
        <hr/>
        <Row style={{margin:'20px'}} >Advertiser Assets Required</Row>
        <Row  style={{color:'blue',marginLeft:'10px'}}><FaDownload style={{margin:'4px'}}/> Download All Assets</Row>
        <Alert color="info" style={{ textAlign: 'left' }} >
              Script File
                     </Alert>
        { campaignDetails.scriptFileData!==null?
              <div style={{background:'#b5faac'}}>
              <Row>    
               <Col md={2}>
             <FaFileAlt style={{ color: '#007acc', fontSize: '50px', margin: '10px' }} />
             </Col> 
             <Col md={2}>
              <h5>File Name :</h5><br/>
            {campaignDetails.scriptFileData.assetOrignalName}
             </Col>
             <Col md={4}>
             <h5>File Upload by :</h5><br/>
             {campaignDetails.scriptFileData.uploadedByPerson.firstName + ' ' + campaignDetails.scriptFileData.uploadedByPerson.lastName}
             </Col>
             <Col md={4}> 
             <h5>Upload Date:</h5><br/>   
             { `${sdate.getDate()}-${monthNames[sdate.getMonth()]}-${sdate.getFullYear()}` }                
             </Col>
           </Row>
                </div> 
                :scriptFileData}
         <Alert color="info" style={{ textAlign: 'left' ,marginTop:'10px'}} >
              Voice File
                     </Alert>
            {campaignDetails.audioFileData!==null?
             <div style={{background:'#b5faac'}}>
             <Row>    
              <Col md={2}>
              <BsFillMicFill style={{ color: '#007acc', fontSize: '60px', margin: '10px' }} />
            </Col> 
            <Col md={2}>
             <h5>File Name :</h5><br/>
             {campaignDetails.audioFileData.assetOrignalName}
            </Col>
            <Col md={4}>
            <h5>File Upload by :</h5><br/>
            {campaignDetails.audioFileData.uploadedByPerson.firstName + ' ' + campaignDetails.audioFileData.uploadedByPerson.lastName}
            </Col>
            <Col md={4}>
            <h5>Upload Date:</h5><br/>
            { `${vdate.getDate()}-${monthNames[vdate.getMonth()]}-${vdate.getFullYear()}` }                
            </Col>
          </Row>
               </div> 
            :audioFileData}
               <Alert color="info" style={{ textAlign: 'left',marginTop:'10px' }} >
              Advertiser Assets
                     </Alert>
            <Row>
              <Col md={6}>
                <Card style={{ height: '100px', marginBottom: '20px' }}>
                  <Dropzone onDrop={onDropMultiFile}
                    multiple
                  >
                    {({ getRootProps, getInputProps, isDragActive }) =>
                    (
                      <section >
                        <div {...getRootProps()} >
                          <input {...getInputProps()} />
                          {!isDragActive && 'Drag & Drop Your  File Here'}
                          <br />
                        </div>
                        {multifiles}
                      </section>
                    )}
                  </Dropzone>
                  <RiFileCopyLine style={{ color: '#007acc', fontSize: '60px', margin: '10px' }} />
                </Card>
              </Col>
              <Col md={6}>
                <Row >
                  <h5 >OR</h5>
                  <Input type='file' id='multi' style={{display:'none'}} multiple 
                   onChange={uploadMultiFileHandler}/>
                  <Button color='black' style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', marginLeft: '30px' }} 
                  onClick={multipleFile}>UPLOAD</Button>
                </Row>
              </Col>
            </Row>
            {campaignDetails.multipleFileData!==null?
            multiple
            :null}
            <Row  style={{marginTop:'10px'}} >Order</Row>
            <hr/>
            <Row style={{fontWeight:'bold'}} >Description</Row>
            <Row>{campaignDetails.description}</Row>
            <Row style={{marginLeft:'0px'}}>
                <Col md={4} style={{fontWeight:'bold'}}>
                    Preffered Landing Website URL
                </Col>
                <Col md={4} style={{fontWeight:'bold'}}>
                   Distribution Budget
                </Col>
            </Row>
            <Row style={{marginLeft:'0px',marginBottom:'25px'}}>
                <Col md={4} >
                    {campaignDetails.landingWebsiteURL}
                </Col>
                <Col md={4} >
                  {campaignDetails.distributionBudget}
                </Col>
            </Row>
            <Row style={{marginLeft:'0px'}}>
                <Col md={4} style={{fontWeight:'bold'}}>
                   Target Market
                </Col>
                <Col md={4} style={{fontWeight:'bold'}}>
                   Industry Category
                </Col>
                <Col md={4} style={{fontWeight:'bold'}}>
                   Order Dates
                </Col>
            </Row>
            <Row style={{marginLeft:'0px',marginBottom:'25px'}}>
                <Col md={4} >
                   {campaignDetails.targetMarket}
                </Col>
                <Col md={4} >
                  {campaignDetails.industryCategory}
                </Col>
                <Col md={4} >
                 Not selected
                </Col>
            </Row>
            </div>
            <Row>          
        <Col md={3}>
        <Button  color="primary" style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',margin:'10px'}}
        >  Download All Assets</Button>
        </Col> 
         <Col md={5}>
        </Col>
        <Col md={4}>
        <Button color="primary" style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',margin:'10px'}}
          >Edit</Button>
          <Button color="back"  style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',margin:'10px'}}
           >Back  </Button>
        </Col>
    </Row> 
            </div>
       
            </div>  
       
            </div> 
    )
}
export default CampaignDetail;