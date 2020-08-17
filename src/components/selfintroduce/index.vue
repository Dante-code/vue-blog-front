<template>
  <el-container class="selfintroduce">
    <el-header height="7rem" class="header">
      <!-- <img src="../../assets/img/selfintroduce.jpg" alt="" class="selfintroduce"> -->
      <img src="../../assets/img/headimg.jpg" alt="" class="headimg">
      <h3>Dante</h3>
      
    </el-header>
    <el-divider class="divider" />
    <el-main height="" class="main">
        <h5 class="self">我的自我教我一种新的骄傲，我把这种骄傲交给世人：
        不再把头埋进上天的事情的沙堆里，而要自由地昂起头，昂起这大地的头，为大地创造意义</h5>
    </el-main>
    <el-divider class="divider" />
    <el-footer height="4rem">
      <a href="https://github.com/Dante-code">
        <svg class="icon github" aria-hidden="true">
          <use xlink:href="#icon-huaban88"></use>
        </svg>
      </a>

    </el-footer>
    
    
  </el-container>
</template>

<script>
export default {
  name: 'SelfIntroduce'
}
</script>

<style lang="less" scoped>
  .github{
    width: 2rem;
    height: 2rem;
  }
  .selfintroduce{
    margin: 5rem auto;
    width: 20rem;
    height: 25rem;
    border-radius: 10px;
    background-color: whitesmoke;
  }
  .divider{
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
  .header{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: url('../../assets/img/selfintroduce.jpg');
    background-size: cover;
    // padding: 0.1rem;
  }
  .main{
    padding-top: 0;
  }
  .headimg {
    width: 3rem;
    height: 3rem;
    margin-top: 4rem;
    border: 4px solid whitesmoke;
    border-radius: 50%;
  }
  .self{
    text-align:justify;
  }
  .selfintroduce{
    width: 20rem;
    height: 25rem;
  }
</style>