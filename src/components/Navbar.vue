<template>
  <!--<h1>{{ msg }}</h1>-->
  <header class="navbar">
    <div class="container">
      <div class="brand">
        todos
      </div>
    </div>
  </header>
</template>

<script>
  /**
   * Created by MorenYang on 2017/3/13.
   */

  export default{
    name: 'Navbar',
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .navbar {
    font-family "Product Sans", Helvetica, Arial, sans-serif
    background-color #42b983
    height 50px
    padding 10px
    .brand {
      height: 30px
      width 100px
      margin auto
      color white
      font-size 22px
      line-height 30px
      vertical-align middle
      font-weight 200
    }
  }


</style>
