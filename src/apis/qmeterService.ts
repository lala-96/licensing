import axios from "axios";
import {APi_URL} from "../utils/constants";
const token = 'Token 05d852a833f2d5c3c9b2133d8fd3eae77b30b9333eb32919d03bfaccf99a84f9';

const qmeterService = axios.create({
    baseURL:APi_URL,
    headers: {
        'Authorization': token
    }
})


export default  qmeterService