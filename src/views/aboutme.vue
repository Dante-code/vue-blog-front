<template>
  <div class="container">
      <div class="head">VOKNET</div>
      <div class="words">
        <span class="word up">N</span>
        <span class="word down">O</span>
        <span class="word down">W</span>
        <span class="word up">,</span>
        <span class="word up">S</span>
        <span class="word down">U</span>
        <span class="word up">M</span>
        <span class="word down">M</span>
        <span class="word up">E</span>
        <span class="word up">R</span>
      </div>
      <self-introduce></self-introduce>
  </div>
</template>

<script>
export default {
  name: 'aboutme',
  created() {
    console.log(document)
  },
  components: {
    SelfIntroduce: () => import('../components/selfintroduce/index')
  }
}
</script>

<style lang="less" scoped>
  .container{
    background: url('https://wx2.sbimg.cn/2020/07/29/PpuzA.jpg') ;
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


  .container .head,
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
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      z-index: -4;
      background: rgba(0,0,0,0.8);
  }
  .head{
      // line-height: -30rem;
      font-weight: bold;
      background: url('https://wx2.sbimg.cn/2020/07/29/PpuzA.jpg') ;
      background-size: 50% 46%;
      z-index: -1;
      font-size: 15rem;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      animation: bkgimgmoving 15s linear infinite;
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