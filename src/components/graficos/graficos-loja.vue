<template>
    <div class="container">
        <div class="col-sm-12 justify-content-center align-items-center">
            <div id="contagem_clientes" class="grafico col-sm-12 quadro rounded"/>  
        </div>
        <!-- <div class="col-sm-6">
            <div id="entrada_saida" class="grafico col-sm-12 quadro  rounded"/>
        </div> -->
    </div>
</template>

<script>

var moment =require('moment')
var lodash = require('lodash')
import {epoch_to_month} from '../funcoes/epoch_to_month'
import {Grafico} from '../funcoes/Grafico'
import {gera_bubble_clientes} from '../funcoes/gera_bubble_clientes'

export default {
    data(){
        return {
            list : []
        }
    },
    created(){
        
    },
    mounted () {
        
        this.$http.get("https://projeto-acme.herokuapp.com/loja_online", {headers: {'Access-Control-Allow-Origin': "*"}})
            .then(res =>{
                this.list = epoch_to_month(res["body"])
                
                let clientes = []
                lodash.uniqBy(this.list.filter(json=>json['ds_evento']=='compra_efetuada'),'id_cliente').forEach(elem => {
                    clientes.push({'id':elem['id_cliente']})
                });


                var mapeamento_clientes = new Grafico('Mapeamento de Clientes');

                mapeamento_clientes.setSeriesByFunc(this.list,gera_bubble_clientes,'Mapeamento dos Clientes','bubble','outro')
                mapeamento_clientes.chart.xAxis().title('Numero de Compras')
                mapeamento_clientes.chart.yAxis().title('Variedade de Produtos')

                mapeamento_clientes.desenha('contagem_clientes');
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