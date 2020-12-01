<template>
  <div>
      <p>{{tvObj.title}}</p>
      <p>{{tvObj.intro}}</p>
    <!-- <div v-if="tvObj.cover.image"> -->
         <img :src="'https://images.weserv.nl/?url='  + tvObj.cover.image.small.url" alt="">
    <!-- </div> -->
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            tvObj:{

            }
            
        }
    },
    created(){
        this.getData();
    },
    methods:{
        
        
        getData(){
            let baseUrl="https://bird.ioliu.cn/v2?url=";
            let tvDetailsUrl='https://m.douban.com/rexxar/api/v2/tv/'+this.$route.params.id +'?ck=&for_mobile=1';
            this.axios.get(baseUrl+tvDetailsUrl).then(
                 
                (res)=>{console.log(res);
                this.tvObj=res.data
                }
            ).catch(err=>console.log(err))
            

        }
    }

}
</script>

<style>

</style>