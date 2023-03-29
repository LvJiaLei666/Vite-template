<template>
  <el-form>
    <el-form-item label="帐号">
      <el-input placeholder="请输入帐号" v-model="loginFormModel.accountNumber" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input placeholder="请输入帐号" type="password" show-password v-model="loginFormModel.password" />
    </el-form-item>
    <el-form-item>
      <el-button @click="submit">提交</el-button>
    </el-form-item>


  </el-form>
</template>

<script setup lang="ts">

import type { loginModel, userInfo } from "@/api/Login/Login";
import { computed, onMounted, ref } from "vue";
import { getUserInfo, login } from "@/api/Login/Login";
import { useRequest } from "vue-request";

const loginFormModel = ref<loginModel>({ accountNumber: "", password: "" });

const submit = () => {
  login(loginFormModel.value).then(res => {
    console.log(res);
    console.log(res.data.userId);
  }).catch(err => {
    console.log(err);
  });
};

const { data, run } = useRequest(getUserInfo);

onMounted(() => {
  console.log(data);
});

</script>
