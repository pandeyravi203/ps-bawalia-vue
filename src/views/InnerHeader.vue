<template>
    <v-row>
        <v-col class="innder-header" cols="12">
           <span>{{headerName}}</span>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data(){
        return{
          
        }
       
    },
    computed:{
       headerName:{
           get(){
               return this.$store.state.headerName
           }
       } 
    }
}
</script>

<style>
.innder-header{
    margin-left:50px;
    margin-top:15px;
    color: aliceblue;
    font-size: 25px;
    background:#009688
}
</style>