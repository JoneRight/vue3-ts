<template>
  <div>
    <h1 class="title">hooks</h1>
    <p class="tip">直接通过导入onX 函数来注册声明周期钩子</p>
    <p>{{a}}</p>
  </div>
</template>
  
<script lang='ts'>
import { onMounted, onUpdated, onUnmounted, ref } from 'vue'

export default {
  setup() {
    const a = ref<string>('0')
    setTimeout(() => {
      a.value = '222'
    }, 1000)
    onMounted(() => {
      console.log('onMounted')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    return {
      a,
    }
  },
}
</script>
  
<style>
</style>