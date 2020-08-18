<template>

    <el-container class="container">
      <el-header class="header" height="45rem">
        <!-- <rotationChart /> -->
        <div class="clock">
          <span class="nowtime">VOKNET ONLINE</span>
          
          <clock :hours="hours" :minutes="minutes" :seconds="seconds" />
          <clock :hours="hours" :minutes="minutes" :seconds="seconds" :ismirror="'mirror'" />
        </div>

        <night-starry></night-starry>
      </el-header>
      <el-main class="main">
        <img src="../assets/img/mainimg.jpeg" alt="" class="mainimg">
        <packing-box v-for="(passageData,idx) in dat" :key="idx" :hashdate="passageData.hashDate">
          <span slot="title" @click="watchPassage(passageData.hashDate)">
            {{ passageData.title }}
          </span>
          <span slot="preview">
            {{ passageData.preview.slice(0,20) }}
          </span>
          <span slot="detail">
            {{ passageData.author }} ---  {{ passageData.time.slice(0,10) }}
          </span>
        </packing-box>
        <music-box></music-box>
        <inform />
      </el-main>
      <el-footer height="">
      </el-footer>
    </el-container>
</template>

<script>
var timer
export default {
  name: 'home',
  components: {
    rotationChart: () => import('../components/rotationchart/index'),
    NightStarry: () => import('../components/nightstarry/index'),
    PackingBox: () => import('../components/packingbox/index'),
    clock: () => import('../components/clock/index'),
    musicBox: () => import('../components/musicbox/index'),
    inform: () => import('../components/inform/index')
  },
  data() {
    return{
      dat: [],
      hours: '',
      minutes: '',
      seconds: '',
    }
  },
  methods: {
    watchPassage (date) {
      console.log(date)
      this.$router.push({
        path: '/blogpassage',
        query:{
          hashDate: date
        }
      })
    },
    plus(num){
      if(num < 10){
         return '0'+num
      }
      else{
        return ''+num
      }
    }
  },

  async created(){
    const res = await this.$axios({
      url: '/foo/passagepreview',
      method: 'get'
    })
    this.dat = res.data.result
    clearInterval(timer)
    timer = setInterval(()=>{
      var mydate = new Date()
      this.hours = this.plus(mydate.getHours())
      this.minutes = this.plus(mydate.getMinutes())
      this.seconds = this.plus(mydate.getSeconds())
    },1000)
  },
  beforeDestroy() {
    if(timer) {
        clearInterval(timer)
    }
  },
}
</script>

<style lang="less" scoped>
  .clock{
    margin-top: 3rem;
    width: 100%;
    text-align: center;
    float: left;
    .nowtime{
      color: whitesmoke;
      font-size: 4rem;
    }
  }
  .header{
    width: 100%;
    margin: 0;
    padding: 0;
    background: url('../assets/img/headerbarimg.jpg');
    z-index: -4;
    background-size: cover;
  }
  .mainimg{
    position: fixed;
    top: 0;
    z-index: -20;
    background-size: cover;
  }

  .main{
    padding: 0;
  }

  @media screen {
    @media (min-width: 970px){
      .header{
        background: url('../assets/img/headerbarimg.jpg');
        z-index: -4;
        background-size: cover;
      }

    }
  }
  .container{
    position: relative;
    animation: down 1.5s ease-in-out 1;
  }
  @keyframes down{
    0%{
      top: -30rem;
    }
    100%{
      top: 0;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .time{
    margin: auto;
  }
</style>