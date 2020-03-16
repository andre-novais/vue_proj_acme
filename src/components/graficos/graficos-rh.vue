<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 justify-content-center align-items-center">
                <div id="contagem_funcionarios" class="grafico col-sm-12 quadro rounded"/>  
            </div>
        </div>
    </div>
</template>

<script>

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
        
        this.$http.get("https://projeto-acme.herokuapp.com/rh", {headers: {'Access-Control-Allow-Origin': "*"}})
            .then(res =>{
                this.list = epoch_to_month(res["body"]);
                                
                var contagem_clientes = new Grafico('Total de Funcionarios');

                contagem_clientes.setSeriesByFunc(this.list,cont_pot_categoria,'total de funcionarios','line','occured_at', 'cd_funcionario')

                contagem_clientes.desenha('contagem_funcionarios');
                }
            )
    }
}
</script>

<style scoped>


</style>