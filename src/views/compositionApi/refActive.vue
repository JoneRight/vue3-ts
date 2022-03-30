<template>
  <div class="about">
    <h1>{{cc}}</h1>
    <h1>{{aa}}</h1>
  </div>
</template>
<script lang="ts">
import { ref, reactive, toRefs } from 'vue'
export default {
  setup() {
    const aa = ref(23)
    const state = reactive({
      cc: 12,
      dd: 33,
    })
    console.log(state.cc)
    console.log(aa.value)
    return {
      ...toRefs(state),
      aa,
    }
  },
}
</script>
