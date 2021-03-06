import Dropzone from "react-dropzone";
import { Form, Row, Alert, Col, Button, Card,Input} from "reactstrap";
import { FaBackward, FaFileAlt,FaDownload } from 'react-icons/fa';
import { RiFileCopyLine } from 'react-icons/ri';
import { BsFillMicFill } from 'react-icons/bs'
import CustomStepper from './Stepper/CustomStepper';
import {  useState } from "react/cjs/react.development";
import { addFile } from "../../../ApiCalls/Api";
import { useHistory } from "react-router";
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
  const {script,setScript,audio,setAudio,multifiles} =props;
  const [scriptFlag,setScriptFlag]=useState(false)
  const [audioFlag,setAudioFlag]=useState(false)
  const [multiFileFlag,setMultiFileFlag]=useState(false)
  const history=useHistory();
  const afterUpload=(type,file)=>{
    const OrderData=JSON.parse(localStorage.getItem('OrderData'))
    const campaignID=OrderData.history.campaignID
    const loginID=localStorage.getItem('loginId')
    const clientData=JSON.parse(localStorage.getItem('clientData'))
    const clientID=clientData.salesOrgCompany.clientPersonID
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
     addFile(formData)
      .then(res=>{
        console.log(res)
        if(res.data[0].type==='SCRIPT')
        {
          const script=res.data[0]
          setScript(script)
        }
        if(res.data[0].type==='AUDIO')
        {
          const audio=res.data[0]
          setAudio(audio)
        }
        if(res.data[0].type==='OTHER')
        {
          const data=res.data
          // const multiUrl=[]
          for(let index in data)
          {
            multifiles.push(data[index])
          }
        }

      })
      .catch(err=>console.error(err))
  }
  console.log(multifiles)
  const onDropScript = (file) => {
    // const fileName = file[0].name
    // console.log(file[0])    
  //  let date=todayDate()
    // setScript([fileName,date])
    afterUpload('SCRIPT',file[0])
    setScriptFlag(true)
  }
  const onDropAudio = (file) => {
    // const fileName = file[0].name
    // let date=todayDate()
    // setAudio([fileName,date])
    afterUpload('AUDIO',file[0])
    setAudioFlag(true)
  }
  const onDropMultiFile = (file) => {
    const files = file
    // for(let i=0;i<files.length; i++) {
    //   multifiles.push(files[i].name)
    //   } 
    //   console.log(files)
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
  //  const fileName=file[0].name
  // let date=todayDate()
  //  setScript([fileName,date])
   afterUpload('SCRIPT',file[0])
  setScriptFlag(true)
 }
 const uploadAudioHandler=(e)=>{
let file=e.target.files
// const fileName=file[0].name
// console.log('Files button'+)
// let date=todayDate()
// setAudio([fileName,date])
afterUpload('AUDIO',file[0])
setAudioFlag(true)
 }
 const uploadMultiFileHandler=(e)=>{
let files=e.target.files

// const date=todayDate()
// console.log(files)
// for(let i=0;i<files.length; i++) {
// multifiles.push(files[i].name)
// }
// console.log(multifiles)
afterUpload('OTHER',files)
setMultiFileFlag(true)
 }
 let scriptFileData=(
   <div>
 {/* <Alert color="info" style={{ textAlign: 'left' }} >
 Script File
 </Alert> */}
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
</div>

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
               return( <tr key={index.id}>
                  <td>{index.assetOrignalName }</td>
                  <td>{<strong>Bmp</strong>}</td>
                  <td> {todayDate()} </td>
                  <td><FaDownload style={{color:'blue',margin:'2px'}}/><Button  color='primary' style={{fontSize:'12px'}} onClick={()=>window.open(index.assetUrl,'_blank')} >Download</Button></td>
                </tr>)
              })}
              </tbody>
            </table>
 )
  return (
    <div>
    <div className="d-flex justify-content-center align-items-center w-100 h-100 flex-column mx-0 px-3" style={{ background: '#F2F5F9' }}>
      <div className="w-100 mt-100 mx-auto" style={{ maxWidth: '1200px', maxHeight: '800px'}}>
      <CustomStepper activeStep={props.step} />
        <h4 style={{ textAlign: 'left' }}>Test</h4>
        <div className="bg-white shadow p-4" style={{ borderRadius: '20px' }}>
          <Form>
          <Alert color="info" style={{ textAlign: 'left' ,display:'flex'}} >
              Script File { scriptFlag?<div><FaDownload style={{margin:'10px',color:'blue'}}/>
              <Button color='primary' style={{fontSize:'12px'}} onClick={()=>window.open(script.assetUrl,'_blank')} >Download</Button></div>:null}
                     </Alert>
              { scriptFlag?
              <div style={{background:'#b5faac'}}>
               
              <Row>    
               <Col md={2}>
             <FaFileAlt style={{ color: '#007acc', fontSize: '50px', margin: '10px' }} />
             </Col> 
             <Col md={2}>
              <h5>File Name :</h5><br/>
            {script.assetOrignalName}
             </Col>
             <Col md={4}>
             <h5>File Upload by :</h5><br/>
            {/* { personName[script.uploadedBy]} */}
            bmp
             </Col>
             <Col md={4}>
             <h5>Upload Date:</h5><br/>
             {todayDate()}
             </Col>
           </Row>
                </div> 
                :scriptFileData}
            <Alert color="info" style={{ textAlign: 'left' ,display:'flex'}} >
              Voice File {audioFlag?
              <div>
              <FaDownload style={{margin:'8px',color:'blue'}}/>
              <Button color='primary'style={{fontSize:'12px'}} onClick={()=>window.open(audio.assetUrl,'_blank')} >Download</Button>
              </div>:null}
                     </Alert>
            {audioFlag?
             <div style={{background:'#b5faac'}}>
             <Row>    
              <Col md={2}>
              <BsFillMicFill style={{ color: '#007acc', fontSize: '60px', margin: '10px' }} />
            </Col> 
            <Col md={2}>
             <h5>File Name :</h5><br/>
           {audio.assetOrignalName}
            </Col>
            <Col md={4}>
            <h5>File Upload by :</h5><br/>
             bmp
            </Col>
            <Col md={4}>
            <h5>Upload Date:</h5><br/>
            {todayDate()}
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
                onClick={()=>history.replace('/dashBoard')}
              >Done</Button>
            </Col>
          </Row>
        </div></div></div>
        </div>
  )
}
export default AddTest