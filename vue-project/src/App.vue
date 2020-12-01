<template>
  <div id="app">
   <!-- path query
   name params -->
     
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/course">Course</router-link>|
      <!-- <router-link :to="{  path:'/user',query:{name:'liying',id:1001,age:18}}">用户详情页</router-link> -->
      <router-link :to="{  name:'User',params:{name:'liying',id:1001,age:18}}">用户详情页</router-link>|
      <router-link to="/details/111/16900">课程类别报价</router-link>|
      <router-link to="/test/666/888">测试页面</router-link>|
      <router-link to="/count">vuex</router-link>
     
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
