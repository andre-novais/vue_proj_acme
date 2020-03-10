<template>
    <div>
    <div id="container" style="width : 60vw; height : 50vh; max-width: 500px; max-height: 400px;">
        
    </div>
    <div><button @click="desenha(list)">desenha</button></div>
    <div>{{ JSON.stringify(list) }}</div></div>
</template>


<script>

var anychart = require('anychart')
import epochToMonthInt from './functions/epochToMonthInt.js'
var moment =require('moment')

//var list = [{label: "Chocolate" , y:5},{label: "Rhubarb compote" , y:2},{label: "Crêpe Suzette" , y:2},{label: "American blueberry" , y:2},{label: "Buttermilk" , y:1}]
/* var list = this.$http.get("https://projeto-acme.herokuapp.com/financeiro", {headers: {'Access-Control-Allow-Origin': "*"}})
            .then(res => epochToMonthInt(res["body"])) */

export default {
    data(){
        return {
            list : []
        }
    },
    created(){
        this.$http.get("https://projeto-acme.herokuapp.com/financeiro", {headers: {'Access-Control-Allow-Origin': "*"}})
            .then(res =>this.list = this.epochToMonthInt2(res["body"]))
        
        //this.desenha(this.list);
    },
    methods : {
        desenha : function (data){   
            var result = []
            data.map(
                json => result.push(
                    {
                        "x": json["occured_at"],
                        "value": json["VL_valor"]
                    }
                )
            )
            anychart.onDocumentLoad(function () {
                // create an instance of a pie chart
                var chart = anychart.pie();
                // set the data
                chart.data(result);
                // set chart title
                chart.title("Top 5 pancake fillings");
                // set the container element 
                chart.container("container");
                // initiate chart display
                alert(JSON.stringify(result))
                chart.draw();
            });
        },
        epochToMonthInt2 : function (arr){
        function epoch_to_mes(item){
            item["occured_at"] = moment(parseInt(item["occured_at"])).format("YYYYMM")
            return item
            }
        let new_arr = arr.map(epoch_to_mes);
        return new_arr
        }
    }
}


</script>