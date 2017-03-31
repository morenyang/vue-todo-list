<template>
  <li :class="['todo-thing', 'list-item',{finished: thing.isFinished}, {'not-moving': !moving}, {moving: moving}]"
      :style="styleObject">
    <input v-show="!editing" class="thing-checkbox" type="checkbox" :checked="thing.isFinished" @click="finishHandle">
    <v-touch @press="editHandle" @panend="handlePanEnd" v-on:panmove="handlePanMove" :pan-options="panOptions">
      <label v-show="!editing" :class="['thing-label', {star: thing.star}]"
             @dblclick="editHandle"
             @click="starHandle">
        {{thing.label}}
    </label>
    </v-touch>
    <input v-show="editing" class="thing-editing-input" v-model="label" @blur="handleDoneEdit"
           @keyup.enter="handleDoneEdit" @keyup.esc="handleCancelEdit" v-todo-focus="editing"/>
    <button class="thing-delete" @click="deleteHandle" v-show="!onThingsEditing"></button>
  </li>
</template>

<script>
  /**
   * Created by MorenYang on 2017/3/13.
   */
  import VueTouch from 'vue-touch'
  import Vue from 'vue'
  Vue.use(VueTouch, {name: 'v-touch'});

  export default{
    name: 'itemCard',
    props: ['thing', 'onThingsEditing'],
    data() {
      return {
        editing: false,
        label: '',
        panAllow: true,
        panOptions: {direction: 'horizontal', threshold: 0},
        styleObject: {'margin-left': 0 + 'px'},
        moving: false
      }
    },
    beforeMount(){
      this.label = this.thing.label
    },
    methods: {
      finishHandle(){
        this.$emit('thingFinish', this.thing)
      },
      deleteHandle(){
        this.$emit('thingDelete', this.thing)
      },
      editHandle(){
        this.panAllow = false;
        this.editing = true;
        this.$emit('onThingEdit', true)
      },
      starHandle(){
        this.$emit('thingStar', this.thing)
      },
      handleDoneEdit(){
        this.editing = false;
        this.panAllow = true;
        this.$emit('onThingEdit', false);
        this.label !== '' ? this.$emit('thingEdit', {thing: this.thing, newLabel: this.label}) : this.handleCancelEdit
      },
      handleCancelEdit(){
        this.editing = false;
        this.panAllow = true;
        this.label = this.thing.label;
        this.$emit('onThingEdit', false);
      },
      handlePanMove(event){
        this.panAllow ? this.styleObject['margin-left'] = (event.offsetDirection === 4 ? 1 : -1) * event.distance + 'px' : this.styleObject['margin-left'] = '0px';
        this.moving = true;
      },
      handlePanEnd(){
        this.moving = false;
        this.styleObject['margin-left'] = '0px';
      }
    },
    watch: {
      panAllow: {
        handler(){
          if (!this.panAllow) {
            this.styleObject['margin-left'] = '0px';
          }
        }
      }
    },
    directives: {
      'todo-focus': function (el, value) {
        if (value) {
          el.focus()
        }
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
    min-height 64px
    border-color = #e6e6e6
    border-left-color: border-color
    border-right-color: border-color
    &.not-moving {
      transition all .3s ease-out
    }
    .thing-checkbox {
      padding 12px 0
      text-align: center;
      width: 50px;
      box-sizing border-box !important
      /* auto, since non-WebKit browsers doesn't support input styling */
      height 64px
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
      @media screen and (max-width 767px) {
        padding 17px 0
        width 40px
      }
      &:after {
        content url("../assets/img/checkbox.svg")
        @media screen and (max-width 767px) {
          content url("../assets/img/sm_checkbox.svg")
        }
      }
      &:checked {
        background white !important
        &:after {
          content: url("../assets/img/checkbox_checked.svg")
          @media screen and (max-width 767px) {
            content url("../assets/img/sm_checkbox_checked.svg")
          }
        }
      }
    }
    .thing-label, .thing-editing-input {
      margin -15px 0
      padding 15px 50px 15px 55px
      font-size 24px
      line-height 34px
      vertical-align middle
      width 100%
      font-weight 400
      font-family "Helvetica Neue", "SF Pro SC", "HanHei SC", "PingFang SC", Helvetica, Arial, sans-serif
      @media screen and (max-width 767px) {
        font-size 20px
        padding-left 45px
      }
      &.star {
        color #42b983
        font-weight 700
      }
    }
    .thing-editing-input {
      border 1px solid #42b983
      outline none
      margin -19px 0 -16px
      padding 19px 50px 15px 45px
      border-radius 0 !important
      box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
      z-index 3
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
      display none
      @media screen and (min-width 640px) {
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
      @media screen and (max-width 767px) {
        display none
      }
    }
  }
</style>
