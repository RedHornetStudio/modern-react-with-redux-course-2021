import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID YBBET-t3nKXMT8zm4Ft0uJfyYqQlWfNDVOdjH1aVqBM'
  }
});