<template>
  <div class="wrap">
    <el-button type="success" class="button" @click="handleClick">
      Info
    </el-button>
  </div>
</template>

<script setup>
import axios from '@/api/index.js'
import realAxios from 'axios'
import { onMounted } from 'vue'

const a = 1

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
  // console.log('哈哈')
})
</script>

<style scoped lang="less">
.wrap {
  height: 100vh;
  width: 100vw;
  background-color: aqua;

  .button {
  }
}
</style>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
