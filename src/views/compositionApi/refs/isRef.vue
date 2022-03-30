<template>
  <div>
    <h1 class="title">isRef</h1>
    <p class="tip">判断是否为一个ref对象</p>
    <p>{{a.q}}</p>
  </div>
</template>
  
<script lang='ts'>
import { ref, isRef } from 'vue'
export default {
  setup() {
    const a = {
      q: 1,
    }
    const b = ref(a)
    const flagA = isRef(a)
    const flagB = isRef(b)
    console.log(flagA) // false
    console.log(flagB) //true
    return {
      a,
    }
  },
}
</script>
  
<style lang='less'>
</style>