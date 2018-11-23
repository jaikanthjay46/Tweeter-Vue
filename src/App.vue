<template>
    <div id="app">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
      <v-header/>
    <router-view/>
  </div>
</template>

<script>
import Header  from '@/components/v-header.vue'
export default {
  name: 'App',
  components: {
    'v-header': Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color: #6f6f6f17!important;
}
</style>
