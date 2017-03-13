<template>
  <div class="things-input">
    <input v-model="label" @keyup.enter="addNew"/>
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
        thing: {},
        label: ''
      }
    },
    methods: {
      addNew(){
        let label = this.label;
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

<style>

</style>
