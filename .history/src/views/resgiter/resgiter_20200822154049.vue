<template>
  <div>
    <div class="restopbox">
      <div class="top">
        <!-- 注册头部 -->
        <div class="resgtopbox">
          <div class="resgtopbox-1">
            <img
              class="resgtopbox-1img"
              src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
              alt
            />
          </div>
          <div>
            已有美团账号？
            <span class="resgtopboxfont" @click="gologin">登录</span>
          </div>
        </div>
      </div>
    </div>
    <div class="rsgmsgbox">
      <!-- 注册信息部分 -->
      <div class="resgitermsgbox">
        <!-- 输入手机号 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">
            <div class="inforbox">手机号:</div>
            <div class="resgitermsginputbox"> <el-input v-model="phone" placeholder="请输入手机号"></el-input> </div>
            <div>注册成功后，全美团通用</div>
          </div>
        </div>
        <!-- 发送验证码按钮 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">
            <div class="inforbox"></div>
            <div class="resgiterbutton">免费获取短信验证码</div>
          </div>
        </div>
        <!-- 短信验证码 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">
          <div class="inforbox">短信验证码:</div>
            <div class="resgitermsginputbox"> <el-input v-model="msg" placeholder="请输入短信验证码"></el-input> </div>
          </div>
        </div>
        <!-- 创建密码 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">
          <div class="inforbox">创建密码:</div>
            <div class="resgitermsginputbox"> <el-input v-model="password" placeholder="请输入密码"></el-input> </div>
          </div>
        </div>
        <!-- 密码强度 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">
            <div class="inforbox"></div>
            <div class="resgiterbutton1">
                <div class="resgiterbutton1-item">弱</div>
                <div class="resgiterbutton1-item">中</div>
                <div class="resgiterbutton1-item">强</div>
            </div>
          </div>
        </div>
        <!-- 确认密码 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">
          <div class="inforbox">确认密码:</div>
            <div class="resgitermsginputbox"> <el-input v-model="rpassword" placeholder="请再次输入密码"></el-input> </div>
            </div>
        </div>
        <!-- 立即注册按钮 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">7</div>
        </div>
        <!-- 用户协议 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">8</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        phone:'',
        msg:'',
        password:'',
        rpassword:''
    };
  },
  methods: {
    //点击去往登录页
    gologin() {
      this.$router.push("/login");
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>