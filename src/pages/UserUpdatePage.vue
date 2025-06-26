<template>
  <template v-if="user">
    <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username','昵称',user.username)"/>
    <van-cell title="账户" :value="user.userAccount" />
    <van-cell title="头像" is-link to="/user/edit" >
      <img style="height: 48px" :src="user.avatarUrl">
    </van-cell>
    <van-cell title="性别" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender','性别',user.gender,-1)" />
    <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone','电话',user.phone,-1)"/>
    <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.email,-1)"/>
    <van-cell title="星球编号" :value="user.planetCode" />
    <van-cell title="注册时间" :value="user.createTime"  />
    <van-tabs swipeable>
      <van-tab v-for="index in 5" :title="'标签 ' + index">
        <van-cell title="" is-link to="/user/edit" :value="user.tags[index]" @click="toEdit('tags','标签',user.tags[index],index)" />
      </van-tab>
    </van-tabs>

  </template>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user.ts";

// const user = {
//   id : 9527,
//   username : 'shayu',
//   userAccount : '931',
//   avatarUrl : 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/shayu931/shayu.png',
//   gender : '男',
//   phone : '430821',
//   email : 'shayu-yusha@qq.com',
//   planetCode : '931',
//   createTime : new Date(),
// }
const user =ref();
const router = useRouter();

onMounted(async () =>{
  // const res = await myAxios.get('/user/current');
  // if (res.code === 0){
  //   user.value = res.data;
  //   showSuccessToast('获取用户信息成功');
  // } else {
  //   showFailToast('获取用户信息失败')
  // }
  user.value = await getCurrentUser();
  if (user.value.tags) {
    user.value.tags = JSON.parse(user.value.tags);
  }
})

const toEdit = (editKey: string,editName: string,currentValue: string,index?: number) =>{
  router.push({
    path:'/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
      index,
    }
  })
}

</script>

<style scoped>

</style>