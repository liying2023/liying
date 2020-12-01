<template>
<ul class="tv-list">
  <li class="tv-item" v-for="item in tvList" :key="item.id"  @click="detail(item.id)">
    <div class="img">
        <img :src="'https://images.weserv.nl/?url=' + item.cover.url" alt />
      </div>
    <div class="content">
      <h1>{{item.title}}</h1>
      <h3>{{item.info}}</h3>
    </div>

  </li>
</ul>

</template>

<script>

export default {
 data() {
   return {
     tvList:[],
     start:0,
     isFinish:true,
   }
 },
 created(){
   this.getData();

 },
 mounted(){
   this.listenScroll();
 },
  methods:{
    detail(id){ 
      this.$router.push('/tvdetails/'+id)

    },
    getData(){
      if(this.isFinish){
        this.isFinish=false;
        let baseUrl="https://bird.ioliu.cn/v2?url="
      let tvUrl=`https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start=${this.start}&count=10&loc_id=108288&_=0`
      this.axios.get(baseUrl+tvUrl)
      .then((res)=>{
      console.log(res.data);
      this.tvList=this.tvList.concat(res.data.subject_collection_items);
      // console.log(this.tvList);
      this.isFinish=true;
      })
   .catch((err)=>console.log(err))
      }
      
      //
     
    },
    listenScroll(){
      let htmlDom=document.documentElement;
      let deviceHeight=htmlDom.clientHeight;
      let fullHeight=0;
      let scrollTop=0;
      // console.log(fullHeight);
     
      window.onscroll = ()=>{
         fullHeight=htmlDom.offsetHeight;
         scrollTop=htmlDom.scrollTop;
        if(fullHeight-10<scrollTop+deviceHeight){
          if(this.isFinish){
            this.start+=10;
          }
          
          if(this.start<50){
              this.getData();
          }
        
          console.log('滚动到底部了');
        }
        // console.log(htmlDom.offsetHeight);
        // // console.log(htmlDom.scrollTop);
        // // // console.log(333);
      }
    }

  }

}
</script>

<style lang="scss" scoped>
.tv-list{
  .tv-item{
    display:flex;
    padding:10px;
    border-bottom: 1px solid #cccccc;
    .img{
      flex:3;
      img{
        width:100%
      }
    }
    .content{
      flex:5;
      padding:10px;
        
      h1{
        font-weight:bolder;
      margin-bottom: 20px;
      
      }
      
  }

}
}
  

</style>