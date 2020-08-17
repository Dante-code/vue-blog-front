<template>
  <el-container class="container">
    <el-header class="header">
    </el-header>
    <el-main class="main">
      <div v-html="passage"></div>
    </el-main>
    <el-footer>
      <music-box id="musicbox"></music-box>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'blogpassage',
  data (){
    let passage
    return {
      passage
    }
  },
  components:{
    musicBox: () => import('../components/musicbox/index')
  },
  async created() {
    const res = await this.$axios({
      url: '/foo/findfilebyhashdate',
      method: 'get',
      params: {
        hashdate: this.$route.query.hashDate
      }
    })
    this.passage = res.data
  },
}
</script>

<style lang="less" scoped>
  #musicbox{
    position: fixed;
  }
  .header{
    position: relative;
    overflow: hidden;
    padding: 0;
    .haijing{
      width: 150%;
      height: 2rem;
      overflow: hidden;
      position: relative;
      animation: haijingmoving 10s linear infinite;
    }
    .chushui{
      position: absolute;
    }
  }
  .container{
    width: 50%;
    background-color: whitesmoke;
    border-radius: 10px;
    margin-top: 4rem;
  }
  @media screen {
    @media (max-width: 800px){
      .container{
        width: 85%;
        margin: auto;
        &::after{
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: fixed;
          z-index: -5;
          background: url('../assets/img/blogpassageimg-mobile.jpeg');
          background-size: cover;
        }
      }
    }
    @media (min-width: 700px){
      .container{
          margin-left: 30%;
          &::after{
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: fixed;
          z-index: -5;
          background: url('../assets/img/blogpassageimg.jpeg');
          background-size: cover;
        }
      }
    }
  }
  .main{
    font-size: larger;
    line-height: 200%;
  }
  .icon-haijing{
    width: 2rem;
    height: 2rem;
  }
  @keyframes haijingmoving{
    0%{
      right: 0;
    }
    100%{
      right: 42%;
    }
  }
</style>
