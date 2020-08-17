<template>
  <div class="clock">
    <block class="hours" :main_property="hours_main" :footer_property="hours_footer" :ismirror="ismirror">
      <div slot="main" class="main">{{ hours }}</div>
      <div slot="footer">HOURS</div>
    </block>
    <block class="minutes" :main_property="minutes_main" :footer_property="minutes_footer" :ismirror="ismirror">
      <div slot="main">{{ minutes }}</div>
      <div slot="footer">MINUTES</div>
    </block>
    <block class="seconds" :main_property="seconds_main" :footer_property="seconds_footer" :ismirror="ismirror">
      <div slot="main">{{ seconds }}</div>
      <div slot="footer">SECONDS</div>
    </block>
  </div>
</template>

<script>
var timer
export default {
  name: 'Clock',
  props:{
    ismirror: {
      type: String,
      default: ''
    },
    hours: {
      type: String,
      default: ''
    },
    minutes: {
      type: String,
      default: ''
    },
    seconds: {
      type: String,
      default: ''
    }
  },
  components:{
    block: () => import('./components/block')
  },
  data (){
    return{
      hours_main: 'hours_main',
      hours_footer: 'hours_footer',
      minutes_main: 'minutes_main',
      minutes_footer: 'minutes_footer',
      seconds_main: 'seconds_main',
      seconds_footer: 'seconds_footer',
    }
  },
}
</script>

<style lang="less" scoped>
  .clock{
    text-align: center;
    margin: 0.1rem auto;
  }
  @media screen {
    @media (max-width: 1000px){
      .clock{
        display: none;
      }
    }
  }
</style>