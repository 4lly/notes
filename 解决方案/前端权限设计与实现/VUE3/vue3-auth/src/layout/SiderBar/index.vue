<!--
 * @Author: cirs
 * @Date: 2024-09-12 16:59:06
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 18:36:22
 * @FilePath: /vue3-auth/src/layout/SiderBar/index.vue
 * @Description: 
 * 
-->
<template>
  <el-menu mode="vertical">
    <sidebar-item v-for="menu in munes" :key="menu.path" :item="menu"></sidebar-item>
  </el-menu>
</template>
<script setup lang="ts" >
import { useMenuStore } from '@/stores/menu';
import { computed } from 'vue';
import SidebarItem from './SidebarItem.vue'

const menuStore = useMenuStore()
const munes = computed(()=>menuStore.state.authMenus)

</script>
<style lang="scss" scoped>
 
</style>