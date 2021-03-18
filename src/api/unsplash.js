import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID FDbZLw8K0mwC1yJpMIhvr-d2GbCmb34u9kqbZWXn8I0'
  }
});