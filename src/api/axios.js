import axios from "axios"

const Instance = axios.create({
    baseURL:"http://13.48.192.26/api"
})


Instance.interceptors.request.use((confiq)=>{
    const token= localStorage.getItem('jwtToken')
    if(token){
        confiq.headers.Authorization=`Bearer ${token}`
    }
    return confiq
},(error)=>{
    return Promise.reject(error)
})

export default Instance