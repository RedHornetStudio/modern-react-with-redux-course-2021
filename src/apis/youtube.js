import axios from 'axios';

const KEY = 'AIzaSyC-G4EkIwiCgR9roPrOgtb9qtVN3i8CIEc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});