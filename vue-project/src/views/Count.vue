<template>
  <div>
      <p>vuexxxx</p>
      <h1>count:{{$store.state.count}}</h1>
      <!-- <button @click="add">加一</button> -->
      <p>count:{{count}}</p>
      <p>{{result}}</p>

      <button @click="$store.commit('add')">加一</button>
      <button @click="addNum(5)">加5</button>
      <button @click="reduceFun">减1</button>
      
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters}from 'vuex'


export default {
    computed:{
        ...mapState(['count']),
         ...mapGetters(['result'])
        
        // count  (){
        //     return 99;
        // }
    },
    methods:{
        // add(){
        //     this.$store.commit('add')
        // },
        // addNum(num){
        //     this.$store.commit('addNum',num)
        // }
        ...mapMutations(['add','addNum']),
        ...mapActions(['reduceFun']),
        
       
    }

}
</script>

<style>

</style>