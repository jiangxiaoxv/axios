<template>
  <div class="wrap">
    <el-button class="btn-primary" @click="handleClick">
      {{ b }}
    </el-button>
    <h1 class="tw-w-200 tw-bg-pink-50">我正在学习tailwind</h1>
    <div
      :class="[
        'lg:tw-bg-pink-400',
        'tw-h-12 tw-w-12',
        'md:tw-bg-green-500 xl:tw-bg-yellow-400 lg:tw-w-50',
      ]"
      @click="print"
    >
      空div
    </div>
    <div
      :class="['tw-bg-red-500']"
      class="tw-w-50 tw-h-20 tw-rounded-4xl lg:tw-w-[400px] content-auto"
    >
      我是overhidder
    </div>
    <div class="card">
      <h3>wohaha</h3>
    </div>
  </div>
</template>

<script setup>
import axios from '@/api/index.js'
import realAxios from 'axios'
import { onMounted, ref } from 'vue'

// const a = 1
const b = ref('my button')

function print() {
  console.log('wocao')
}

function handleClick() {
  const CancelToken = realAxios.CancelToken
  const source = CancelToken.source()

  axios
    .get('/api/posts/1', {
      cancelToken: source.token,
    })
    .then(
      (data) => {
        console.log(data.data)
      },
      (err) => {
        if (axios.isCancel(err)) {
          console.log('request canceled', err.message)
        } else {
          console.log(err)
        }
      }
    )
  // source.cancel('cancel')
  /* axios({
        method: 'get',
        url: '/api/posts/1',
    }).then(response => { 
        console.log('response', response.data);
    }) */
}

onMounted(() => {
  // console.log(a)
})
</script>

<style scoped lang="less">
.wrap {
  min-height: 100vh;
  min-width: 100vw;
  background-color: aqua;

  .button {
  }

  .test-div {
  }
}
</style>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  @apply tw-h-full tw-w-full;
}
</style>
