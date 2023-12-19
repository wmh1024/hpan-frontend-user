<template>
  <div class="menu-demo">
    <a-menu mode="horizontal" :default-selected-keys="['win']" @menu-item-click="(key) => changeMenu(key)">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '45px' }" disabled>
        <div
            :style="{
            width: '160px',
            height: '30px',
            borderRadius: '2px',
            cursor: 'text',
            color: 'black',
            fontSize: '16px',
            display: 'table-cell'
          }"
        ><img src="https://pic.imgdb.cn/item/65810c20c458853aef07bdab.png" alt="" width="30px"
              :style="{ verticalAlign: 'middle', marginRight : '10px'}">
          <span>hpan下载合集</span>
        </div>
      </a-menu-item>
      <a-menu-item key="win">Win下载</a-menu-item>
      <a-menu-item key="mac">Mac下载</a-menu-item>
    </a-menu>
  </div>
  <router-view></router-view>
  <footer>
    <a-space>
      <a-link href="https://wmhwiki.cn/">wmh's wiki</a-link>
      <a-link href="https://github.com/wmh1024">
        <icon-github/>
      </a-link>
      <a-link href="https://note.wmhwiki.cn/">wmh's Note</a-link>
    </a-space>
  </footer>
</template>

<script setup>

// 路由
import { useRouter } from 'vue-router'

const router = useRouter()
const changeMenu = (key) => {
  console.log(key)
  router.push(`/${key}`)
}
</script>

<style scoped>
.menu-demo {
  background: #eef0f3;
}

footer {
  margin-top: 50px;
  text-align: center;
  font-size: 18px !important;
}


</style>
