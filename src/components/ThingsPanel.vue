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
          <transition-group :class="['things-list', {editing : this.editing}]" v-if="(things.length !== 0)"
                            name="list" tag="ul">
            <item-card v-for="item in filters"
                       :thing="item"
                       :key="item"
                       @thingFinish="finishHandle"
                       @thingDelete="deleteHandle"
                       @thingStar="starHandle"
                       class="list-item"
            ></item-card>
          </transition-group>
          <control-panel v-if="(things.length !== 0)"
                         :remaining="remaining"
                         :card="card"
                         :stars="stars"
                         :filters="filters.length"
                         :editing="editing"
                         @cardToggle="cardToggleHandle"
                         @editStatusHandle="editStatusHandle"
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

    beforeMount(){
      this.things = Store.fetch() || [];
      this.banner = Banners.banner(this.card || 'all') || 'Remember';
      this.placeholder = Banners.things() || 'missing me'
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
      }
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
      border-bottom: 1px solid #ededed;

    }
    & li:last-child {
      border-bottom: none;
    }
    &.editing > li {
      @media screen and (max-width 767px) {
        .thing-delete {
          display block
        }
      }
    }
  }

  .list-enter-active {
    transition: margin-top .3s;
  }

  .list-enter {
    opacity: 0;
    transform: translateY(-64px);
    margin-top -64px
  }

  .list-leave-active {
    transition margin-top .3s;
    margin-top: -64px
    opacity 0
  }

  .list-move {
    transition: transform .5s;
  }


</style>
