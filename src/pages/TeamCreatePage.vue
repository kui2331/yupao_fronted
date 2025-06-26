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
const doJoinTeam = () => {
    router.push('/team/add');
}

/**
 * 搜索队伍
 * @param val
 * @returns {Promise<void>}
 */
const listTeam = async (val = '') => {
  const res = await myAxios.get("/team/list/my/create", {
    params: {
      searchText: val,
      pageNum: 1,
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

</script>

<template>
  <div id="teamPage">
    <van-search v-model="searchText" placeholder="搜索队伍" @search="onSearch" />
    <van-button type="primary" @click="doJoinTeam">创建队伍</van-button>
    <team-list-card :team-list="teamList" />
    <van-empty v-if="teamList?.length === 0" description="暂无队伍"/>
  </div>
</template>

<style scoped>

</style>