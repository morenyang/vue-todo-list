<template>
  <div class="control-panel">
    <span>{{remainCount}} {{pluralize}} left</span>
  </div>
</template>

<script>
  /**
   * Created by MorenYang on 2017/3/14.
   */

  export default{
    name: 'controlPanel',

    props: ['remainCount'],

    computed: {
      pluralize(){
        return parseInt(this.remainCount) <= 1 ? 'item' : 'items'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .control-panel {
    width 100%
    /*height 48px*/
    background white
    border-top 1px solid #ededed
    padding 15px
    font-weight 100
    font-size 20px / 1.0
    color #777
    font-family "Roboto", Helvetica, Arial, sans-serif
  }
</style>
