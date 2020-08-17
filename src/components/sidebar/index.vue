<template>
  <div class="sidebar" :class="{appear: !hamburger_active}">
      <!-- <h2>123456</h2> -->
      <sidebar-block 
        v-for="(subMenu,index) in menuList" 
        :key="index" 
        :subMenu="subMenu">
      </sidebar-block>
  </div>

</template>

<script>
import { log } from 'three'
export default {
  name: 'SideBar',
  components: {
    sidebarBlock: () => import('./components/sidebarBlock.vue')
  },
  props: {
    hamburger_active: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return{
      menuList: [
        {
          menuName: '首页',
          url: 'home'
        }, {
          menuName: '关于我',
          url: 'aboutme'
        }, {
          menuName: '更多',
          url: 'more'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .sidebar{
    position: fixed;
    // left: 3rem;
    background-color: #5f56a7e1;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: 1000;
    // animation: come 2 linear infinite;
  }
  .appear{
    display: none;
  }
</style>