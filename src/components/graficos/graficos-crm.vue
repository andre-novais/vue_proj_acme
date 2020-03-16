<template>
    <div class="container">
        <div class="col-sm-12 grafico">
            <div id="contagem_clientes" class="grafico col-sm-12 quadro rounded"/>  
        </div>
    </div>
</template>

<script>

var moment =require('moment')
import {epoch_to_month} from '../funcoes/epoch_to_month'
import {Grafico} from '../funcoes/Grafico'
import {cont_pot_categoria} from '../funcoes/cont_pot_categoria'

export default {
    data(){
        return {
            list : []
        }
    },
    created(){
        
    },
    mounted () {
        
        this.$http.get("https://projeto-acme.herokuapp.com/crm", {headers: {'Access-Control-Allow-Origin': "*"}})
            .then(res =>{
                this.list = epoch_to_month(res["body"])
                
                var contagem_clientes = new Grafico('Total de Clientes');

                contagem_clientes.setSeriesByFunc(this.list,cont_pot_categoria,'total de clientes','line','occured_at', 'id_cliente')

                contagem_clientes.desenha('contagem_clientes');
                }
            )
    }
}
</script>

<style scoped>
.grafico {
    width : 60vw;
    height: 30vw;
}

.quadro{
    background-color: coral;
    padding: 0.5vw;    
}


</style>