<template>
 <div class="topbox1">
  <div class="top">
    <div class="nav">
      <!-- 美团-->
      <div class="nav1">
        <div><img class="nav1img" src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt=""></div>
      </div>
     <!-- 搜索-->
      <div class="nav1input">
        <div class="nav1input1"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
        <div class="nav1inputboox"><img class="nav1inputbooximg" src="../../../public/image/search.png" alt=""></div>
      </div>
    </div>
    <div class="nav2">
      <div class="nav2box"></div>
      <div class="nav2box2">
        <div>美团外卖</div>
        <div>猫眼电影</div>
        <div>美团酒店</div>
        <div>民宿/公寓</div>
        <div>商家入驻</div>
        <div></div>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       input: ''
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>