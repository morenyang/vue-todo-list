<template>
  <div id="todo">
    <navbar></navbar>
    <things-panel></things-panel>
    <footer-panel></footer-panel>
  </div>
</template>

<script>
  import './assets/stylesheets/bootstrap.min.css'
  import "./assets/stylesheets/fonts.css"

  import Navbar from './components/Navbar'
  import ThingsPanel from './components/ThingsPanel'
  import FooterPanel from './components/FooterPanel.vue'

  export default {
    name: 'app',
    components: {
      Navbar,
      ThingsPanel,
      FooterPanel
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/

  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
  body
    margin 0
    min-height 100vh
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color #f4f4f4
    #app
      font-family: 'Avenir', Helvetica, Arial, sans-serif
      color: #2c3e50
      background-color #f4f4f4
      min-height inherit
</style>
