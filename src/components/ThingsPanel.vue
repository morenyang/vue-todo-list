<template>
  <div class="things-panel">
    <div class="container">
      <div class="layout">
        <div class="title" @click="bannerChanger">{{ banner }}</div>
        <div class="inner-card">
          <input-panel @pushNewThing="pushHandle"
                       :blank="(filters.length === 0)"
                       :placeholder="placeholder"
                       @placeholderChanger="placeholderChanger"
          ></input-panel>
          <transition-group :class="['things-list']" v-if="(things.length !== 0)"
                            name="list" tag="ul">
            <item-card v-for="item in filters"
                       :thing="item"
                       :key="item.createDate"
                       @thingFinish="finishHandle"
                       @thingDelete="deleteHandle"
                       @thingStar="starHandle"
                       @thingEdit="thingEditHandle"
                       class="list-item"
            ></item-card>
          </transition-group>
          <control-panel v-if="(things.length !== 0)"
                         :remaining="remaining"
                         :card="card"
                         :stars="stars"
                         :filters="filters.length"
                         @cardToggle="cardToggleHandle"
          ></control-panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * Created by MorenYang on 2017/3/13.
   */

  import Store from '../utils/store'
  import Filters from '../utils/filters'
  import Banners from '../utils/banners'

  import InputPanel from './InputPanel'
  import ItemCard from './ItemCard'
  import ControlPanel from './ControlPanel.vue'

  export default{
    name: 'thingsPanel',

    components: {
      InputPanel,
      ItemCard,
      ControlPanel
    },
    beforeCreate(){
      Store.init();
    },
    beforeMount(){
      this.things = Store.fetch() || [];
      this.bannerChanger();
      this.placeholderChanger();
    },

    data(){
      return {
        title: 'remember to',
        things: [],
        card: 'all',
        banner: '',
        placeholder: '',
        editing: false
      }
    },

    methods: {
      pushHandle(thing){
        this.things.push(thing);
        (this.card === 'all' || this.card === 'active') ? void(0) : this.card = 'all';
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
      },
      starHandle(thing){
        thing.star = !thing.star
      },
      cardToggleHandle(prop){
        this.card = prop
      },
      bannerChanger(){
        this.banner = Banners.banner(this.card || 'all') || 'Remember'
      },
      placeholderChanger(){
        this.placeholder = Banners.things()
      },
      editStatusHandle(){
        this.editing = !this.editing
      },
      thingEditHandle(item){
        item.thing.label = item.newLabel
      },
    },

    watch: {
      things: {
        handler: function (things) {
          Store.save(things)
        },
        deep: true
      },
      card(){
        this.bannerChanger();
      }
    },

    computed: {
      remaining(){
        return Filters.remaining(this.things).length
      },
      stars(){
        return Filters.star(this.things).length
      },
      filters(){
        return Filters[this.card](this.things)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .things-panel {
    padding 60px 0 0
    @media screen and (max-width 767px) {
      padding 50px 0 10px
    }
    .layout {
      width 640px
      margin 30px auto 0
      @media screen and (max-width: 767px) {
        margin-top 5px
        width 640px
      }
      @media screen and (max-width 640px) {
        width 100%
      }
    }
  }

  .title {
    margin-top 20px
    font-size 54px
    line-height 1
    font-family "Roboto", Helvetica, Arial, sans-serif
    font-weight 100
    color #2c3e50
    user-select none
    -webkit-user-select none
    -moz-user-select none
    -ms-user-select none
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
    margin 0
    border-top: 1px solid #e6e6e6;
    transition-duration .3s
    transition-timing-function ease-in-out
    & li {
      position: relative;
      font-size: 24px;
      border: 1px solid #ededed;
      border-left-width 0
      border-right-width 0
      margin-top -1px
    }
  }

  .list-enter-active {
    transition: margin-top .3s ease-in-out;
    z-index -999
  }

  .list-enter {
    opacity: 0;
    margin-top -64px !important
    z-index -999
  }

  .list-leave {
    background white
    transition background .2s ease
  }

  .list-leave-active {
    transition height .2s ease-in-out, margin-top .3s ease-in-out, opacity .2s ease-in-out, background .2s ease;
    margin-top: -64px !important
    opacity 0
    z-index -999
    height 64px !important
    overflow-y: hidden
    background white !important
  }

  .list-move {
    transition: transform .4s ease-in-out !important
  }


</style>
