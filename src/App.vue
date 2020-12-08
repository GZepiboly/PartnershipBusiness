<template>
  <div id="app">
    <HeaderModel class="header-model" />
    <router-view />
    <FooterModel class="footer-model" />
  </div>
</template>
<script>
import HeaderModel from './components/HeaderModel'
import FooterModel from './components/FooterModel'
export default {
  components: {
    HeaderModel,
    FooterModel,
  }
  // 測試倉庫變化
}
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .header-model {
    height: 80px;
    width: 100%;
    background: red;
  }
  .footer-model {
    height: 750px;
    width: 100%;
    background: #000;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
