<!--
 * @Author: cirs
 * @Date: 2024-09-12 18:29:13
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 18:44:21
 * @FilePath: /vue3-auth/src/layout/SiderBar/SidebarItem.vue
 * @Description: 
 * 
-->
<template>
  <router-link :to="item.path" v-if="!item?.children||item?.children?.length===0">
    <el-menu-item :index="item.path">
      <el-icon  v-if="item.icon">
        <component :is="item.icon"></component>
      </el-icon>
      <template #title>
        <span>{{item.title}}</span>
      </template>
    </el-menu-item>
  </router-link>
  <el-sub-menu v-else :index="item.path" teleported>
    
    <template #title>
      <el-icon  v-if="item.icon">
        <component :is="item.icon"></component>
      </el-icon>
        <span>{{item.title}}</span>
      </template>
      <SidebarItem v-for="child in item.children" 
      :key="child.path"
      :is-nest="true"
      :item="child"
      />
  </el-sub-menu>
</template>
<script setup lang="ts" >
import {RouterLink} from 'vue-router'
defineProps({
  item:{
    type:Object,
    required:true
  }
})


</script>