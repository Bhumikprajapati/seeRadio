import Dropzone from "react-dropzone"
import { Form, Row, Alert, Col, Button, Card,Input} from "reactstrap";
import { FaBackward, FaFileAlt } from 'react-icons/fa';
import { RiFileCopyLine } from 'react-icons/ri';
import { BsFillMicFill } from 'react-icons/bs'
import CustomStepper from './Stepper/CustomStepper';
import {  useState } from "react/cjs/react.development";
import axios from "axios";
const todayDate=()=>{
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]
  let today=new Date()
  const month=today.getMonth()
  const date=`${today.getDate()}-${monthNames[month]}-${today.getFullYear()}`
  return date
} 
const AddTest = (props) => {
  const url=process.env.REACT_APP_URL;
  const {script,setScript,audio,setAudio,multifiles} =props;
  const [scriptFlag,setScriptFlag]=useState(false)
  const [audioFlag,setAudioFlag]=useState(false)
  const [multiFileFlag,setMultiFileFlag]=useState(false)
  const afterUpload=(type,file)=>{
    const OrderData=JSON.parse(localStorage.getItem('OrderData'))
    const campaignID=OrderData.history.campaignID
    const loginID=localStorage.getItem('loginId')
    const clientData=JSON.parse(localStorage.getItem('clientData'))
    const clientID=clientData.salesOrgCompany.clientPersonID
    // const token=
    // console.log('campaign  '+campaignID+' loginID  '+loginID+' type '+type+' file '+JSON.stringify(file))
    let formData=new FormData();
    if(type==='OTHER')
    {
      for(const f of file)
      {
        formData.append("file",f)
      }
    }
    else{
      formData.append("file",file);
    }
 
    formData.append("campaignID",campaignID);
    formData.append("type",type);
    formData.append("uploadedBy",loginID);
    formData.append("clientID",clientID)
    console.log('pass data'+JSON.stringify(formData))
    const headers={
      'x-token':localStorage.getItem('token')
    }
      // axios.post(`${url}/api/campaign/upload`,formData,{headers:headers})
      // .then(res=>{
      //   console.log(res)
      //   console.log(res.data.data.data[0].assetUrl)
      // })
      // .catch(err=>console.error(err))
  }
  const onDropScipt = (file) => {
    const fileName = file[0].name
    console.log(file[0])    
   let date=todayDate()
    setScript([fileName,date])
    afterUpload('SCRIPT',file[0])
    setScriptFlag(true)
  }
  const onDropAudio = (file) => {
    const fileName = file[0].name
    let date=todayDate()
    setAudio([fileName,date])
    afterUpload('AUDIO',file[0])
    setAudioFlag(true)
  }
  const onDropMultiFile = (file) => {
    const files = file
    for(let i=0;i<files.length; i++) {
      multifiles.push(files[i].name)
      }
      
      console.log(files)
      afterUpload('OTHER',files)
      setMultiFileFlag(true)
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
   let file=e.target.files
   const fileName=file[0].name
  let date=todayDate()
   setScript([fileName,date])
   afterUpload('SCRIPT',file[0])
  setScriptFlag(true)

 }
 const uploadAudioHandler=(e)=>{
let file=e.target.files
const fileName=file[0].name
// console.log('Files button'+)
let date=todayDate()
setAudio([fileName,date])
afterUpload('AUDIO',file[0])
setAudioFlag(true)
 }
 const uploadMultiFileHandler=(e)=>{
let files=e.target.files

// const date=todayDate()
// console.log(files)
for(let i=0;i<files.length; i++) {
multifiles.push(files[i].name)
}
console.log(multifiles)
afterUpload('OTHER',files)
setMultiFileFlag(true)
 }
 let scriptFileData=(
   <Row>
  <Col md={6}>
  <Card style={{ height: '100px', marginBottom: '20px' }}>
    <Dropzone onDrop={onDropScipt}
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
 let multipleFilesData=(
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
              {multifiles.map((index)=>{
               return( <tr key={index}>
                  <td>{index }</td>
                  <td>{<strong>Bmp</strong>}</td>
                  <td> {todayDate()} </td>
                  <td>download</td>
                </tr>)
              })}
              </tbody>
            </table>
 )
  return (
    <div>
    <div className="d-flex justify-content-center align-items-center w-100 h-100 flex-column mx-0 px-3" style={{ background: '#F2F5F9' }}>
      <div className="w-100 mt-100 mx-auto" style={{ maxWidth: '1200px', maxHeight: '800px', marginTop: '5vh' }}>
      <CustomStepper activeStep={props.step} />
        <h4 style={{ textAlign: 'left' }}>Test</h4>
        <div className="bg-white shadow p-4" style={{ borderRadius: '20px' }}>
          <Form>
            
            <Alert color="info" style={{ textAlign: 'left' }} >
              Script File
                     </Alert>
              { scriptFlag?
              <div style={{background:'#b5faac'}}>
              <Row>    
               <Col md={2}>
             <FaFileAlt style={{ color: '#007acc', fontSize: '50px', margin: '10px' }} />
             </Col> 
             <Col md={2}>
              <h5>File Name :</h5><br/>
            {script[0]}
             </Col>
             <Col md={4}>
             <h5>File Upload by :</h5><br/>
              bmp
             </Col>
             <Col md={4}>
             <h5>Upload Date:</h5><br/>
             {script[1]}
             </Col>
           </Row>
                </div> 
                :scriptFileData}
            <Alert color="info" style={{ textAlign: 'left' }} >
              Voice File
                     </Alert>
            {audioFlag?
             <div style={{background:'#b5faac'}}>
             <Row>    
              <Col md={2}>
              <BsFillMicFill style={{ color: '#007acc', fontSize: '60px', margin: '10px' }} />
            </Col> 
            <Col md={2}>
             <h5>File Name :</h5><br/>
           {audio[0]}
            </Col>
            <Col md={4}>
            <h5>File Upload by :</h5><br/>
             bmp
            </Col>
            <Col md={4}>
            <h5>Upload Date:</h5><br/>
            {audio[1]}
            </Col>
          </Row>
               </div> 
            :audioFileData}
            <Alert color="info" style={{ textAlign: 'left' }} >
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
            {multiFileFlag?
            multipleFilesData
            :null}
          </Form>

          <Row>
            <Col md={2}>
              <Button color="primary" style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', margin: '10px' }}
                onClick={props.prevStep}
              ><FaBackward />  Back  </Button>
            </Col>
            <Col md={7}>
            </Col>
            <Col md={3}>
              <Button color="black" style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', margin: '10px' }}
              onClick={props.resetStep} >Cancle</Button>
              <Button color="primary" style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', margin: '10px' }}

              >Done</Button>
            </Col>
          </Row>
        </div></div></div>
        </div>
  )
}
export default AddTest