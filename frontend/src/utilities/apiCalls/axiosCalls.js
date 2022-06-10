import { Navigate } from 'react-router-dom';
import axios from 'axios';


let config = {
    headers: {
    'api_key': 'erty123', 
    'Content-Type': 'application/x-www-form-urlencoded',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
   },

}

// API Axios Get Call.
export const getAPICall = (url, data) => {
    return axios.get(url, data, config);
}

// API Axios Post Call.
export const postAPICall = (url, data) => {
    return axios.post(`http://localhost:5000/emr/api`+url, data, config);
}
// API Axios Put Call.
export const putAPICall = (url, data) => {
    return axios.put(url, data, config);
}
// API Axios Delete Call.
export const deleteAPICall = (url) => {
    return axios.delete(url,config);
}