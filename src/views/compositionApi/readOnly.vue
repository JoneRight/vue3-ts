<template>
  <div class="about">
    <h1 class="title">readonly</h1>
    <h1>aa:{{aa}}</h1>
    <h1>aa_coped:只读不能修改：value={{aa_coped}}</h1>
    <h1>bb：{{bb}}}</h1>
  </div>
</template>
<script lang="ts">
import { ref, reactive, readonly } from 'vue'
export default {
  setup() {
    const aa = ref(23)
    const aa_coped = readonly(aa)
    const bb = reactive({
      i: 23,
      j: 44,
    })
    console.log(aa_coped.value)
    // aa_coped.value = 44 // 禁用改变值Set operation on key "value" failed: target is readonly
    // bb.i='wahah' //禁用 was accessed during render but is not defined on instance.
    return {
      aa_coped,
      aa,
      bb,
    }
  },
}
</script>
