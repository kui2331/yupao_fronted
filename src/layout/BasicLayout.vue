<template>
  <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

  <div id="content">
    <router-view />
  </div>

  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>

</template>

<script setup>

import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();
const DEFAULT_TITLE = 'Yupao H5';
const title = ref(DEFAULT_TITLE);

/**
 * 根据路由变化设置页面标题
 */
router.beforeEach((to, from) => {
  const toPath = to.path;
  const route = router.find((router) => {
    return to.path === to.path;
  })
  title.value = route?.title ?? DEFAULT_TITLE;
})

const onClickLeft = () => {
  router.back();
}
const onClickRight = () => {
  router.push('/search');
}

</script>

<style scoped>
#content {
  padding-bottom: 48px;
}

</style>


