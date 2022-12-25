import axios from 'axios';
const proxy = 'http://localhost:8000/'

export const getUsers = async ()=> {
    return await (await axios.get('http://localhost:8000/users')).data
}
export const getById = async (id) => {return await (await axios.get(`${proxy}/users/${id}`)).data }
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
    })
}

export const userSearch = async (sname)=>{
    return await (await axios.get(`${proxy}users/userSearch?sname=${sname}`)).data
}