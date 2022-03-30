<template>
  <div>
    <h1 class="title">isProxy</h1>
    <p>检查对象是否是由raactive或readonly创建的proxy</p>
  </div>
</template>
  
<script lang='ts'>
import { ref, reactive, isProxy } from 'vue'
export default {
  setup() {
    const bbb = ref(0)
    const obj = reactive({ obj: 23 })
    const aaa = isProxy(obj)
    const ccc = isProxy(bbb)
    console.log(aaa) // true
    console.log(ccc) // false
    return {
      bbb,
    }
  },
}
</script>
  
<style lang="less">
</style>