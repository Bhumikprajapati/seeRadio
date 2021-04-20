import axios from 'axios';
const BaseUrl=process.env.REACT_APP_URL;
const token=localStorage.getItem('token')
export const handleError=(err)=>{
 throw err
}

export const publicGet=(url)=>{
 return axios.get(BaseUrl+url)
 .then(res=>res.data.data)
 .catch(err=> handleError(err))
}

export const getWithHeader=(url)=>{
    return axios.get(BaseUrl+url,{headers:
    {'x-token':token}})
    .then(res=>res.data.data)
    .catch(err=>handleError(err))
  
}
console.log(token)
export const post=(url,payload)=>{
    return axios.post(BaseUrl+url,payload)
    .then(res=>res.data.data)
    .catch(err=>handleError(err))
}
export const postWithHeader=(url,payload)=>{
    return axios.post(BaseUrl+url,payload,
        {
        headers:{'x-token':token,
          'Content-Type':'application/json'}})
         .then(res=>res.data.data)
         .catch(err=>handleError(err))
}
export const postWithToken=(url,payload)=>{
    return axios.post(BaseUrl+url,payload,
        {
        headers:{'x-token':token }})
         .then(res=>res.data.data)
         .catch(err=>handleError(err))

}
export const postWithPayload=(url,payload)=>{
    return axios.post(BaseUrl+url,payload)
         .then(res=>res.data.data)
         .catch(err=>handleError(err))
}
