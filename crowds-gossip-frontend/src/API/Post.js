import axios from 'axios';
import { Cookies } from "react-cookie";
import { getById } from './User';
const proxy = 'http://localhost:8000/'

const cookie = new Cookies()
const token = cookie.get('Authorization')


export const addPost = async ({ content,photo="" }) => {
    await axios.post(`${proxy}posts/add`, { content,photo }, { headers: { 'Authorization': token } })
}


export const getPostsById = async ({ _id }) => {
    let unReadPost = await (await axios.get(`${proxy}posts/${_id}`, { headers: { 'Authorization': token } })).data
    return unReadPost
}

export const addComment = async ({ _id, comment }) => {
    await axios.post(`${proxy}posts/addComment`, { _id, comment }, { headers: { 'Authorization': token } })
}

export const handleUpVote = async ({ _id, upVoters, downVoters }) => {
    let found = false
    const upVoter = await getById()
    for (let i = 0; i < upVoters.length; i++) {
        if (JSON.stringify(upVoters[i] === JSON.stringify(upVoter._id.toString()))) {
            await axios.post(`${proxy}posts/removeUpVote`, {
                _id,
                upVoter: upVoter._id.toString()
            }, { headers: { 'Authorization': token } })
            found = true
            break
        }
    }
    if (!found) {
        for (let i = 0; i < downVoters.length; i++) {
            if (JSON.stringify(downVoters[i] === JSON.stringify(upVoter._id.toString()))) {
                await axios.post(`${proxy}posts/removeDownVoter`, {
                    _id,
                    downVoters: upVoter._id.toString()
                }, { headers: { 'Authorization': token } })
                break
            }
        }
        await axios.post(`${proxy}posts/addUpVote`, {
            _id,
            upVoter: upVoter._id.toString()
        }, { headers: { 'Authorization': token } })
    }
}

export const handleDownVote = async ({ _id, upVoters, downVoters }) => {
    let found = false
    const downVoter = await getById()
    for (let i = 0; i < downVoters.length; i++) {
        if (JSON.stringify(downVoters[i] === JSON.stringify(downVoter._id))) {
            await axios.post(`${proxy}posts/removeDownVoter`, {
                _id,
                downVoters: downVoter._id.toString()
            }, { headers: { 'Authorization': token } })
            found = true
            break
        }
    }
    if (!found) {
        for (let i = 0; i < upVoters.length; i++) {
            if (JSON.stringify(upVoters[i] === JSON.stringify(downVoter._id))) {
                await axios.post(`${proxy}posts/removeUpVote`, {
                    _id,
                    upVoter: downVoter._id.toString()
                }, { headers: { 'Authorization': token } })
                break
            }
        }
        await axios.post(`${proxy}posts/addDownVoter`, {
            _id,
            downVoters: downVoter._id.toString()
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