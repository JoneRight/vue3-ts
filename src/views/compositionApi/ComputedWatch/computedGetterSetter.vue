<template>
  <div>
    <h1 class="title">computed</h1>
    <p class="tip">接受一个getter函数，并根据getter的返回值返回一个不可变的响应式ref对象</p>
    <p>a:{{a}}</p>
    <p>a_Comp:{{a_Comp}}</p>
  </div>
</template>
  
<script lang='ts'>
import { ref, computed } from 'vue'
export default {
  setup() {
    const a = ref(3)
    const a_Comp = computed({
      get: () => a.value,
      set: val => {
        a.value = val - 10
      },
    })
    a_Comp.value = 100
    console.log(a_Comp.value)
    console.log(a.value)
    return {
      a,
      a_Comp,
    }
  },
}
</script>
  
<style lang="less">
</style>