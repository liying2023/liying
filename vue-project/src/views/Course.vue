<template>
<div>
    <h1>课程分类</h1>
    <router-link to="/course/fe">前端课程</router-link>|
    <router-link to="/course/rd">后端课程</router-link>
    
    <!-- <transition name="bounce" > -->
    <router-view></router-view>
  <!-- </transition> -->
    
</div>
  
</template>

<script>
export default {
    data() {
        return {
            
        }
    },

}
</script>

// <style lang="scss" scoped>
// .slide-fade-enter-active {
//   transition: all .3s ease;
// }
// .slide-fade-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .slide-fade-enter, .slide-fade-leave-to
// /* .slide-fade-leave-active for below version 2.1.8 */ {
//   transform: translateX(10px);
//   opacity: 0;
// }

// </style>