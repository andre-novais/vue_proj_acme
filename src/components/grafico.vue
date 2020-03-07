<template>
    <div>
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="json in info" :key="json.id">
                <h1>{{ json }}</h1>
            </li>
        </ul>
    </div>
    
</template>

<script>
//var Chart = require("chart.js")
alert("console log")
import axios from "axios";

export default {
    props:{
        msg: String
    },
    data(){
        return{
            info:[]
        }
    },
    created(){
        axios.get("https://projeto-acme.herokuapp.com/financeiro")
            .then(res=>this.info = res.body)

    }
}   
</script>

<style scoped>

</style>