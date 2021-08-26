import axios from "axios";

const token = window.localStorage.getItem('token');

console.log(token);

// Set config defaults when creating the instance
const axiosIntance = axios.create({
    baseURL: 'http://localhost:5000/v1',
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
});


export default axiosIntance;