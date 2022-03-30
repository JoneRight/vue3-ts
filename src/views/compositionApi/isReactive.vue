<template>
  <div>
    <h1 class="title">isReactive</h1>
    <p>检查对象是否是由raactive创建的响应式代理</p>
    <p class="tip">如果代理的是readonly创建的，但包裹了由reactive创建的另一个代理，他也会返回true</p>
    <p class="tip">需要打开控制台查看</p>
  </div>
</template>
  
<script lang='ts'>
import { readonly, isReactive, reactive } from 'vue'
export default {
  setup() {
    const Jone = {
      name: 'zxk',
      age: 45,
    }
    const Bob = reactive({
      name: 'Bobbb',
      age: 12,
    })
    const JoneIsReactive = isReactive(Jone)
    console.log(JoneIsReactive) // false
    const BobIsReactive = isReactive(Bob)
    console.log(BobIsReactive) // true

    // 如果代理的是readonly创建的，但包裹了由reactive创建的另一个代理，他也会返回true
    const Tom = readonly(Bob)
    const TomIsReactive = isReactive(Tom)
    console.log(TomIsReactive) // true
  },
}
</script>
  
<style lang="less">
</style>