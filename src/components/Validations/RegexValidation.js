
const RegexValidation=(name,value)=>{
 
if(name==='companyName' ||'title'||'website'||'firstName'||'lastName'||'address'||'city' 
    ||'landingUrl'||'description' )
    {
  return value.trim()!==''  
}
// if(name==='website'){
//   return value.trim()!==''  
// }
// if(name==='firstName'){
//   return value.trim()!==''  
// }
// if(name==='lastName'){
//   return value.trim()!==''  
// }
// if(name==='address'){
//   return value.trim()!==''  
// }
// if(name==='city'){
//   return value.trim()!==''  
// }
// console.log(name)
if(name==='addressLine2')
{
  return true  
}
if(name==='postal')
{
  const pattern=/[0-9]{5}$/
  return pattern.test(value) 
}
if(name==='email')
{ 
  console.log('in email')
    const pattern=/^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]){2,7}$/
    return pattern.test(value)

}
if(name==='password')
{
    const pattern=/^[a-zA-Z0-9]{3,8}$/
    return pattern.test(value)
}
if(name==='phone')
{
  const pattern=/^([+]\d{2})?\d{10}$/
  return  pattern.test(value)
} 
if (name==='price')
{
  const pattern=/^[0-9]+$/
return !pattern.test(value)
}

}
export default RegexValidation;