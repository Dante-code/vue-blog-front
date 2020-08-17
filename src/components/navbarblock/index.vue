<template>
  <div class="navbarblock" ref="block" :class="[blockcolor]">
    <slot name="pagename" />
  </div>
</template>

<script>
import Cookies from 'vue-cookies'
export default {
  name: 'navbarBlock',
  props: {
    blockcolor: {
      type: String,
      default: ''
    },
    pageurl: {
      type: String,
      default: ''      
    }
  },
  data () {
    return {
      isactive: false
    }
  },
  created () {

    // console.log(this.isactive);
  },
  mounted () {
    // if (this.$cookies.get('active') === this.pageurl) {
    //   this.$refs.block.classList.remove(this.blockcolor)
    //   console.log(this.$refs);
    // }
  }

}
</script>

<style lang="less" scoped>
  .navbarblock{
    position: relative;
    padding-left: 1rem;
    &::after{
      position: absolute;
      display: block;
      content: '';
      width: 0;
      top: -0.4rem;
      right: -2.3rem;
      height: 0;
      border-top: 2rem solid transparent;
      border-left: 2.5rem solid;
      border-bottom: 2rem solid transparent;
      z-index: 2;
    }

    &:hover{
      background-color: rgb(225,87,255);
      transition: 1.5s;
      letter-spacing: 0.2rem;
      &::after{
         border-left-color: rgb(225,87,255);
         transition: 1.5s;
      }
    }
  }

  .orange{
    background-color: rgb(250,150,20);
    &::after{
      border-left-color: rgb(250,150,20);
    }
  }

  .blue {
    background-color: rgb(84,159,254);
    &::after{
      border-left-color: rgb(84,159,254);
    }
  }

  .red {
    background-color: rgb(230,77,60);
    &::after{
      border-left-color: rgb(230,77,60);
    }
  }
  

  @keyframes bkgandborderChange{
    0%{
      border-left-color: rgb(80,68,166);
      // border-bottom: 1px dashed rgb(70,33,119);
    }
    25%{
      border-left-color: rgb(77,65,165);
      // background-color: red;
      // border-bottom: 1px dashed rgb(61,22,77);
    }
    50%{
      border-left-color: rgba(8, 6, 53, 0.815);
      // border-bottom: rgb(217,80,162) 1px dashed;
    }
    75%{
      // background-color: rgb(159,115,228);
      // border-bottom: 1px dashed rgb(159,115,228);
    }
    100%{
      border-left-color: rgb(80,68,166);
      // border-bottom: 1px dashed rgb(70,33,119);
    }
  }
</style>