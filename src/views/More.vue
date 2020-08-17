<template>
  <div class="container">
    <div class="head">
      <div>WAITING</div>
      <div>more fun</div>
    </div>
    <!-- <div class="head2">WAITING</div> -->
  </div>
</template>

<script>

export default {
  name: 'more',
  components: {
  },
  methods: {
    init(){
    }
  }

}
</script>

<style lang="less" scoped>
  .container{
    background: url('https://wx2.sbimg.cn/2020/07/29/PpbaG.jpg') ;
    background-size: cover;
    text-align: center;
    user-select: none;
  }

  .up{
    z-index: 5;
  }
  .down{
    z-index: -2;
  }
  .word{
    position: relative;
    margin: 1rem;
  }
  .words{
    color: white;
    font-size: 7rem;
    margin-top: 5rem;
    font-weight: 600;
  }


  .container .head,.head2,
  .container::after{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: center;
  }



  .container{
      position: fixed;
      width: 100%;
      height: 100%;
  }
  .container::after{
      content: '';
      display: block;
      z-index: -4;
      background: rgba(0, 0, 0, 0.548);
  }
  .head,.head2{
      // line-height: -30rem;
      font-weight: bold;
      background: url('https://wx2.sbimg.cn/2020/07/29/PpbaG.jpg') ;
      background-size: cover;
      z-index: -1;
      font-size: 15rem;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      // animation: bkgimgmoving 15s linear infinite;
  }

  @keyframes bkgimgmoving{
    0% {
      background-position:left bottom;
    }
    100% {
      background-position:right bottom;
    }
  }
</style>