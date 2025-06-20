<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <van-divider content-position="left" v-if="activeIds.length === 0">无</van-divider>
  <van-row gutter="16" style="padding: 0 16px">
    <!--v-for 是 Vue.js 中的一个指令，用于循环渲染元素。
在这里，它遍历 activeIds 数组中的每一个元素，并为每个元素创建一个 <van-col> 组件。-->
    <van-col v-for="tag in activeIds">
      <van-tag  closeable size="small" type="primary" @close="doclose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>

  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchText = ref('');

const originTagList = [{
  text: '性别',
  children: [
    { text: '男', id: '男' },
    { text: '女', id: '女' },
    { text: '嬲', id: '嬲' },
  ],
}, {
  text: '年级',
  children: [
    { text: '大一', id: '大一' },
    { text: '大二', id: '大二' },
    { text: '大三', id: '大三' },
    { text: '大四', id: '大四' },
    { text: '大五', id: '大五' },
    { text: '大六', id: '大六' },
  ],
},
];
//显示的标签列表
let tagList = ref(originTagList);
/**
 *  根据用户输入的搜索文本，
 *  过滤出所有标签文本包含该搜索文本的子标签，
 *  并将结果更新到 tagList 中，
 *  从而实现根据用户输入动态显示标签列表的功能。
 *
 *  {...parentTag}是对象展开运算符的用法，用于创建 parentTag 的一个拷贝。
 *  浅拷贝意味着如果 parentTag 中的属性是对象，那么这些属性不会被复制，而是引用原来的对象
 * @param val
 */
const onSearch = (val) => {
  tagList.value = originTagList.map(parentTag =>{
    const tempChildren =  [...parentTag.children];
    const tempParentTag =  {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value))
    return tempParentTag;
  })
};

//取消  清空
const onCancel = () => {
  searchText.value = '';
  tagList.value = originTagList;
};


//已选中的标签数组
const activeIds = ref([]);

//当前选中的标签索引整数
const activeIndex = ref(0);


//关闭标签
//filter 是一个数组方法，用于创建一个新数组，其中包含通过所提供函数实现的测试的所有元素。
//在这里，filter 方法会对 activeIds.value
//数组中的每一个元素进行测试，测试函数是 (item => { return item !== tag; })。
const  doclose = (tag) =>{
  activeIds.value = activeIds.value.filter(item =>{
    return item !== tag;
  })
}

</script>

<style scoped>

</style>