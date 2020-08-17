<template>
  <el-container :id="ismirror" class="container">
    <el-main height="" class="main" :class="main_property">
      <slot name="main" />
    </el-main>
    <el-divider class="divider"></el-divider>
    <el-footer height="2.5rem" class="footer" :class="footer_property">
      <slot name="footer" />
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Block',
  props: {
    main_property: {
      type: String,
      default: ''
    },
    footer_property: {
      type: String,
      default: ''
    },
    ismirror: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
  @media screen {
    @media (max-width: 700px){
      .container{
        display: none;
      }
    }
  }
  .container{
    color: whitesmoke;
    margin: 0 1rem;
    width: 17%;
    height: 14rem;
    // float: left;
    display: inline-flex;
  }
  .main{
    text-align: center;
    font-size: 8.5rem;
    // vertical-align: middle;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    line-height: -1.5rem;
    padding: 0;
  }
  .footer{
    border-bottom-left-radius: 10px;
     border-bottom-right-radius: 10px;
    text-align: center;
    font-size: 2rem;
  }
  .hours_main{
    background-color: rgb(0, 132, 255);
  }
  .hours_footer{
    // background-color: rgb(0, 132, 255);
    background-color: rgb(0, 104, 201);
  }
  .minutes_main{
    background-color: rgb(250, 150, 20);
  }
  .minutes_footer{
    background-color: rgb(204, 116, 1);
  }
  .seconds_main{
    background-color: rgb(243, 68, 185);
  }
  .seconds_footer{
    background-color: rgb(197, 52, 149);
  }
  .divider{
    margin: 0;
  }

  #mirror{
    transform: rotateX(180deg);
    opacity: 0.4;
    .hours_main{
      background-image: linear-gradient(to bottom,transparent,rgb(0, 132, 255));
    }
    .hours_footer{
      background-image: linear-gradient(to bottom,rgb(0, 132, 255),rgb(0, 104, 201));
    }
    .seconds_main{
      background-image: linear-gradient(to bottom,transparent,rgb(243, 68, 185));
    }
    .seconds_footer{
      background-image: linear-gradient(to bottom,rgb(243, 68, 185),rgb(197, 52, 149));
    }
    .minutes_main{
      background-image: linear-gradient(to bottom,transparent,rgb(250, 150, 20));
    }
    .minutes_footer{
      background-image: linear-gradient(to bottom,rgb(250, 150, 20),rgb(204, 116, 1));
    }
    
    .main{
      background-color: transparent;
    }
    .footer{
      background-color: transparent;
    }

    // background-image: linear-gradient(to bottom, red, blue);
    // -webkit-background-clip: text;
    // color: transparent;
  }
</style>