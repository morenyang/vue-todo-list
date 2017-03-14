<template>
  <div class="things-panel">
    <div class="container">
      <div class="layout">
        <div class="title">
          {{title}}
        </div>
        <div class="inner-card">
          <things-input @pushNewThing="pushHandle"></things-input>
          <ul :class="['things-list', {hidden: things.length == 0}]">
            <item-card v-for="item in things" :thing="item" :key="item.createDate" @thingFinish="finishHandle" @thingDelete="deleteHandle"></item-card>
          </ul>
        </div>
        <!--<button @click="clearHandle">clear</button>-->
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * Created by MorenYang on 2017/3/13.
   */

  import Store from '../utils/store'

  import ThingsInput from './Input'
  import ItemCard from './ItemCard'

  export default{
    name: 'thingsPanel',

    components: {
      ThingsInput,
      ItemCard
    },

    data(){
      return {
        title: 'remember to',
        things: Store.fetch() || []
      }
    },

    methods: {
      pushHandle(thing){
        this.things.push(thing);
      },
      clearHandle(){
        Store.clear();
        this.things = [];
      },
      finishHandle(thing){
          thing.isFinished = !thing.isFinished
      },
      deleteHandle(thing){
          this.things.splice(this.things.indexOf(thing), 1)
      }
    },

    watch: {
      things: {
        handler: function (things) {
          Store.save(things)
        },
        deep: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .layout {
    width 640px
    margin 30px auto 0
    @media screen and (max-width: 767px) {
      margin-top 5px
      width 640px
    }
    @media screen and (max-width 639px) {
      width 100%
    }
  }

  .title {
    margin-top 20px
    font-size 54px
    line-height 1
    font-family "Roboto", Helvetica, Arial, sans-serif
    font-weight 100
    color #2c3e50
    @media screen and (max-width 767px) {
      font-size 40px
      margin-bottom 5px
    }
  }

  .inner-card {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .things-list {
    list-style none
    padding 0
    border-top: 1px solid #e6e6e6;
    & li {
      position: relative;
      font-size: 24px;
      border-bottom: 1px solid #ededed;
    }
    & li:last-child {
      border-bottom: none;
    }
  }

</style>
