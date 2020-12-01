<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goForward">前进</button>
    <h1>count:{{$store.state.count}}</h1>
  </div>
</template>
<script>
export default {
  methods:{
    goForward(){
      this.$router.forward()
    },

  },
  beforeRouteEnter (to, from, next) {
    console.log('to',to);
    console.log('from',from);
    console.log('next',from);
    next();
  },
  beforeRouteLeave (to, from, next) {
    console.log('to',to);
    console.log('from',from);
    console.log('next',from);
    next();
  }
  

}
</script>
<style lang="scss" scoped>

</style>
