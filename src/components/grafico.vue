<template>
    <div>
        <ul>
            <li vfor="json in info">
                <h1>{{ json }}</h1>
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            info:[]
        }
    },
    created(){
        this.$http.get("https://projeto-acme.herokuapp.com/financeiro")
            .then(res => res.json())
            .then(info => this.info = info);
    }

}
</script>

<style scoped>

</style>