
<template>
  <div class="wrap">
    <el-button type="success" @click="handleClick" class="button">Info</el-button>
  </div>
</template>

<script setup>
import axios from '@/api/index.js';
import { onMounted } from 'vue'


function handleClick() { 
    axios.get('/api/posts/1').then(
        (data) => {
            console.log(data.data);
        },
        (err) => {
            console.log(err);
        }
    );
    axios({
        method: 'get',
        url: '/api/posts/1',
    }).then(response => { 
        console.log('response', response.data);
    })
}

onMounted(() => {
    // console.log('哈哈')
})
</script>

<style scoped lang="less">
 .wrap {
    height: 100vh;
    width: 100vw;
    background-color: aqua ;

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