<!--
User:Shier
CreateTime:14:47
-->
<template>
  <user-card-list :userList="userList"></user-card-list>
  <van-empty v-if="userList.length === 0 || !userList" text="暂无推荐用户"></van-empty>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {showFailToast, showSuccessToast} from "vant/lib/vant.es";
import myAxios from "../plugins/myAxios.js";

import qs from 'qs'
import UserCardList from "./UserCardList.vue";

const route = useRoute();
const {tags} = route.query;

const userList = ref([]); //用户列表

onMounted(async () => {
  // 为给定 ID 的 user 创建请求
  const userListData = await myAxios.get('/user/recommend', {
    withCredentials: false,
    params: {
      pageSize: 5,
      pageNum: 1,
    },
  })
      .then(function (response) {
        console.log('/user/recommend succeed', response);
        showSuccessToast('请求成功');
        return response?.data?.records;
      })
      .catch(function (error) {
        console.log('/user/recommend error', error);
        showFailToast('请求失败')
      });
  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
})

</script>

<style scoped>

</style>