
const RegexValidation=(name,value)=>{
if(name==='companyName' ||name==='website'||name==='firstName'||name==='lastName'||name==='address'||name==='address2'
||name==='city'||name==='city2'  ||name==='landingUrl'||name==='description'||name==='title'
||name==='email'||name==='password' )
    {
  return value.trim()!==''  
}
if(name==='industryCategory'||name==='country'||name==='state'
||name==='country2'||name==='state2'||name==='addressLine2' ||name==='addressLine22'){
  return true
}
if(name==='postal'||name==='postal2')
{
  const pattern=/[0-9]{5}$/
  return pattern.test(value) 
}
// if(name==='email')
// { 
//     const pattern=/^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]){2,7}$/
//     return pattern.test(value)
// }
if(name==='currentPass'||name==='newPass'||name==='confirmNewPass')
{
    const pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return pattern.test(value)
}
if(name==='phone')
{
  const pattern=/^([+]\d{2})?\d{10}$/
  return  pattern.test(value)
} 
if (name==='price'||name==='budget')
{
  const pattern=/^[0-9]+$/
return pattern.test(value)
}

}
export default RegexValidation;