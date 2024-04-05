import axios from 'axios';

const httpService = axios.create({
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
});

export default httpService;