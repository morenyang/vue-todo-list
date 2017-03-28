<template>
  <div id="todo">
    <input v-model="newTodo" @keyup.enter="handleAddNew"/>
    <div class="tabs">
      <span v-for="item in tabList" :class="['tab' , {'active': isTabActive(item)}]" @click="toggleTab(item)">{{ item
        }}</span>
    </div>
    <list :todos="filters" @handleFinished="handleFinished"></list>
  </div>
</template>

<script>
  import List from './components/list'

  const STORAGE_KEY = 'vue-todo';
  let Store = {
    save(items){
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    },
    fetch(){
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || []
    }
  };

  let Filters = {
    All(items){
      return items
    },
    Active(items){
      return items.filter(item => {
        return !item.isFinished
      })
    },
    Finished(items){
      return items.filter(item => {
        return item.isFinished
      })
    }
  };

  export default {
    name: 'todo',
    components: {
      List
    },
    data(){
      return {
        newTodo: '',
        todos: Store.fetch() || [],
        tab: 'All',
        tabList: [
          'All', 'Active', 'Finished'
        ]
      }
    },
    methods: {
      handleAddNew(){
        this.newTodo.length !== 0 ? this.todos.push({label: this.newTodo, isFinished: false}) : void(0);
        this.newTodo = '';
      },
      handleFinished(item){
        item.isFinished = !item.isFinished
      },
      isTabActive(tabName){
        return tabName === this.tab
      },
      toggleTab(tabName){
        this.tab = tabName;
      }
    },
    watch: {
      todos: {
        handler: (todos) => {
          Store.save(todos)
        },
        deep: true
      }
    },
    computed: {
      filters(){
        return Filters[this.tab](this.todos)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #todo {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .tab {
    margin 10px
    color #777
    &.active {
      color #2c3e50
      font-weight 700
    }
  }
</style>
