<template>
  <el-row class="preview">
    <el-col :lg="18" 
    class="passage" 
    :offset="2" 
    :xs="20"
    :md="18"
    :sm="18">
      <el-row>
        <el-col :span="24" class="title">
          <span style="cursor: pointer;" @click="watchPassage">
            {{ passageName }}
          </span>
        </el-col>
        <el-col :span="24" class="passagepreview">
          {{ preview }}
        </el-col>
        <el-col 
        :lg="10"
        :xs="10"
        :md="10"
        :sm="10" 
        class="author" 
        :offset="14">
          {{ author }}
        </el-col>

        <el-col 
        :lg="10"
        :xs="10"
        :md="10"
        :sm="10" 
        class="publishtime" 
        :offset="14">
          {{ processTime }}
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  
</template>

<script>
export default {
  name: 'preview',
  props:{
      publishTime: String,
      author: String,
      preview: String,
      passageName: String,
      hashDate: Number
  },

  computed: {
    processTime () {
      return this.publishTime.slice(0,10)
    }
  },
  methods: {
    watchPassage () {
      console.log(this.hashDate)
      this.$router.push({
        path: '/blogpassage',
        query:{
          hashDate: this.hashDate
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .preview{
    // border: 1px black solid;
    .passage{
      background-color: rgb(229, 239, 248);
      padding-bottom: 2rem;

      .title{
        padding-left: 2rem;
        font-size: 2.5rem;
        color: rgba(145, 185, 185, 0.459);
        text-decoration: underline;
        user-select: none;
      }

      .passagepreview{
        width: 95%;
        margin: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        // border: 1px solid black;
      }

      .author,.publishtime{
        text-align: center;
        // border: 1px solid black;
      }

    }

    margin-bottom: 2rem;
  }
</style>