<template>
  <footer class="footer">
    &copy;{{year}}
    <a href="http://yangteng.me">MorenYANG</a> |
    <a href="https://github.com/morenyang/vue-todo-list">Open Source on GitHub</a>
  </footer>
</template>
<script>
  export default{
    name: 'footer',
    computed: {
      year(){
        return new Date().getFullYear()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  color = #aaa
  .footer {
    padding 50px 0 30px
    text-align center
    color color
    font-family Roboto, Helvetica, Arial, sans-serif
    font-weight 100
    a {
      color color
      text-decoration none
    }
  }
</style>
