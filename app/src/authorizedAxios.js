import axios from 'axios';

export default function authorizedAxios() {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            'authorization': token
        }
    });
}