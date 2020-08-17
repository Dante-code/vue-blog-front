<template>
  <div class="sidebarBlock" @click="jump(subMenu.url)">
    <h2>{{ subMenu.menuName }}</h2>
  </div>
</template>

<script>
import { log } from 'three'
export default {
  props: {
    subMenu: {
      type: Object,
      default: null
    }
  },
  methods: {
    jump (url) {
      this.$router.push({ name: url })
    }
  }
}
</script>

<style lang="less" scoped>
  .sidebarBlock{
    border-bottom: white 1px dashed;
    color: white;
    font-family: '宋体';
    padding: 1rem;
    text-align: center;
  }
</style>