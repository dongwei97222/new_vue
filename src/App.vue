<template>
  <div id="app">
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
      title: this.$route.name
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
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.leftNav {
  max-width: 30%;
  height: 100%;
  display: block;
  float: left;
      overflow-y: auto;
}
.content {
  overflow-y: auto;
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
</style>
