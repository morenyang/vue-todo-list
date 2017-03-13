<template>
  <div id="app">
    <navbar></navbar>
    <img src="./assets/logo.png">
    <things-input @pushNewThing="pushHandle"></things-input>
    <ul>
      <li v-for="item in things">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  import './assets/js/jquery.min'
  import './assets/js/bootstrap.min'
  import './assets/stylesheets/bootstrap.min.css'

  import Store from './utils/store'

  import Hello from './components/Hello'
  import Navbar from './components/Navbar'
  import ThingsInput from './components/Input.vue'

  export default {
    name: 'app',
    components: {
      Navbar,
      ThingsInput
    },
    data(){
      return {
        things: Store.fetch() || [],
      }
    },
    methods: {
      pushHandle(thing){
        this.things.push(thing);
      }
    },
    watch: {
      things: {
        handler: function (things) {
          Store.save(things)
        },
        deep: true
      }
    }
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

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    color: #2c3e50
    text-align: center
</style>
