<template>
 <div id="book">
   <div class="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in carouseList" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
      
   </div>
   <div class="tab"> 
     <el-tabs v-model="activeName" :stretch="true" @tab-click="handleClick">
    <el-tab-pane label="虚构类" name="first">
      <div class="bookList">
          <el-col :span="8"><div class="img">
            <img :src="item.cover.url" alt=""/>
            </div></el-col>
  <el-col :span="16"><div class="content">
    <h3>{{item.title}}</h3>
    <p>{{item.info}}</p>
    </div></el-col>
      </div>
     
    </el-tab-pane>
    <el-tab-pane label="非虚构类" name="second">222</el-tab-pane>
   
  </el-tabs>
   </div>
 </div >

 
 
</template>

<script>
export default {
  data() {
    return {
      carouseList:[],
      bookList:[],
      activeName:"first"
    }
  },
  created(){
    this.getData();
  },
  methods:{
    getData(){
      let baseUrl="https://bird.ioliu.cn/v2?url="
      let bookUrl=`https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?os=ios&start=0&count=0`
      this.axios
      .get(baseUrl+bookUrl)
      .then(res=>{console.log(res);
      this.carouseList=res.data.subject_collection_items.map((item)=>{
      return  item.cover.url ;
      });
      console.log(this.carouseList);

      })
      .catch(err=>{console.log(err)})
    },
     handleClick(tab, event) {
        console.log(tab, event);
      },
    
  }

}
</script>

<style lang="scss" scoped>
.carousel{
  img{
    width:100%;
  }
  .tab{
    padding:.2rem;
    .bookList{
      .img{
        img{
          width: 100px;
        }
      }
      .content{
        padding:0.2rem;
        h3{
          font-weight: bolder;
          margin-bottom:0.4rem ;
        }

      }
    }
  }
}


</style>