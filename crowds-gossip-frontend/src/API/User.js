import axios from 'axios';
import { Cookies } from "react-cookie";
import config from '../config';
const proxy = config.backendUrl

const cookie = new Cookies()
const token = cookie.get('Authorization')


export const getUsers = async () => {
    return await (await axios.get(`${proxy}/users`, { headers: { 'Authorization': token } })).data
}
export const getById = async (id) => { return await (await axios.get(`${proxy}users/user/${id}`, { headers: { 'Authorization': token } })).data }

export const register = async (user) => {
    const { name, email, password } = user
    return await axios.post(`${proxy}/users/register`, {
        name: name,
        email: email,
        password: password
    })
}
export const login = async (user) => {
    const { email, password } = user
    return await axios.post(`${proxy}/users/login`, {
        email: email,
        password: password
    })
}

export const userSearch = async (sname) => {
    return await (await axios.get(`${proxy}users/userSearch?sname=${sname}`, { headers: { 'Authorization': token } })).data
}

export const addImage = async (photo) => {
    return await (await axios.post(`${proxy}users/addImage`, { photo: photo }, { headers: { 'Authorization': token } })).data
}

export const updateUser = async (name, photo) => {
    return await (await axios.post(`${proxy}users/update`, { photo: photo, name: name }, { headers: { 'Authorization': token } })).data
}

export const followUser = async (uid) => {
    return await (await axios.post(`${proxy}users/followUser`, { idToFollow: uid }, { headers: { 'Authorization': token } })).data
}

export const unfollowUser = async (uid) => {
    return await (await axios.post(`${proxy}users/unfollowUser`, { idToUnfollow: uid }, { headers: { 'Authorization': token } })).data
}

export const banUser = async (uid) => {
    await axios.post(`${proxy}users/block`, { id: uid }, { headers: { 'Authorization': token } })
}

export const unbanUser = async (uid) => {
    await axios.post(`${proxy}users/unblock`, { id: uid }, { headers: { 'Authorization': token } })
}