import axios from "axios";
import { Cookies } from "react-cookie";
import config from "../config";
const proxy = config.backendUrl

const cookie = new Cookies()
const token = cookie.get('Authorization')

export const getChatById = async (id) => {
    return await (await axios.get(`${proxy}chats/getChat/${id}`,{ headers: { 'Authorization': token }} )).data
}