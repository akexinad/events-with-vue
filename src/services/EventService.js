import axios from 'axios';

// This creates a single axios instance for the entire app.
const apiClient = axios.create({
  // Base URL for all calls to use.
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  // For authentication and configuration.
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/avvenimenti')
  }
}
