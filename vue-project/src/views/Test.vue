<template>
<div>
    <h1>重定向测试页面</h1>
    <button @click="goBack">后退</button>
    <button @click="go">跳转</button>
    <button @click="goHome">回到主页</button>
</div>
  
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.back();
        },
        go(){
            this.$router.go(-2)
        },
        goHome(){
            this.$router.push({
                path:'/User',
                query:{
                    name:"wanngwu",
                    id:888
                }
            })

        }

        
    }


}
</script>

<style lang="scss" scoped>

</style>