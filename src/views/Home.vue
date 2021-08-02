<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>测试</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Cookie from "js-cookie"
import {loadDataByPage} from '@/api/system.js'
// import {loadDataByPage} from 'cobona_public_api'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted(){
    loadDataByPage()
  }
}
</script>
<style lang="less" scoped>
  .home{
    text-align: center;
  }
  p{
    font-size: 0.26rem;
  }
</style>
