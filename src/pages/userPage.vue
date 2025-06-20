
<template>
  <van-cell title="昵称" is-link to='/user/edit' :value="user.username"/>
  <van-cell title="账号" is-link to='/user/edit' :value="user.userAccount" />
  <van-cell title="头像" is-link to='/user/edit'>
    <img style="height: 48px" :src="user.avatarUrl"/>
  </van-cell>
  <van-cell title="性别" is-link to='/user/edit' :value="user.gender"
            @click="toEdit('gender', '性别', user.gender)"/>
  <van-cell title="电话" is-link to='/user/edit' :value="user.phone"
            @click="toEdit('phone', '电话', user.phone)"/>
  <van-cell title="邮箱" is-link to='/user/edit' :value="user.email"
            @click="toEdit('email', '邮箱', user.email)"/>
  <van-cell title="星球编号" :value="user.planetCode" />
  <van-cell title="注册时间" :value="user.createTime.toISOString()" />
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';

const router = useRouter();
const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    params: {
      a:1
    },
    //query部分用于传递查询参数。查询参数会附加在URL的末尾，以问号（?）开始
    //如果调用toEdit('123', 'username', 'JohnDoe')，
    // 那么URL是这样的：/user/edit?editKey=123&editName=username&currentValue=JohnDoe。
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
};
const user = {
  id: 1,
  username: '鱼皮',
  userAccount: 'dogYupi',
  avatarUrl: 'https://profile.csdnimg.cn/2/B/1/1_qq_56098191',
  gender: '男',
  phone: '12131133313',
  email: '23432444@qq.com',
  planetCode: '2220',
  createTime: new Date(),
};
</script>

<style scoped>

</style>