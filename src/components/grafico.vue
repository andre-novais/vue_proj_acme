<template>
    <div>
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="json in info" :key="json.id">
                <h1>{{ json }}</h1>
            </li>
        </ul>
        <h2>{{ this.$http.get("https://projeto-acme.herokuapp.com/financeiro").then(res => res["body"]) }}</h2>
    </div>
    
</template>

<script>
//var Chart = require("chart.js")
export default {
    props:{
        msg: String
    },
    data(){
        return{
            info:this.$http.get("https://projeto-acme.herokuapp.com/financeiro")
            .then(res=>res["body"])
        }
    },
    created(){
        this.$http.get("https://projeto-acme.herokuapp.com/financeiro")
            .then(res=>res["body"]).then(lista=>this.info = lista)

    }
}   
</script>

<style scoped>

</style>