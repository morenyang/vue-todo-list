<template>
  <li :class="['todo-thing', {finished: thing.isFinished}]">
    <input class="thing-checkbox" type="checkbox" :checked="thing.isFinished" @click="finishHandle">
    <label :class="['thing-label', {star: thing.star}]"
           @dblclick="editHandle"
           @click="starHandle">
      {{thing.label}}
    </label>
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
        this.$emit('thingFinish', this.thing)
      },
      deleteHandle(){
        this.$emit('thingDelete', this.thing)
      },
      editHandle(){

      },
      starHandle(){
        this.$emit('thingStar', this.thing)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .todo-thing {
    color #2c3e50
    width 100%
    background white
    padding 15px 0
    border none
    min-height 64px
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
      display block
      user-select text
      /*writing-mode horizontal-tb*/
      outline none !important
      &:after {
        content url("../assets/img/checkbox.svg")
      }
      &:checked {
        background white !important
        &:after {
          content: url("../assets/img/checkbox_checked.svg")
        }
      }
    }
    .thing-label {
      margin -15px 0
      padding 20px 50px 20px 55px
      font-size 24px
      line-height 24px
      vertical-align middle
      width 100%
      font-weight 400
      @media screen and (max-width 767px) {
        font-size 20px
      }
      &.star {
          color #42b983
          font-weight 700
      }
    }
    .thing-delete {
      position absolute
      color #af5b5e
      top: -5px
      right: 10px;
      bottom: 0;
      width: 30px;
      height: 64px;
      margin: auto 0;
      font-size: 30px;
      line-height 1.0
      vertical-align top
      background rgba(0, 0, 0, 0)
      border: none
      font-weight 100
      font-family "Roboto", Helvetica, Arial, sans-serif
      padding 0
      outline none
      @media screen and (min-width 640px) {
        display none
        right 15px
      }
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
