<template>
  <div class="things-panel">
    <div class="container">
      <div class="layout">
        <things-input @pushNewThing="pushHandle"></things-input>
        <ul>
          <li v-for="item in things">
            {{item.label}}
          </li>
        </ul>
        <button @click="clearHandle">clear</button>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * Created by MorenYang on 2017/3/13.
   */

  import Store from '../utils/store'

  import ThingsInput from './Input.vue'

  export default{
    name: 'thingsPanel',

    components: {
      ThingsInput
    },

    data(){
      return {
        things: Store.fetch() || [],
      }
    },

    methods: {
      pushHandle(thing){
        this.things.push(thing);
      },
      clearHandle(){
          Store.clear();
          this.things = [];
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
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

</style>
