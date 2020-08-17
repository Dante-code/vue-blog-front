<template>
  <el-container ref="container">
    <el-header class="header" height="3.6rem">
      <el-row>
        <el-col :lg="4" :offset="0" class="headimg">
          <a href="http://localhost:3001/login"><img src="../assets/img/headimg.jpg" alt=""></a>
        </el-col>
        <svg class="hamburger" aria-hidden="true" @click="hamburger_active_button" :class="{hamburger_active: hamburger_active}">
          <use xlink:href="#icon-hamburger"></use>
        </svg>
        <el-col v-for="(page,idx) in pages" :key="idx" 
        :lg="2" :md="2" :offset="0"
        class="navbar">
        <div @click="jumpToChild(page.url,idx)">
          <navbar-block :blockcolor="page.blockcolor" :pageurl="page.url" :class="{active: page.url==cookie}">
            <div slot="pagename">
              {{page.pagename}}
            </div>  
          </navbar-block>
        </div>
        </el-col>
      </el-row>
    </el-header>

    <el-main class="main">
      <side-bar :hamburger_active="hamburger_active"></side-bar>
      <router-view />
    </el-main>

    <el-footer class="footer" height="2rem">

    </el-footer>
  </el-container>
</template>

<script>
import navbarBlock from '../components/navbarblock/index'
export default {
  name: 'index',
  components: {
    navbarBlock,
    SideBar: () => import('../components/sidebar/index')
  },
  data() {
      return {
        isactive: false,
        hamburger_active: false,
        cookie: '/',
        pages: [
          {
            pagename: '首页',
            url: 'home',
            blockcolor: 'orange'
          }, {
            pagename: '关于我',
            url: 'aboutme',
            blockcolor: 'blue'
          }, {
            pagename: '更多',
            url: 'more',
            blockcolor: 'red'
          }
        ]
      };
    },
  methods: {
    jumpToChild(url,idx){
      this.$router.replace({name: url})
      this.cookie = url
      this.$cookies.set('active',url,2*60*60)
    },
    hamburger_active_button(){
      this.hamburger_active = !this.hamburger_active
    }
  },
  created(){
    try {
      if(this.$route != '/'){
        this.cookie = this.$cookies.get('active')
      }
    } catch (error) {
      this.cookie = this.$route
    }
  },
  computed: {
    
  },
  mounted (event) {
    document.addEventListener('scroll', () => {
      if (this.hamburger_active == true) {
        this.hamburger_active = false
      }
    })
  }
  
}
</script>

<style lang="less" scoped>
  .main{
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  .header{
    vertical-align: middle;
    line-height: 3.5rem;
    padding: 0;
    background-color: rgb(80,68,166);
    border-bottom: 1px dashed rgb(70,33,119);
    animation: bkgandborderChange 10s ease-in-out infinite;

    .headimg{
      padding-left: 1.5rem;
      img{
        width: 3.5rem;
        border-radius: 50%;
      }
    }

    .navbar{
      content: "";
      height: 3.75rem;
      text-align: center;
      font-size: 1.2rem;
      color: azure;
      user-select: none;
      cursor: pointer;
      // &:hover{
      //   background-color: rgba(0, 0, 0, 0.699);
      //   color: rgb(202, 206, 206);
      //   transition: 2s;
      // }
    }
  }
  .active {
    background-color: rgb(225,87,255);
    letter-spacing: 0.2rem;
    &::after{
      border-left-color: rgb(225,87,255);
    }
  }
  @media only screen {
    @media (max-width: 1200px){
      .navbar{
        display: none;
        width: 0;
      }
      .headimg{
        width: 100%;
        text-align: center;
        padding-left: 0;
      }
      .hamburger{
        display: block;
        z-index: 2;
        color: white;
        position: absolute;
        right: 0;
        top: 0.6rem;
        width: 2.1rem;
        height: 2.1rem;
      }
      .hamburger_active {
        transform: rotateZ(180deg);
      }
    }
    @media (min-width: 1200px) {
      .hamburger {
        display: none;
      }
    }
  }
  .footer{
    background-color: rgba(51, 51, 51, 0.801);
  }
  @keyframes bkgandborderChange{
    0%{
      background-color: rgb(80,68,166);
      border-bottom: 1px dashed rgb(70,33,119);
    }
    25%{
      background-color: rgb(77,65,165);
      // background-color: red;
      border-bottom: 1px dashed rgb(61,22,77);
    }
    50%{
      background-color: rgba(8, 6, 53, 0.815);
      border-bottom: rgb(217,80,162) 1px dashed;
    }
    75%{
      // background-color: rgb(159,115,228);
      border-bottom: 1px dashed rgb(159,115,228);
    }
    100%{
      background-color: rgb(80,68,166);
      border-bottom: 1px dashed rgb(70,33,119);
    }
  }
</style>
