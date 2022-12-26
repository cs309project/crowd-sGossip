import axios from 'axios';
const proxy = 'http://localhost:8000/'


export const addPost = async ({ author, content }) => {
    await axios.post(`${proxy}posts/add`, { author, content })
}


export const getPostsById = async ({ _id }) => {
    let unReadPost = await (await axios.get(`${proxy}posts/${_id}`)).data
    return unReadPost
}

export const addComment = async ({ _id, commenter, comment }) => {
    await axios.post(`${proxy}posts/addComment`, { _id, commenter, comment })
}

export const handleUpVote = async ({ _id, upVoter, upVoters, downVoters }) => {
    let found = false
    for (let i = 0; i < upVoters.length; i++) {
        if (JSON.stringify(upVoters[i] === JSON.stringify(upVoter))) {
            await axios.post(`${proxy}posts/removeUpVote`, {
                _id,
                upVoter
            })
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
                })
                break
            }
        }
        await axios.post(`${proxy}posts/addUpVote`, {
            _id,
            upVoter
        })
    }
}

export const handleDownVote = async ({ _id, downVoter, upVoters, downVoters }) => {
    let found = false
    for (let i = 0; i < downVoters.length; i++) {
        if (JSON.stringify(downVoters[i] === JSON.stringify(downVoter))) {
            await axios.post(`${proxy}posts/removeDownVoter`, {
                _id,
                downVoters: downVoter
            })
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
                })
                break
            }
        }
        await axios.post(`${proxy}posts/addDownVoter`, {
            _id,
            downVoters: downVoter
        })
    }
}