<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import AppMovies from './pages/AppMovies.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    AppMovies
  }
}
</script>

<style>

</style>
