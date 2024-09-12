<!--
 * @Author: cirs
 * @Date: 2024-09-12 16:59:06
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 18:37:00
 * @FilePath: /vue3-auth/src/layout/index.vue
 * @Description: 
 * 
-->
<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <SiderBar/>
    </div>
    <div class="main-container">
      <RouterView/>
    </div>

  </div>
</template>
<script setup lang="ts" >
import SiderBar from './SiderBar/index.vue';
</script>
<style lang="scss" scoped>
.app-wrapper{
  display: flex;
  width: 100%;
  height: 100vh;
  .sidebar-container{
    min-width: 220px;
    background-color: pink;
  }
  .main-container{
    min-width: 220px;
    background-color: #fafafa;
  }
}
</style>