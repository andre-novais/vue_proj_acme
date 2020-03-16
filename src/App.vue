<template>
  <div id="app">
    <div>

        <div class="container">
          <div class="row justify-content-center align-items-center">

              <button class="btn btn-primary col-sm-auto offset-1  botao" @click="get_component(component.comp)"  v-for="component in list_comp" :key="component.name">{{ component.name }}</button>

            
          </div>
        </div>
        <div class="conteiner " id='grafico_resultado' :is='comp'></div>
         

    </div>
  </div>
</template>


<script>
import graficosfinanceiros from './components/graficos/graficos-financeiros.vue'
import graficoscrm from './components/graficos/graficos-crm.vue'
import graficorh from './components/graficos/graficos-rh.vue'
import graficofornecedores from './components/graficos/graficos-fornecedores.vue'
import graficolojaonline from './components/graficos/graficos-loja.vue'

export default {
  name: 'App',
  components: {
    graficosfinanceiros,
    graficoscrm,
    graficorh,
    graficofornecedores,
    graficolojaonline
  },
  data(){
    return {
      comp : null,
      graficosfinanceiros,
      graficoscrm,
      graficofornecedores,
      graficolojaonline,
      list_comp : [
        {'name':'Financeiro','comp': graficosfinanceiros},
        {'name':'crm','comp': graficoscrm},
        {'name':'rh','comp':graficorh},
        {'name':'Fornecedores','comp': graficofornecedores},
        {'name':'Loja', 'comp':graficolojaonline}]
    }
  },
  methods : {
    get_component(comp){
      this.comp = comp
    }
  }
}
</script>

<style>

body{
  background-color: blueviolet;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#graph_container{
  text-align: center;
  display: inline-block;  
}
#grafico_resultado{
  margin-top: 0.5vw;
}
.botao{
  min-width: 7vw;
  margin-bottom: 5px;
}
.grafico {
    width : 95vw;
    height : 50vh;
    min-width: 100px; 
    padding-right: 5px;
    max-height: 80vw;
}

.quadro{
    background-color: coral;
    padding: 0.5vw; 
    margin-bottom: 5px;   
}
</style>
