<template>
  <div>
    <h1 class="title">toRef</h1>
    <p class="tip">接受一个内部值，并返回一个响应式的ref对象，ref对象仅有一个.value property，指向该内部的值</p>
    <p>ref:{{a}}</p>
    <p>TS-ref:{{b}}</p>

    <p class="tip">toRef 可以用来为源响应式对象上的某个property新创建一个ref，然后，ref可以被传递，他会保持对其源property的响应式连接</p>
    <p>fooProp:{{fooProp}}</p>
  </div>
</template>
  
<script lang='ts'>
import { ref, reactive, toRef } from 'vue'
export default {
  setup() {
    const a = ref(2)
    console.log(a.value)
    setTimeout(() => {
      a.value++
    }, 1000)

    // ts 写法
    const b = ref<string | number>('wha') //数字或者字符串
    const c = ref<string>('wha') //数字或者字符串
    setTimeout(() => {
      b.value = 12 // ok
      // c.value = 1233 // warning
      console.log(b.value)
    }, 500)

    // toref 响应式连接
    const state = reactive({
      foo: 'Booboo',
      bar: 'Barrera',
    })
    const fooProp = toRef(state, 'foo')
    fooProp.value = '我是新改变的Vue3.0'
    console.log(fooProp.value) //我是新改变的Vue3.0
    console.log(state.foo) //我是新改变的Vue3.0  都发生了更改
    state.foo = '又改了一遍'
    console.log(fooProp.value) //又改了一遍
    console.log(state.foo) //又改了一遍
    return {
      a,
      b,
      c,
      fooProp,
    }
  },
}
</script>
  
<style lang='less'>
</style>