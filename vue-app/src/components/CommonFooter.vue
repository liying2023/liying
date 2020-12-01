<template>
  <footer id="footer" :style="{backgroundColor:curMenu.backgroundColor}">
      <div v-for="obj in menuList" :key="obj.path" @click="changeMenu(obj)">
        <router-link :to="obj.path">{{obj.name}}</router-link>
      </div>
      
  </footer>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
  data(){
    return{
      menuList:[
        { path: '/tv', name: '剧集', backgroundColor: '#ff0000' },
  { path: '/music', name: '音乐', backgroundColor: '#00ff00'  },
  { path: '/book', name: '书籍', backgroundColor: '#066600'  },
  { path: '/chat', name: '聊天', backgroundColor: '#ff00ff' }
      ]

    }
},
    computed:{
     ...mapState(['curMenu'])
    },
    methods:{
      ...mapMutations(['setCurMenu']),
      changeMenu(obj){
        this.setCurMenu(obj)


      }
    }

  }


</script>

<style lang="scss" scoped>

footer{width:100%;
  display:flex;
  justify-content: space-around;
     background-color:red;
     text-align: center;
     height:50px;
     line-height: 50px;
    position: fixed;
    bottom:0px;
    left:0px;
    a{
      color:black;
    }
    .router-link-exact-active {
    color: #ffffff;
  }
    }
    
    

</style>