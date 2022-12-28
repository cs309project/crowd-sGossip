import axios from 'axios';
import { Cookies } from "react-cookie";
const proxy = 'http://localhost:8000/'

const cookie = new Cookies()
const token = cookie.get('Authorization')


export const getUsers = async ()=> {
    return await (await axios.get('http://localhost:8000/users',{ headers: { 'Authorization': token } })).data
}
export const getById = async (id) => {return await (await axios.get(`${proxy}users/user/${id}`,{ headers: { 'Authorization': token } })).data }

export const register = async (user)=>{
    const {name,email,password}=user
    return await axios.post('http://localhost:8000/users/register',{
        name:name,
        email:email,
        password:password      
    })
}
export const login = async(user)=>{
    const {email,password} = user
    return await axios.post('http://localhost:8000/users/login',{
        email:email,
        password:password
    } )
}

export const userSearch = async (sname)=>{
    return await (await axios.get(`${proxy}users/userSearch?sname=${sname}`,{ headers: { 'Authorization': token } })).data
}

export const addImage = async (photo)=>{
    return await (await axios.post(`${proxy}users/addImage`,{photo:photo},{ headers: { 'Authorization': token } })).data
}