<template>
  <div>
    <h1 class="title">setUp1</h1>
    <p>{{aa}}</p>

  </div>
</template>
  
<script lang='ts'>
import { ref } from 'vue'
export default {
  props: {
    foo: { default: 22 },
  },
  setup(props) {
    const aa = ref(12)
    console.log(props)
    return {
      aa,
    }
  },
}
</script>
  
<style>
</style>