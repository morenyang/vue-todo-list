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
    height 60px
    padding 15px 0
    border-radius 0
    border none
    @media screen and (max-width 767px){
      height 48px
      padding 9px 0
    }
    .brand {
      height: 30px
      width 100px
      margin 0
      color white
      font-size 28px
      line-height 30px
      vertical-align middle
      font-weight 200
      text-align left
      @media screen and (max-width: 767px){
        margin auto
        text-align center
        font-size 24px
      }
    }
  }


</style>
