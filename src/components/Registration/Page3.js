import Dropzone from "react-dropzone"
import {Form,Row,Alert,Col,Button,Card} from "reactstrap";
import {FaBackward,FaFileAlt} from 'react-icons/fa';
import {RiFileCopyLine} from 'react-icons/ri';
import {BsFillMicFill} from 'react-icons/bs'


const Page3=(props)=>{
 const   onDrop=(files)=>{
        console.log(files)
      }
    return(
        <div className="d-flex justify-content-center align-items-center w-100 h-100 flex-column mx-0 px-3" style={{background:'#F2F5F9'}}>
      <div className="w-100 mt-100 mx-auto" style={{maxWidth:'1200px',maxHeight:'800px',marginTop:'5vh'}}>
      <h4 style={{textAlign:'left'}}>Test</h4>
          <div className="bg-white shadow p-4" style={{borderRadius:'20px'}}>
                     <Form>     
                     <Alert color="info" style={{textAlign:'left'}} >
                         Script File
                     </Alert>
                     <Row>
                         <Col md={6}> 
                    <Card style={{height:'100px',marginBottom:'20px'}}>
                   <Dropzone  onDrop={onDrop}
                   accept='doc,pdf'
                   >
                   {({getRootProps, getInputProps,isDragActive}) =>
          (
            <section >
              <div {...getRootProps()} className='main'>
                <input {...getInputProps()} />  
                {!isDragActive && 'Drag & Drop Your SCRIPT File Here'}
                <br/>
              </div>           
            </section>
          )}
                   </Dropzone>
                  <FaFileAlt style={{color:'#007acc',fontSize  :'50px',margin:'10px'}} />
                   </Card>         
                   </Col>
                    <Col md={6}> 
                    <Row >
                    <h5 >OR</h5> 
                     <Button  color='black' style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',marginLeft:'30px'}} >UPLOAD</Button>
                    </Row>             
                    </Col>
                   </Row>
                     <Alert color="info" style={{textAlign:'left'}} >
                         Voice File
                     </Alert>
                     <Row>
                   <Col md={6}>  
                  <Card style={{height:'100px',marginBottom:'20px'}}>  
                   <Dropzone  onDrop={onDrop}
                   accept='audio'
                   >
                   {({getRootProps, getInputProps,isDragActive}) =>
          (
            <section >
              <div {...getRootProps()} className='main'>
                <input {...getInputProps()} />  
                {!isDragActive && 'Drag & Drop Your AUDIO File Here'}
                <br/>
              </div>           
            </section>
          )}
                   </Dropzone> 
                   <BsFillMicFill style={{color:'#007acc',fontSize  :'60px',margin:'10px'}}  />
                   </Card>         
                   </Col>
                    <Col md={6}> 
                    <Row >
                    <h5 >OR</h5> 
                     <Button  color='black' style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',marginLeft:'30px'}} >UPLOAD</Button>
                    </Row>             
                    </Col>
                   </Row>
                     <Alert color="info" style={{textAlign:'left'}} >
                         Advertiser Assets
                     </Alert>
                     <Row>
                         <Col md={6}> 
                         <Card style={{height:'100px',marginBottom:'20px'}}>   
                   <Dropzone  onDrop={onDrop}
                   >
                   {({getRootProps, getInputProps,isDragActive}) =>
          (
            <section >
              <div {...getRootProps()} className='main'>
                <input {...getInputProps()} />  
                {!isDragActive && 'Drag & Drop Your  File Here'}
                <br/>
              </div>           
            </section>
          )}
                   </Dropzone> 
                    <RiFileCopyLine style={{color:'#007acc',fontSize  :'60px',margin:'10px'}} />
                   </Card>        
                   </Col>
                    <Col md={6}> 
                    <Row >
                    <h5 >OR</h5> 
                     <Button  color='black' style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',marginLeft:'30px'}} >UPLOAD</Button>
                    </Row>             
                    </Col>
                   </Row>
                     </Form>
                
                     <Row>
                         <Col md={2}>
                         <Button  color="primary" style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',margin:'10px'}}
                         onClick={props.prevStep}
                         ><FaBackward/>  Back  </Button> 
                         </Col>
                         <Col md={7}>
                         </Col>
                         <Col md={3}>
                         <Button color="black" style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',margin:'10px'}}>Cancle</Button>
                         <Button color="primary"  style={{boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',margin:'10px'}}
                        
                         >Done</Button>
                         </Col>
                     </Row>
        </div></div></div>
    )
}
export default Page3