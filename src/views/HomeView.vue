<template>
  <div class="home">
    <p class="vae">
      {{dialogFormVisible}}
    </p>
    123
    <a-button type="primary" danger @click="show_dialog">Primary</a-button>
    <a-button type="primary">Primary Button</a-button>
    <a-button type="link">Link</a-button>
    <a-button type="primary" @click="change_theme('#992777')">默认</a-button
    ><br /><br />
    <a-button type="primary" @click="change_theme('#F5222D')">薄暮</a-button
    ><br /><br />
    <a-button type="primary" @click="change_theme('#FA541C')">火山</a-button
    ><br /><br />
    <a-button type="primary" @click="change_theme('#FAAD14')">日暮</a-button
    ><br /><br />
    <a-button type="primary" @click="change_theme('#13C2C2')">明青</a-button
    ><br /><br />
    <a-button type="primary" @click="change_theme('#52C41A')">极光绿</a-button
    ><br /><br />
    <a-button type="primary" @click="change_theme('#1890FF')">拂晓蓝</a-button
    ><br /><br />
    <a-button type="primary" @click="change_theme('#2F54EB')">极客蓝</a-button
    ><br /><br />
    <a-button type="primary" @click="change_theme('#722ED1')">酱紫</a-button
    ><br /><br />
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
export default {
    setup()
    {
      let dialogFormVisible=ref(false)
      let show_dialog=()=>{
        dialogFormVisible.value=!dialogFormVisible.value;
      }
      let change_theme=(primaryColor)=>{
        window.less.modifyVars({
        "@primary-color": primaryColor
      })
      }
      return{
        show_dialog,
        change_theme,
        dialogFormVisible
      }
    }
}
</script>
<style lang="less">
  @pink: red;
  .home{
    .vae{ 
      color: @pink;
    }
  }
</style>
  