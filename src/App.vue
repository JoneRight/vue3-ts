<template>
  <a-switch v-model:checked="checked" checked-children="开" un-checked-children="关" />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>
<script>
import {reactive,toRefs,defineComponent} from 'vue'
export default defineComponent({
  setup() {
    const state = reactive({
      checked: true
    })
    return{
      ...toRefs(state)
    }
  }
})
</script>
<style lang='less'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
