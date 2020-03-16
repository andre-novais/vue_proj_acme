<template>
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div id="contagem_clientes" class="grafico col-sm-12 quadro rounded"/>  
        </div>
        <!-- <div class="col-sm-6">
            <div id="entrada_saida" class="grafico col-sm-12 quadro  rounded"/>
        </div> -->
    </div>
</template>

<script>

var lodash = require('lodash');
import {epoch_to_month} from '../funcoes/epoch_to_month'
import {Grafico} from '../funcoes/Grafico'
import {sum_categoria} from '../funcoes/sum_categoria'

export default {
    data(){
        return {
            list : []
        }
    },
    created(){
        
    },
    mounted () {
        
        this.$http.get("https://projeto-acme.herokuapp.com/fornecedores", {headers: {'Access-Control-Allow-Origin': "*"}})
            .then(res =>{
                this.list = epoch_to_month(res["body"]);
                let num = 1
                let fornecedores = []
                lodash.uniqBy(this.list,'cd_fornecedor').forEach(elem => {
                    fornecedores.push({'id':elem['cd_fornecedor'],'nome':`fornecedor${num}`})
                    num++
                });
                
                var contagem_clientes = new Grafico('Parceiros');
                fornecedores.forEach(fornecedor => {
                    contagem_clientes.setSeriesByFunc(this.list,sum_categoria,fornecedor['nome'],'bar','occured_at','cd_fornecedor',fornecedor['id'],'vl_transacao');
                })
                

                contagem_clientes.desenha('contagem_clientes');
                }
            )
    }
}
</script>

<style scoped>

</style>