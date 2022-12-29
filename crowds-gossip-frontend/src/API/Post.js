import axios from 'axios';
import { Cookies } from "react-cookie";
const proxy = 'http://localhost:8000/'

const cookie = new Cookies()
const token = cookie.get('Authorization')


export const addPost = async ({ content }) => {
    await axios.post(`${proxy}posts/add`, { content }, { headers: { 'Authorization': token } })
}


export const getPostsById = async ({ _id }) => {
    let unReadPost = await (await axios.get(`${proxy}posts/${_id}`, { headers: { 'Authorization': token } })).data
    return unReadPost
}

export const addComment = async ({ _id, comment }) => {
    await axios.post(`${proxy}posts/addComment`, { _id, comment }, { headers: { 'Authorization': token } })
}

export const handleUpVote = async ({ _id, upVoter, upVoters, downVoters }) => {
    let found = false
    for (let i = 0; i < upVoters.length; i++) {
        if (JSON.stringify(upVoters[i] === JSON.stringify(upVoter))) {
            await axios.post(`${proxy}posts/removeUpVote`, {
                _id,
                upVoter
            }, { headers: { 'Authorization': token } })
            found = true
            break
        }
    }
    if (!found) {
        for (let i = 0; i < downVoters.length; i++) {
            if (JSON.stringify(downVoters[i] === JSON.stringify(upVoter))) {
                await axios.post(`${proxy}posts/removeDownVoter`, {
                    _id,
                    downVoters: upVoter
                }, { headers: { 'Authorization': token } })
                break
            }
        }
        await axios.post(`${proxy}posts/addUpVote`, {
            _id,
            upVoter
        }, { headers: { 'Authorization': token } })
    }
}

export const handleDownVote = async ({ _id, downVoter, upVoters, downVoters }) => {
    let found = false
    for (let i = 0; i < downVoters.length; i++) {
        if (JSON.stringify(downVoters[i] === JSON.stringify(downVoter))) {
            await axios.post(`${proxy}posts/removeDownVoter`, {
                _id,
                downVoters: downVoter
            }, { headers: { 'Authorization': token } })
            found = true
            break
        }
    }
    if (!found) {
        for (let i = 0; i < upVoters.length; i++) {
            if (JSON.stringify(upVoters[i] === JSON.stringify(downVoter))) {
                await axios.post(`${proxy}posts/removeUpVote`, {
                    _id,
                    upVoter: downVoter
                }, { headers: { 'Authorization': token } })
                break
            }
        }
        await axios.post(`${proxy}posts/addDownVoter`, {
            _id,
            downVoters: downVoter
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