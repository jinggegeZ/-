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
        <div class="nav1input">
        <el-input v-model="keyword" placeholder="请输入内容" @input="change"></el-input>
        <div class="nav1input1box" v-if="keyword != ''">
          <div class="item" v-for="item in arr" :key="item.id">
            <div v-if="item.name" @click="godetail(item)">{{item.name}}</div>
          </div>
        </div>
        </div>
        
        <div class="nav1inputboox"><img class="nav1inputbooximg" src="../../../public/image/search.png" alt=""></div>
      </div>
    </div>
    <div class="nav2">
      <div class="nav2box"><div class="all">全部分类</div></div>
      <div class="nav2box2">
        <div class="nav2box2font">美团外卖</div>
        <div class="nav2box2font2">猫眼电影</div>
        <div class="nav2box2font2">美团酒店</div>
        <div class="nav2box2font">民宿/公寓</div>
        <div class="nav2box2font">商家入驻</div>
        <div class="nav2box2font2">美团公寓</div>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     city:{
       type:String,
       default: ()=> ''
     }
   },
   components: {

   },
   data () {
     return {
       keyword: '',
        arr:[],
        name:''
     }
   },
   methods: {
     //输入框change事件变化
     change(value){
       this.keyword = value
       this.$api.getinput({city:'成都',input:this.keyword}).then(res => {
         if(res.code === 200){
this.arr = res.data.top
         }
         
       }).catch (err => {})
     },
     //前往详情
     godetail(item){
       console.log(item);
       let name = item.name
       this.$router.push({
         path:'/detail',
         query:{'name':name}
       })
     }
   },
   mounted() {
     this.name = this.city.slice(0,2)
     console.log(this.name);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>