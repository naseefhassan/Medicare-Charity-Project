import axios from "axios"

const Instance = axios.create({
    baseURL:"http://localhost:5001"
})

export default Instance