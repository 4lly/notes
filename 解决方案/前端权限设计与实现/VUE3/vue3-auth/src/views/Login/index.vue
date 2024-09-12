<!--
 * @Author: cirs
 * @Date: 2024-09-11 13:21:06
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-11 16:12:49
 * @FilePath: /vue3-auth/src/views/Login/index.vue
 * @Description: 
 * 
-->


<template>
  <el-form>
    <el-form-item prop="username">
      <el-input placeholder="用户名" v-model="loginForm.username"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="密码" v-model="loginForm.password"></el-input>
    </el-form-item>
    <el-button type="primary" @click="handleLogin">登陆</el-button>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, toRefs } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import useRouteQuery from "@/hooks/useRouteQuery";
const userStore = useUserStore();
const router = useRouter();


const loginState = reactive({ loginForm: { username: "", password: "" } });
const { loginForm } = toRefs(loginState);

const handleLogin = async () => {
  await userStore.toLogin(loginState.loginForm);

  const { redirect, otherQuery } = useRouteQuery();
  router.push({ path: redirect.value || "/home", query: otherQuery.value });
};
</script>

<style scoped>
</style>
