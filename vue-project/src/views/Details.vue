<template>
<div>
    <p>课程详情888</p>
    <p>{{$route.params.id }}</p>
    <p>{{params.price}}</p>
</div>
  
</template>

<script>
export default {
    data() {
        return {
            params:this.$route.params
            
        }
    },

}
</script>

<style lang="scss" scoped>

</style>