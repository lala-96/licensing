import axios from "axios";
import {APi_URL, headers} from "../utils/constants";
const qmeterService = axios.create(
    {
        baseURL: APi_URL,
        headers
    }
)


export default qmeterService