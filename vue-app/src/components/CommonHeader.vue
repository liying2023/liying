<template>
  <div >
      <header :style="{backgroundColor:curMenu.backgroundColor}">
        <p class="home" @click="goHome">首页</p>
        {{curMenu.name}}</header>
      
   
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex"

export default {
  computed:{
     ...mapState(['curMenu'])
    },
    methods:{
      ...mapMutations(['setCurMenu']),
      goHome(){
        this.$router.push('/');
        this.setCurMenu({ name: "剧集", backgroundColor: "#ff0000"})
      }
    }

}
</script>



<style lang="scss" scoped>
header{
  color:#ffffff;
    width:100%;
     background-color:red;
     text-align: center;
     height:50px;
     line-height: 50px;
    position: fixed;
    top:0px;
    left:0px;
    
}
.home{
  position:absolute;
  left:0px;

}


</style>