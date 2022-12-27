import axios from "axios";
const proxy = 'http://localhost:8000/'

export const getChatById = async (id) => {
    console.log(id);
    return await (await axios.get(`${proxy}chats/getChat/${id}`)).data
}