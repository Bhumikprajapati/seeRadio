import { useEffect, useState } from "react/cjs/react.development";
import AddAdvertiser from "./AddAdvertiser";
import AddNewOrder from "./AddNewOrder";
import AddTest from "./AddTest";
const Order=()=>{
 useEffect(()=>{
  document.body.style = 'background: #F2F5F9;'
 },[])
    const [PageOne, setPageOne] = useState({
        companyName: '',
        website: '',
        industryCategory: 'Sports',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        firstName2: '',
        lastName2: '',
        email2: '',
        phone2: '',
        address: '',
        addressLine2: '',
        city: '',
        country:'CA',
        state: 'AB',
        postal: '',
        address2: '',
        addressLine22: '',
        city2: '',
        country2: 'CA',
        state2: 'AB',
        postal2: ''
      })
      const [PageTwo,setPageTwo]=useState({
        advertiser:'ADCOMSAM',
        title:'',
        landingUrl:'',
        price:'',
        description:'',
        targetMarket:'',
        budget:''
      })
      const [script, setScript] = useState([])
  const [audio, setAudio] = useState([])
  const [multifiles, setmultifiles] = useState([])
    const [step,setStep]=useState(1)
   const nextStep=()=>{
    
       setStep(prevStep=>prevStep+1)
   }
   const prevStep=()=>{
    setStep(prevStep=>prevStep-1)
}
const resetStep=(e)=>{
    e.preventDefault()
    setStep(1)
}
       switch (step) {
           case 1:
             return  (
             <AddAdvertiser 
             PageOne={PageOne}
             setPageOne={setPageOne}
             step={step}
             nextStep={nextStep}
             resetStep={resetStep}
             />
             ) 
           case 2:
                return  (
                <AddNewOrder 
                PageTwo={PageTwo}
                setPageTwo={setPageTwo}
                step={step}
                nextStep={nextStep}
                prevStep={prevStep}
                resetStep={resetStep}
                />
                ) 
            case 3:
                 return  (
                 <AddTest 
                 script={script}
                 setScript={setScript}
                 multifiles={multifiles}
                 setmultifiles={setmultifiles}
                 audio={audio}
                 setAudio={setAudio}
                 step={step}
                 nextStep={nextStep}
                 prevStep={prevStep}
                 resetStep={resetStep}
                />
                  )             
           default:
               return 1;
       }

}
export default Order;