<template>
  <ul>
    <li v-for="item in todos" @click="handleFinished(item)" :class="{finished: item.isFinished}">{{ item.label }}</li>
  </ul>
</template>

<script>
  /**
   * Created by MorenYang on 2017/3/28.
   */

  export default{
    name: 'list',
    props: ['todos'],
    methods: {
      handleFinished(item){
        this.$emit('handleFinished', item);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .finished {
    color #ccc
    text-decoration line-through
  }
</style>
