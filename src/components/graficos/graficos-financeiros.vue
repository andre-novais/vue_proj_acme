<template>
    <div class="row justify-content-center align-items-center">
        <div class="col-sm-12 col-md-5">
            <div id="receitas_custos" class=" grafico quadro col-md-12  rounded"/>  
        </div>
        <div class="col-sm-12 col-md-5 col-md-offset-2">
            <div id="entrada_saida" class=" grafico quadro col-md-12 rounded"/>
        </div>
        
       
    </div>
</template>

<script>

import {epoch_to_month} from '../funcoes/epoch_to_month'
import {Grafico} from '../funcoes/Grafico'

export default {
    data(){
        return {
            list : []
        }
    },
    created(){
        
    },
    mounted () {
        
        this.$http.get("https://projeto-acme.herokuapp.com/financeiro", {headers: {'Access-Control-Allow-Origin': "*"}})
            .then(res =>{
                this.list = epoch_to_month(res["body"])
                
                var receitas_custos = new Grafico('receitas e custos variaveis');

                receitas_custos.setSeries(
                    this.list.filter(json=>json['ds_tipificacao']=='receita'),
                    'occured_at',
                    'vl_valor',
                    'receitas',
                    'line'
                );
                receitas_custos.setSeries(
                    this.list.filter(json=>json['ds_tipificacao']=='custo'),
                    'occured_at',
                    'vl_valor',
                    'custos',
                    'line'
                );
                receitas_custos.desenha('receitas_custos')
                receitas_custos.chart.yAxis().title('Receita/Custo')
                receitas_custos.chart.xAxis().title('Mês')
                receitas_custos.chart.yAxis(0).labels().format('R${%value}')
                
                var entrada_saida = new Grafico('Funding e Necessidade de Caixa por Mês');
                entrada_saida.setSeries(
                    this.list.filter(json=>json['ds_tipificacao']=='entrada_com_contrapartida'),
                    'occured_at',   
                    'vl_valor',
                    'Funding',
                    'line'
                );
                entrada_saida.setSeries(
                    this.list.filter(json=>json['ds_tipificacao']=='despesa'),
                    'occured_at',
                    'vl_valor',
                    'Despendio Administrativo',
                    'line'
                );
                entrada_saida.desenha('entrada_saida');
                entrada_saida.chart.xAxis().title('Movimentação')
                entrada_saida.chart.yAxis().title('Mês')
                entrada_saida.chart.yAxis(0).labels().format('R${%value}')
                
            })
    }
}
</script>

<style scoped>



</style>