import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-adbad.firebaseio.com/'
})

export default instance;