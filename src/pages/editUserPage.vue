<template>
  <van-form @submit="onSubmit">
    <!-- 表单项的值会绑定到 editUser 对象的 currentValue 属性上。
     name 属性是表单项的名称标识符，用于在表单提交时识别该表单项。
     label 属性是表单项的标签文本，用于给表单项添加描述性的文本。
     placeholder作为占位符-->
    <van-field
        v-model="editUser.currentValue"
        :name="editUser.editKey"
        :label="editUser.editName"
    />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">

import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();
const editUser = ref({
  editKey: route.query.editKey,
  currentValue: route.query.currentValue,
  editName: route.query.editName,
})
const onSubmit = (values) => {
  //todo 把editKey currentValue editName提交到后台
  console.log('onSubmit',values);
}

</script>