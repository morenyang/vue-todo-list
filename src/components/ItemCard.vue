<template>
  <li :class="['todo-thing', {finished: thing.isFinished}]">
    <input class="thing-checkbox" type="checkbox" :checked="thing.isFinished" @click="finishHandle">
    <span class="thing-label">{{thing.label}}</span>
    <button class="thing-delete" @click="deleteHandle"></button>
  </li>
</template>

<script>
  /**
   * Created by MorenYang on 2017/3/13.
   */

  export default{
    name: 'itemCard',
    props: ['thing'],
    methods: {
      finishHandle(){
        this.$emit('thingFinish', this.thing);
//        this.thing.isFinished = !this.thing.isFinished
      },
      deleteHandle(){
          this.$emit('thingDelete', this.thing)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .todo-thing {
    color #2c3e50
    width 100%
    background white
  //box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)
    padding 15px 0
    border none
    height 64px
    .thing-checkbox {
      padding 12px 0
      text-align: center;
      width: 50px;
      /* auto, since non-WebKit browsers doesn't support input styling */
      height: 64px
      position absolute
      top 0
      bottom 0
      margin: auto 0;
      border: none; /* Mobile Safari */
      -webkit-appearance: none;
      appearance: none;
      color black
      display block
      user-select text
      writing-mode horizontal-tb
      outline none !important
      &:after {
        content url("../assets/checkbox.svg")
      }
      &:checked:after {
        content: url("../assets/checkbox_checked.svg")
      }
    }
    .thing-label {
      margin-left 55px
      font-size 24px
      line-height 34px
      vertical-align middle
      @media screen and (max-width 767px) {
        font-size 20px
      }
    }
    .thing-delete {
      position absolute
      color #af5b5e
      top: 0
      right: 10px;
      bottom: 0;
      width: 40px;
      height: 64px;
      margin: -3px 0 auto;
      font-size: 30px;
      line-height 1.0
      vertical-align top
      background rgba(0, 0, 0, 0)
      border: none
      font-weight 100
      font-family "Roboto", Helvetica, Arial, sans-serif
      padding 0
      outline none
      display none
      &:after {
        content: '×'
      }
    }
    &.finished {
      .thing-label {
        color #ededed

      }
    }
    &:hover > .thing-delete {
      display block
    }
  }
</style>
