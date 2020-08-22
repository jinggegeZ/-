<template>
 <div>
    
    <div class="restopbox">
        <div class="top">
            <!-- 注册头部 -->
            <div class="resgtopbox">
                <div class="resgtopbox-1"><img class="resgtopbox-1img" src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt=""></div>
                <div>已有美团账号？ <span class="resgtopboxfont" @click="gologin">登录</span></div>
            </div>
            <!-- 注册信息部分 -->
            <div class="resgitermsgbox">
                <!-- 输入手机号 -->
                <div class="resgitermsgbox1"><div class="resgitermsgbox1-1"></div></div>
                <!-- 发送验证码按钮 -->
                <div class="resgitermsgbox1"><div class="resgitermsgbox1-1"></div></div>
                <!-- 短信验证码 -->
                <div class="resgitermsgbox1"><div class="resgitermsgbox1-1"></div></div>
                <!-- 创建密码 -->
                <div class="resgitermsgbox1"><div class="resgitermsgbox1-1"></div></div>
                <!-- 密码强度 -->
                <div class="resgitermsgbox1"><div class="resgitermsgbox1-1"></div></div>
                <!-- 确认密码 -->
                <div class="resgitermsgbox1"><div class="resgitermsgbox1-1"></div></div>
                <!-- 输入手机号 -->
                <div class="resgitermsgbox1"><div class="resgitermsgbox1-1"></div></div>
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

     }
   },
   methods: {
    //点击去往登录页
    gologin(){
        this.$router.push('/login')
    }
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