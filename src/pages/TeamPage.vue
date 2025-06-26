<script setup lang="ts">
import { useRouter } from 'vue-router';
import TeamListCard from "../components/TeamListCard.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showFailToast} from "vant/es";

const router = useRouter();
const teamList = ref([]);
const searchText = ref('');

//获取队伍列表
onMounted(async () => {
    const res = await myAxios.get('/team/list');
    if (res?.code === 0) {
        teamList.value = res.data;
    } else {
      showFailToast('获取队伍列表失败');
    }
})

//跳转到加入队伍页面
const toAddTeam = () => {
    router.push('/team/add');
}

/**
 * 搜索队伍
 * @param val
 * @returns {Promise<void>}
 */
const listTeam = async (val = '', status = 0) => {
  const res = await myAxios.get("/team/list", {
    params: {
      searchText: val,
      pageNum: 1,
      status
    },
  });
  if (res?.code === 0) {
    teamList.value = res.data;
  } else {
    showFailToast('加载队伍失败，请刷新重试');
  }
}

onMounted(async () => {
  listTeam();
})

const onSearch = (val) => {
  listTeam(val);
}

/**
 * 切换查询状态
 * @param name
 */
const onTabChange = (name) => {
  // 查公开
  if (name === 'public') {
    listTeam(searchText.value, 0);
  } else {
    // 查加密
    listTeam(searchText.value, 2);
  }
}

</script>

<template>
  <div id="teamPage">
    <van-search v-model="searchText" placeholder="搜索队伍" @search="onSearch" />
    <van-tabs v-model:active="active" @change="onTabChange">
      <van-tab title="公开" name="public" />
      <van-tab title="加密" name="private" />
    </van-tabs>
    <van-button class="add-button" type="primary" icon="plus" @click="toAddTeam"/>
    <team-list-card :team-list="teamList" />
    <van-empty v-if="teamList?.length === 0" description="暂无队伍"/>
  </div>
</template>

<style scoped>

</style>