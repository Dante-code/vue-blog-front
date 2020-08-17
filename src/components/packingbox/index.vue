<template>
  <el-container class="packingbox" ref="container">
    <el-header height="4rem"></el-header>
    <el-main class="main">
      <span class="title">
        <slot name="title" />
      </span>
      <br><br>
      <div class="preview">
        <slot name="preview" />
      </div>
    </el-main>
    <el-footer class="footer">
      <el-divider class="divider" />
      <div class="detail">
        <slot name="detail" />
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'PackingBox',
  props: {
    hashdate:{
      type: Number,
      default: 0
    }
  },
  data (){
    let url = ''
    return {
      url
    }
  },
  async created(){
    this.url = await this.$axios({
      url: '/foo/cover',
      method: 'get',
      params: {
        hashdate: this.hashdate
      }
    })
    // console.log(this.$refs.container.$el.style)
    // background
    if(this.url.data != ''){
      this.$refs.container.$el.style.background = `url(`+this.url.data+`)`
      this.$refs.container.$el.style.backgroundSize = "cover";
      this.$refs.container.$el.style.filter = 'grayscale(50%)'
    }

    // console.log()
    // console.log(this.$refs)
  },
  mounted(){
    // console.log('mounted'+this.hashdate)
    // console.log(this.url)
    // console.log(this.$refs.container.$el.style)
  }
}
</script>

<style lang="less" scoped>
  .packingbox{
    user-select: none;
    margin: 1rem auto;
    width: 33rem;
    height: 18rem;
    // font-size: larger;
    background-color: whitesmoke;
    color: white !important;
    text-align: center;
    border-radius: 10px;
    &:hover{
      text-shadow: 0 0 5px whitesmoke;
      // &::after{
      //   display: block;
      //   content: '';
      //    width: 33rem;
      //   height: 18rem;
      //   position: absolute;
      //   filter: blur(20px);
      //   background-color: rgba(161, 161, 161, 0.356);
      // }

      .main{
        .title{
          font-size: xx-large;
          font-size: x-large;
          transition: 0.5s;
        }
        .preview{
          display: block;
        }
        transition: 0.5s;
        position: relative;
        bottom: 0.5rem;
      }
      .divider,.detail{
        display: block;
      }
    }
  }
  @media screen {
    @media (max-width: 500px){
      .packingbox{
        width: 85%;
      }
    }
  }
  .main{
    overflow: hidden;
    padding: 0;
    padding-top: 2rem;
    .title{
      font-size: large;
      transition: 0.5s;
      cursor: pointer;
    }
    .preview{
      display: none;
    }
    position: relative;
    bottom: 0;
    transition: 0.5s;
  }
  .footer{
    padding: 0;
  }
  .divider{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: none;
  }
  .detail{
    display: none;
  }
</style>

<style lang="less" scoped>

</style>
