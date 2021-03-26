import { useState } from "react/cjs/react.development";
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
const Registration=()=>{

    const [step,setStep]=useState(1)
   const nextStep=()=>{
       setStep(prevStep=>prevStep+1)
   }
   const prevStep=()=>{
    setStep(prevStep=>prevStep-1)
}
       switch (step) {
           case 1:
             return  (
             <Page1 
             nextStep={nextStep}
             />
             ) 
           case 2:
                return  (
                <Page2 
                nextStep={nextStep}
                prevStep={prevStep}
                />
                ) 
            case 3:
                 return  (
                 <Page3 
                 nextStep={nextStep}
                 prevStep={prevStep}
                />
                  )             
           default:
               return 1;
       }

}
export default Registration;