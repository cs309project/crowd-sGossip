import axios from 'axios';
const proxy = 'http://localhost:8000/'


export const addPost = async ({author,content}) => {
    await axios.post(`${proxy}posts/add`,{author,content})
}


export const getPostsById = async({_id}) => {
    let unReadPost = await (await axios.get(`${proxy}posts/${_id}`)).data
    return unReadPost
}

export const addComment = async({_id, commenter, comment}) => {
    await axios.post(`${proxy}posts/addComment` , {_id, commenter , comment})
}