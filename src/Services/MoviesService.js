import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3000'
})

const ENDPOINTS = {
    MOVIES: '/api/movies'
}
export default {
  
  index: function() {
    return axios.get(ENDPOINTS.MOVIES)
  },
  store: function(movie) {
    return axios.post(ENDPOINTS.MOVIES, movie)
  }
}
