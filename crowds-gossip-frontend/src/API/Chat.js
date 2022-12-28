import axios from "axios";
import { Cookies } from "react-cookie";
const proxy = 'http://localhost:8000/'

const cookie = new Cookies()
  const token = cookie.get('Authorization')

export const getChatById = async (id) => {
    return await (await axios.get(`${proxy}chats/getChat/${id}`,{ headers: { 'Authorization': token }} )).data
}