<template>
  <nav>
    <router-link to="/">Home</router-link>
    <hr>
    <router-link to="/readOnly">readOnly</router-link>
    <router-link to="/isProxy">isProxy</router-link>
    <router-link to="/isReactive">isReactive</router-link>
    <hr>
    <router-link to="/refActive">ref/reactive/toRefs</router-link>
    <router-link to="/toRef">toRef</router-link>
    <router-link to="/isRef">isRef</router-link>
    <hr>
    <router-link to="/computedView">computedView</router-link>
    <router-link to="/computedGetterSetter">computedGetterSetter</router-link>
    <router-link to="/watchEffect">watchEffect</router-link>
    <router-link to="/watchView">watchView</router-link>
    <hr>
    <router-link to="/setUp1">setUp</router-link>
    <hr>
    <router-link to="/hooksView">hooksView</router-link>
  </nav>
  <router-view />
</template>

<style lang="less">
@titleColor: #476582;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  font-size: 16px;
}

nav {
  display: flex;
  flex-direction: column;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
  }
}

nav a.router-link-exact-active {
  color: #42b983;
}
nav a:hover {
  color: #549c5a;
}
.title {
  color: @titleColor;
  padding: 0.25rem 0.5rem;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  display: inline-block;
  height: fit-content;
}
</style>
