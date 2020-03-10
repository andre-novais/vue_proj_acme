<template>
    <div>
        <div >
            <line-chart :chart-data="dataset"/>
        </div>
        <div>
            <button @click="chart_fin()">Dash - Financeiro</button>
        </div>
    </div>  
</template>

<script>
import LineChart from './line-chart.js'
import lodash from 'lodash'
import moment from 'moment'
function convert_epoch (arr){
            function epoch_to_mes(item){
                item["occured_at"] = moment(parseInt(item["occured_at"])).format("YYYY-MM")
                return item
                }
            let new_arr = arr.map(epoch_to_mes);
            return new_arr
            } 

function grupo_sum (arr, categoria, valores){
                let grupos = lodash.groupBy(arr, categoria)
                let somas = []
                Object.keys(grupos).forEach(key => somas.push(lodash.sumBy(grupos[key],valores)))
                return [Object.keys(grupos),somas]
                }


export default {
    'name': 'graphs',
    components:{LineChart},
    data(){
        return {
            db_financeiro:[],
            db_crm:[],
            db_fornecedores:[],
            db_loja_online:[],
            db_rh:[],
            db_teste:[],
            dataset:[]
        }
            
    },
    created(){
        this.$http.get("https://projeto-acme.herokuapp.com/financeiro", {headers: {'Access-Control-Allow-Origin': "*"}})
            .then(res => this.db_financeiro = res["body"])
    },
    methods:{
        chart_fin (){
            let db_filtrado = this.db_financeiro.filter(json => json['ds_tipificacao']!='entrada_com_contrapartida');
            let db_com_sort = db_filtrado.sort((a,b)=>a['occured_at']>b['occured_at']?1:-1);
            let db_com_data = convert_epoch(db_com_sort);
            let grupos_pos_mes = lodash.groupBy(db_com_data,'occured_at')
            let arrs= []
            Object.keys(grupos_pos_mes).forEach(key =>arrs.push(grupo_sum(grupos_pos_mes[key],'ds_tipificacao','vl_valor')))
            alert(JSON.stringify(arrs))
            let custos = []
            
            for(let i = 0;i<arrs.length;i++){
                let custos_index = arrs[i][0].indexOf('custo');
                custos.push(arrs[i][1][custos_index]);
            }
            
            let despesas = []
            
            for(let i = 0;i<arrs.length;i++){
                let despesa_index = arrs[i][0].indexOf('despesa');
                despesas.push(arrs[i][1][despesa_index]);
            }
            
            let receitas = []
            
            for(let i = 0;i<arrs.length;i++){
                let receita_index = arrs[i][0].indexOf('receita');
                receitas.push(arrs[i][1][receita_index]);
            }


            this.dataset = {
                labels : ['setembro','outubro','novembro','desembro','janeiro','fevereiro','março'],
                datasets : [{
                    label: 'custos',
                    data:custos
                },{
                    label:'despesas',
                    data:despesas
                },{
                    label:'receitas',
                    data:receitas
                }]
            }

            //alert(custos_index)

            

            
        } 
    }
}
</script>

<style scoped>

</style>