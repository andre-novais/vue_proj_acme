<template>
  <div id="app">
    <div>
      <graficosfinanceiros/>
    </div>
  </div>
</template>


<script>
import graficosfinanceiros from './components/graficos/graficos-financeiros.vue'

export default {
  name: 'App',
  components: {
    graficosfinanceiros
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
