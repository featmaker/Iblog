<template>
  <div class="ib-search-container text-right">
    <div class="ib-search">
      <Input v-model="value" @on-focus="onFocus" @on-blur="onBlur" icon="ios-search" placeholder="Enter something..." :style="{width: width + 'px'}" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        width: 100,
        value: ''
      }
    },
    methods: {
      onFocus() {
        this.width = 200
      },
      onBlur() {
        this.width = 100
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ib-search-container {
    flex-grow: 1;
  }
  .ivu-input-wrapper {
    transition: all .2s ease-in-out;
  }
</style>
