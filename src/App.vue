<template>
  <!-- //left to right -->
  <div v-if="layout" id="app">
    <div class="leftNav">
      <LeftNav />
    </div>
    <div class="content">
      <div class="title">
        <span>{{title}}</span>
      </div>
      <div class="rightContent">
        <router-view />
      </div>
    </div>
    <!-- <div class="right">........</div> -->
  </div>

<!-- //top top bottom -->
  <div v-else id="top_bottom">
    <div class="top">
      <span>{{title}}</span>
    </div>
    <div class="center">
      <router-view />
    </div>
    <div class="footer">
      <p>第一行</p>
      <p>第二行</p>
      <p>第三行</p>
    </div>
  </div>
</template>

<script>
import LeftNav from '@/components/nav/Left'
export default {
  name: 'App',
  components: {
    LeftNav
  },
  data () {
    return {
      title: this.$route.name,
      layout:true
    }
  },
  computed: {
    getTitle: function () {
      return this.$route.name
    }
  },
  watch: {
    getTitle (newVal, oldVal) {
      this.title = newVal
    }
  },
  mounted(){
    console.log(this.$store.state.layout)
    if(this.$store.state.layout=='left_right'){
      this.layout=true
    }else{
      this.layout=false
    }
  },
}
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  font-size: 0.16rem;

}

.leftNav {
  max-width: 30%;
  height: 100vh;
  display: block;
  overflow-y: auto;
  background-color: rgb(84, 92, 100);
}
.content {
  overflow-y: auto;
  flex: 1;
  width: auto;
  text-align: center;
  display: flow-root;
  .home {
    height: calc(100vh - 68px);
    overflow-y: auto;
  }
  .title {
    text-align: left;
    padding-left: 20px;
    line-height: 64px;
    box-shadow: 0px 3px 4px #888888;
  }
  .rightContent {
    padding: 20px;
  }
}

::-webkit-scrollbar {
 /*滚动条整体样式*/
 width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
 height: 1px;
 }
::-webkit-scrollbar-thumb {
 /*滚动条里面小方块*/
 border-radius   : 10px;
 background-color: skyblue;
 background-image: -webkit-linear-gradient(
     45deg,
     rgba(255, 255, 255, 0.2) 25%,
     transparent 25%,
     transparent 50%,
     rgba(255, 255, 255, 0.2) 50%,
     rgba(255, 255, 255, 0.2) 75%,
     transparent 75%,
     transparent
 );
 }
::-webkit-scrollbar-track {
 /*滚动条里面轨道*/
 box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
 background   : #ededed;
 border-radius: 10px;
 }


 //top to bottom
 #top_bottom{
    font-size: 0.16rem;
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   .top{
      text-align: left;
      padding-left: 20px;
      line-height: 64px;
      box-shadow: 0px 3px 4px #888888;
   }
   .center{
     flex: 1;
     overflow-y: scroll;
   }
   .footer{
     max-height: 120px;
     background-color: #eee;
     p{
       text-align: center;
     }
   }
 }
</style>
