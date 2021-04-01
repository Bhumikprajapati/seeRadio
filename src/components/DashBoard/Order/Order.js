import { useState } from "react/cjs/react.development";
import AddAdvertiser from "./AddAdvertiser";
import AddNewOrder from "./AddNewOrder";
import AddTest from "./AddTest";
const Order=()=>{
    const [PageOne, setPageOne] = useState({
        companyName: '',
        website: '',
        industryCategory: 'Arts & Entertainment',
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
        country: 'India',
        state: 'India',
        postal: '',
        address2: '',
        addressLine22: '',
        city2: '',
        country2: 'India',
        state2: 'India',
        postal2: ''
      })
      const [PageTwo,setPageTwo]=useState({
        advertiser:'Test bacancy',
        title:'',
        landingUrl:'',
        price:'',
        description:'',
        targetMarket:'Calgary',
        budget:''
      })
      const [script, setScript] = useState('')
  const [audio, setAudio] = useState('')
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