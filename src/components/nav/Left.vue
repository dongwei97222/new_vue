<template>
  <div>
    <div :class="left" @click="collapse()">
      <i :class="isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'"></i>
    </div>
    <el-menu
      :class="leftW"
      :style="Height"
      default-active="/"
      :collapse="isCollapse"
      :unique-opened="true"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <template v-for="(item, index) in menuList">
        <template v-if="item.children">
          <el-submenu :index="item.path" :key="index">
            <template slot="title">
              <i :class="item.icon ? item.icon : ''" ></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="(itemChildren, indexChildren) in item.children">
              <el-menu-item :index="itemChildren.path" :key="indexChildren">{{ itemChildren.name }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.path" :key="index">
            <i :class="item.icon ? item.icon : ''" ></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'LeftNav',
  data: function () {
    return {
      leftW: 'w270',
      left: `L280`,
      Height: `height: ${(window.innerHeight - 20)}px`,
      menuList: router.options.routes,
      isCollapse: false
    }
  },
  created () {
    let self = this
    window.onresize = () => {
      self.Height = `height: ${(window.innerHeight - 20)}px`
    }
    console.log(router.options.routes)
  },
  methods: {
    collapse () {
      if (this.isCollapse) {
        this.isCollapse = false
        this.leftW = 'w270'
        this.left = 'L280'
      } else {
        this.isCollapse = true
        this.leftW = 'w64'
        this.left = 'L64'
      }
    }
  }
}
</script>

<style lang="less">
  .w270 {
    width: 270px;
  }
  .w64 {
    width: 64px;
  }
  .L280 {
    position: fixed;
    display: block;
    left: 268px;
    top: 21px;
    color: cornflowerblue;
    font-size: larger;
    cursor: pointer;
  }
  .L64 {
    position: fixed;
    display: block;
    left: 64px;
    top: 21px;
    color: cornflowerblue;
    font-size: larger;
    cursor: pointer;
  }
</style>
