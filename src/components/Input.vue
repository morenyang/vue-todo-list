<template>
  <div class="things-input">
    <input v-model="label" @keyup.enter="addNew" id="main-input" type="text" maxlength="20"
           :placeholder="placeholder"/>
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
        placeholder: 'do your homework',
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

<style lang="stylus" rel="stylesheet/stylus" >
  font-roboto = "Roboto", Helvetica, Arial, sans-serif
  .things-input {
    margin 10px 0 0
    width 100%
    @media screen and (max-width 767px) {
      margin-top 5px
    }
    #main-input {
      color #2c3e50
      width 100%
      border none
      height 64px
      padding 18px 10px 18px 55px
      font-size 24px
      line-height 24px
      vertical-align bottom
      outline none
      //box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)
      box-shadow inset 0 -2px 1px rgba(0,0,0,0.03)
      border-radius 1px
      -webkit-appearance: none
      transition-property box-shadow
      transition-duration .2s
      transition-timing-function ease-in-out
      &::-webkit-input-placeholder{
        vertical-align bottom
        font-size 24px
        line-height 30px
        font-family font-roboto
        font-weight 100
        color #ddd
      }
      /*@media screen and (max-width 767px) {*/
        /*height 48px*/
        /*font-size 20px*/
        /*line-height 20px*/
        /*padding 13px*/
      /*}*/
    }
  }
</style>
