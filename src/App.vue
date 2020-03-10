<template>
  <div id="app">
    <div>
      <Graphs/>
    </div>
  </div>
</template>


<script>
import Graphs from './components/Graphs.vue'

export default {
  name: 'App',
  components: {
    "Graphs":Graphs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
