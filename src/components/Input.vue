<template>
  <div class="things-input">
    <div class="title">
      {{title}}
    </div>
    <input v-model="label" @keyup.enter="addNew" id="main-input"/>
  </div>
</template>

<script>
  /**
   * Created by MorenYang on 2017/3/13.
   */

  export default{
    name: 'App',
    data () {
      return {
        title: 'remember to',
        thing: {},
        label: ''
      }
    },
    methods: {
      addNew(){
        let label = this.label;
        if (label == '') return;
        this.thing = {
          label: label,
          isFinished: false,
          createDate: new Date(),
          star: false,
          finishedDate: null
        };
        this.$emit('pushNewThing', this.thing);
        this.label = '';
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .things-input {
    margin 10px 0 20px
    width 100%
    @media screen and (max-width 767px){
      margin-top 5px
    }
    .title{
      font-size 54px
      line-height 1
    }
    #main-input {
      color #2c3e50
      width 100%
      border 1px solid #eee
      height 60px
      padding 16px 14px
      font-size 24px
      line-height 26px
      vertical-align middle
      outline none
      box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)
      border-radius 2px
      -webkit-appearance: none
      transition-property box-shadow
      transition-duration .2s
      transition-timing-function ease-in-out
      &:focus {
        box-shadow 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08)
      }
    }
  }
</style>
