<!--
 * @Author: cirs
 * @Date: 2024-09-11 13:21:06
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-12 17:42:15
 * @FilePath: /vue3-auth/src/views/Home/index.vue
 * @Description: 
 * 
-->


<template>
  <div>
    <h2>首页</h2>
    <div>{{ userStore.state.token }}</div>
    <router-link to="/profile">个人中心</router-link>
    <br/>
    <el-button type="primary" @click="getUserList">请求用户列表</el-button>
    <el-button type="primary" @click="loginout">退出登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { userListService } from "@/api/user";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
const userList = ref([])

const userStore = useUserStore();
const loginout = ()=>{
  userStore.toLoginOut()
  window.location.reload()
}
const getUserList = async()=>{
  const res = await userListService()
  userList.value = res.data.list  
}
</script>

<style scoped>
</style>
