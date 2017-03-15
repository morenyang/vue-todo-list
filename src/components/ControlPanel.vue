<template>
  <div class="control-panel">
    <span class="things-count">{{counts}} {{pluralize}} left</span>
    <ul class="card-toggle">
      <li @click="cardToggle(0)" :class="{active: (card == 'all')}">All</li>
      <li @click="cardToggle(1)" :class="{active: (card == 'active')}">Active</li>
      <li @click="cardToggle(2)" :class="{active: (card == 'star')}">Star</li>
      <li @click="cardToggle(3)" :class="{active: (card == 'completed')}">Completed</li>
    </ul>
  </div>
</template>

<script>
  /**
   * Created by MorenYang on 2017/3/14.
   */

  export default{
    name: 'controlPanel',

    props: ['remaining', 'card', 'stars'],

    methods: {
      cardToggle(index){
        switch (index) {
          case 0:
            this.$emit('cardToggle', 'all');
            break;
          case 1:
            this.$emit('cardToggle', 'active');
            break;
          case 2:
            this.$emit('cardToggle', 'star');
            break;
          case 3:
            this.$emit('cardToggle', 'completed');
            break;
          default:
            this.$emit('cardToggle', 'all')
        }
      }
    },

    computed: {
      counts(){
        return this.card == 'star' ? this.stars : this.remaining
      },
      pluralize(){
        return this.card == 'star' ? parseInt(this.stars) <= 1 ? 'star' : 'stars' : parseInt(this.remaining) <= 1 ? 'item' : 'items'
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
    padding 10px 15px
    font-weight 100
    font-size 16px
    font-family "Roboto", Helvetica, Arial, sans-serif
    .things-count {
      color #777
    }
    .card-toggle {
      margin: -22px 0;
      padding: 0;
      list-style: none;
      position: absolute;
      right: 0;
      left: 0;
      text-align center
      & > li {
        line-height 22px
        height 22px
        display inline
        text-align center
        margin 0 3px
        color #bbb
        &.active {
          color #42b983
          font-weight 700
        }
      }
    }
  }
</style>
