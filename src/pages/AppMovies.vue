<template>
  <div>
    <form @submit="storeMovie">
      <div class="form-group">
        <label>Movie Title</label>
        <input 
          v-model="movieForm.title" 
          type="text" 
          class="form-control" 
          placeholder="Movie title">
      </div>
      <div class="form-group">
        <label>Movie Director</label>
        <input 
          v-model="movieForm.director" 
          type="text" 
          class="form-control" 
          placeholder="Movie director">
      </div>
      <div class="form-group">
        <label>Movie image url</label>
        <input 
          v-model="movieForm.imageUrl" 
          type="text" 
          class="form-control" 
          placeholder="Movie image url">
      </div>
      <div class="form-group">
        <label>Movie release date</label>
        <input
        v-model="movieForm.releaseDate" 
        type="text" 
        class="form-control" 
        placeholder="Movie release date">
      </div>
      <div class="form-group">
        <label>Movie Genre</label>
        <input
        v-model="movieForm.genre" 
        type="text" 
        class="form-control" 
        placeholder="Movie Genre">
      </div>
      <button type="text" class="btn btn-primary">Submit</button>
    </form>
    <!-- movies list -->

  </div>
</template>

<script>
  import  MoviesService from '../Services/MoviesService'
  export default {
    data() {
      return {
        movies: [],
        movieForm: {
          title: '',
          director: '',
          imageUrl: '',
          releaseDate: '',
          genre: ''
        }
      }
    },
    methods: {
      storeMovie() {
        MoviesService.store(this.movieForm)
      }
    },
    created() {
      console.log('sss')
      MoviesService.index()
        .then((data) => {
          this.movies = data
        }).catch(error => {
          console.log(error)
        })
    }
  }
</script>

