<template>
    <div>
        <h1>{{ msg }}</h1>
        <ul>
            <li vfor="json in info">
                <h1>{{ json }}</h1>
            </li>
        </ul>
    </div>
    
</template>

<script>
var Chart = require("chart.js")
export default {
    props:{
        msg: String
    },
    data(){
        return{
            info:[{"nome":"andre"},{"nome":"andre"},{"nome":"andre"},{"nome":"andre"},{"nome":"andre"}]
        }
    },
    //created(){
      //  this.$http.get("https://projeto-acme.herokuapp.com/financeiro")
        //    .then(res=>res["body"]).then(lista=>this.info = lista)

    //}

}
</script>

<style scoped>

</style>