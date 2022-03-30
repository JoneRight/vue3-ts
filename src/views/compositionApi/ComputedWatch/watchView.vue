<template>
  <div>
    <h1 class="title">watch</h1>
    <p class="tip">和选项watch等效</p>
    <p class="tip">与watchEffect相比，watch允许我们</p>
    <ul>
      <li>惰性的执行副作用</li>
      <li>更具体的说明应触发侦听器重新运行的状态</li>
      <li>访问被侦听状态的先前值和当前值</li>
    </ul>

  </div>
</template>
  
<script lang='ts'>
import { ref, reactive, watch } from 'vue'
export default {
  setup() {
    // 侦听单个数据源  这个是ref 这个时候需要监听他的value值
    const aaa = ref(10)
    setTimeout(() => {
      aaa.value = 220
    }, 1000)
    watch(
      () => aaa.value,
      (count, prevCount) => {
        console.log(count, prevCount)
      },
    )

    // 侦听单个数据源  这个是ref 这个时候需要监听他的value值
    const fff = ref('ff')
    setTimeout(() => {
      fff.value = 'ffffffff'
    }, 1000)
    watch(
      () => fff.value,
      (count, prevCount) => {
        console.log(count, prevCount)
      },
    )

    // 侦听单个数据源  这个是reactive 这个时候需要监听他的value值
    const bbb = reactive({
      ccc: 121,
    })
    setTimeout(() => {
      bbb.ccc = 252
    }, 2000)
    watch(
      () => bbb.ccc,
      (count, prevCount) => {
        console.log(count, prevCount)
      },
    )

    // 侦听多个数据源
    watch([aaa, fff, bbb], (newVal, oldVal) => {
      console.log('newVal', newVal[0])
      console.log('newVal', newVal[2].ccc)
      console.log('oldVal', oldVal)
    })
  },
}
</script>
  
<style lang="less">
</style>