<template>
  <div>
    <h1 class="title">watchEffect</h1>
    <p class="tip">立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖编程时重新运行该函数</p>

  </div>
</template>
  
<script lang='ts'>
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    const a = ref<number | string>(20)
    // 立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖编程时重新运行该函数
    watchEffect(() => console.log(a.value))
    setTimeout(() => {
      a.value = '287'
    }, 1000)
  },
}
</script>
  
<style lang="less">
</style>