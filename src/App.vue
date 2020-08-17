<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
import Index from './views/Index'
export default {
  name: 'app',
  components: {
    'index':Index
  },

  created() {
    let cookie
    try {
      if(this.$route != '/'){
        cookie = this.$cookies.get('active')
      }
    } catch (error) {
      cookie = this.$route
    }
    this.$router.push(cookie)
  },  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

</style>
