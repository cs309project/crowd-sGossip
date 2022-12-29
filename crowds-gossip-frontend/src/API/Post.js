import axios from 'axios';
import { Cookies } from "react-cookie";
import { getById } from './User';
const proxy = 'http://localhost:8000/'

const cookie = new Cookies()
const token = cookie.get('Authorization')


export const addPost = async ({ content, photo = "" }) => {
    await axios.post(`${proxy}posts/add`, { content, photo }, { headers: { 'Authorization': token } })
}


export const getPostsById = async ({ _id }) => {
    let unReadPost = await (await axios.get(`${proxy}posts/${_id}`, { headers: { 'Authorization': token } })).data
    return unReadPost
}

export const addComment = async ({ _id, comment }) => {
    await axios.post(`${proxy}posts/addComment`, { _id, comment }, { headers: { 'Authorization': token } })
}

export const handleUpVote = async ({ _id }) => {
    if (await (await axios.get(`${proxy}posts/getUpVoters/${_id.toString()}`, { headers: { 'Authorization': token } })).data.voted) {
        await axios.post(`${proxy}posts/removeUpVote`, {
            _id
        }, { headers: { 'Authorization': token } })
    } else {
        await axios.post(`${proxy}posts/removeDownVoter`, {
            _id,
        }, { headers: { 'Authorization': token } })

        await axios.post(`${proxy}posts/addUpVote`, {
            _id,
        }, { headers: { 'Authorization': token } })
    }
}

export const handleDownVote = async ({ _id }) => {
    if (await (await axios.get(`${proxy}posts/getDownVoters/${_id.toString()}`, { headers: { 'Authorization': token } })).data.voted) {
        await axios.post(`${proxy}posts/removeDownVoter`, {
            _id
        }, { headers: { 'Authorization': token } })
    } else {
        await axios.post(`${proxy}posts/removeUpVote`, {
            _id,
        }, { headers: { 'Authorization': token } })

        await axios.post(`${proxy}posts/addDownVoter`, {
            _id,
        }, { headers: { 'Authorization': token } })
    }
}

export const deletePost = async (id) => {
    await axios.post(`${proxy}posts/delete/${id}`, {}, { headers: { 'Authorization': token } })
}

export const editPost = async ({ _id, content }) => {
    await axios.post(`${proxy}posts/update`, {
        _id: _id,
        content: content
    }, { headers: { 'Authorization': token } })
}

export const deleteComment = async ({ _id, time }) => {
    await axios.post(`${proxy}posts/deleteComment`, {
        _id: _id,
        time: time
    }, { headers: { 'Authorization': token } })
}