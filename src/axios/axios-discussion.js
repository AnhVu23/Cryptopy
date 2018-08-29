import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cryptopy-3039b.firebaseio.com/posts.json'
});

export default instance;