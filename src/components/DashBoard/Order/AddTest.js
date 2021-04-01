import Dropzone from "react-dropzone"
import { Form, Row, Alert, Col, Button, Card,Input} from "reactstrap";
import { FaBackward, FaFileAlt } from 'react-icons/fa';
import { RiFileCopyLine } from 'react-icons/ri';
import { BsFillMicFill } from 'react-icons/bs'
import CustomStepper from './Stepper/CustomStepper';

const AddTest = (props) => {
  const {script,setScript,audio,setAudio,multifiles,setmultifiles} =props;
    const onDropScipt = (file) => {
    const fileName = file.map(f => f.name)
    setScript(fileName)
  }
  const onDropAudio = (file) => {
    const fileName = file.map(f => f.name)
    setAudio(fileName)
  }
  const onDropFile = (file) => {
    const files = file.map(f => <li>{f.name}</li>)
    setmultifiles(files)
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
 let sdata
 const uploadScriptHandler=(e)=>{
  
   let file=e.target.files
   const name=file[0].name
   const date=file[0].lastModifiedDate
 
  //  console.log(name+' '+date)
 }
 const uploadHandler=()=>{

 }
 let scriptFileData=(
   <Row>
  <Col md={6}>
  <Card style={{ height: '100px', marginBottom: '20px' }}>
    <Dropzone onDrop={onDropScipt}
       accept='.docx,.pdf'
      maxFiles={1}
    >
      {({ getRootProps, getInputProps, isDragActive,isDragReject }) =>
      (
        <section >
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {!isDragActive && 'Drag & Drop Your SCRIPT File Here'}
            {isDragReject && "Select only one file!"}
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
    onChange={uploadScriptHandler}/>
    <Button  color='black'  style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', marginLeft: '30px' }}
   onClick={scriptFile} >UPLOAD</Button>
  </Row>
</Col>
</Row>
 )

  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100 flex-column mx-0 px-3" style={{ background: '#F2F5F9' }}>
      <div className="w-100 mt-100 mx-auto" style={{ maxWidth: '1200px', maxHeight: '800px', marginTop: '5vh' }}>
      <CustomStepper activeStep={props.step} />
        <h4 style={{ textAlign: 'left' }}>Test</h4>
        <div className="bg-white shadow p-4" style={{ borderRadius: '20px' }}>
          <Form>
            <Alert color="info" style={{ textAlign: 'left' }} >
              Script File
                     </Alert>

             {
            //  sdata?
            //  <Row>
               
            //      <Col md={2}>
            //    <FaFileAlt style={{ color: '#007acc', fontSize: '50px', margin: '10px' }} />
            //    </Col> 
            //    <Col md={2}>
            //     <h5>File Name :</h5><br/>
            //    {/* { sdata.file[0].name} */}
            //    </Col>
            //    <Col md={4}>
            //    <h5>File Upload by :</h5><br/>
            //    Johnny Depp
            //    </Col>
            //    <Col md={4}>
            //    <h5>Upload Date:</h5><br/>
            //    {/* {sdata.file[0].lastModifiedDate} */}
            //    </Col>
            //  </Row>
            // :scriptFileData
            }
              {scriptFileData}
            <Alert color="info" style={{ textAlign: 'left' }} >
              Voice File
                     </Alert>
            <Row>
              <Col md={6}>
                <Card style={{ height: '100px', marginBottom: '20px' }}>
                  <Dropzone onDrop={onDropAudio}
                     accept='.audio'
                    maxFiles={1}
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
                   onChange={uploadHandler} />
                  <Button color='black' style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', marginLeft: '30px' }} 
                  onClick={voiceFile}>UPLOAD</Button>
                </Row>
              </Col>
            </Row>
            <Alert color="info" style={{ textAlign: 'left' }} >
              Advertiser Assets
                     </Alert>
            <Row>
              <Col md={6}>
                <Card style={{ height: '100px', marginBottom: '20px' }}>
                  <Dropzone onDrop={onDropFile}
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
                   onChange={uploadHandler}/>
                  <Button color='black' style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', marginLeft: '30px' }} 
                  onClick={multipleFile}>UPLOAD</Button>
                </Row>
              </Col>
            </Row>
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
  )
}
export default AddTest