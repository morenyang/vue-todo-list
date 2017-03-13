<template>
  <div id="app">
    <navbar></navbar>
    <!--<img src="./assets/logo.png">-->
    <things-panel></things-panel>
  </div>
</template>

<script>
  import './assets/js/jquery.min'
  import './assets/js/bootstrap.min'
  import './assets/stylesheets/bootstrap.min.css'

  import Navbar from './components/Navbar'
  import ThingsPanel from './components/ThingsPanel'

  export default {
    name: 'app',
    components: {
      Navbar,
      ThingsPanel
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "assets/stylesheets/fonts.css"
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
  body
    margin 0
    min-height 100vh
    #app
      font-family: 'Avenir', Helvetica, Arial, sans-serif
      color: #2c3e50
      background-color #f4f4f4
      min-height inherit
</style>
