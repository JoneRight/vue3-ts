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
    const a_Comp = computed(() => a.value + 23)
    a.value = a.value + 2
    setTimeout(() => {
      a.value = a.value + 200
    }, 100)
    // a_Comp.value = a_Comp.value + 200  //   failed: computed value is readonly
    return {
      a,
      a_Comp,
    }
  },
}
</script>
  
<style lang="less">
</style>