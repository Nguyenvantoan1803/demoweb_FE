import axios from "../axios";

 const handleLogin = (email,password)=>{
    return axios.post('/api/login',{email,password})
}
const handleUser = (id)=>{
    return axios.get(`/api/getalluser?id=${id}`,{id})
}
const handlecreateUser = (id)=>{
    return axios.post(`/api/createuser`)
}
export  {
    handleLogin,
    handleUser,
    handlecreateUser
}