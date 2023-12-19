<script setup>

import { getList } from '@/api/index.js'
import { ref } from 'vue'

const dataList = ref([])
const getListDate = async () => {
  const req = await getList('win')
  dataList.value = req.data.data
}

const onOpen = (url) => {
  window.open(url, '_blank');
}

getListDate()

</script>

<template>
  <a-card hoverable :style="{ width: '240px', marginTop : '30px', marginLeft : '30px', display: 'inline-block' }" v-for="item in dataList">
    <template #cover>
      <div
          :style="{
          height: '180px',
          overflow: 'hidden',
        }"
      >
        <img
            :style="{ width: '180px', transform: 'translateY(-20px)' , height: '180px', margin: '30px'}"
            alt="dessert"
            :src="item.img || 'https://pic.imgdb.cn/item/65810c20c458853aef07bdab.png'"
        />
      </div>
    </template>
    <a-card-meta :title="item['itemName']">
      <template #description>
        {{ item.des || '没有简介捏~'}}
        <br/>
        <a-button type="primary" :style="{margin : '0 10px', marginTop: '20px'}" @click="onOpen(item.channel0Url)">下载链接</a-button>
        <a-button type="primary" status="success"  @click="onOpen(item.channel1Url)">备用下载</a-button>
      </template>
    </a-card-meta>
  </a-card>
  <a-empty v-if="dataList.length === 0"/>
</template>

<style scoped>
a-card {
  margin: 15px;
}
</style>
