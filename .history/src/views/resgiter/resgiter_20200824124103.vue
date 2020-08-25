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
    <!-- 注册模块 -->
    <div class="rsgmsgbox">
      <!-- 注册信息部分 -->
      <div class="resgitermsgbox">
        <!-- 输入手机号 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">
            <div class="inforbox">用户名:</div>
            <div class="resgitermsginputbox">
              <el-input v-model="username" type="text" placeholder="请输入用户名"></el-input>
            </div>
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
            <div class="inforbox">邮箱:</div>
            <div class="resgitermsginputbox">
              <el-input v-model="email" type="email" placeholder="请输入邮箱"></el-input>
            </div>
          </div>
        </div>
        <!-- 创建密码 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">
            <div class="inforbox">创建密码:</div>
            <div class="resgitermsginputbox">
              <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
            </div>
          </div>
        </div>
        <!-- 密码强度 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">
            <div class="inforbox"></div>
            <div class="resgiterbutton1">
              <div>
                <div class="resgiterbutton1-item" v-if="this.password.length ===0">弱</div>
                <div
                  class="resgiterbutton1-item1"
                  v-else-if="this.password.length >0"
                >弱</div>
              </div>
              <div>
                <div class="resgiterbutton1-item" v-if="this.password.length <=5">中</div>
                <div
                  class="resgiterbutton1-item1"
                  v-else-if="this.password.length >5"
                >中</div>
              </div>
              <div>
                <div class="resgiterbutton1-item" v-if="this.password.length <=9">强</div>
                <div class="resgiterbutton1-item1" v-else-if="this.password.length >9">强</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 确认密码 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">
            <div class="inforbox">确认密码:</div>
            <div class="resgitermsginputbox">
              <el-input v-model="rpassword" type="password" placeholder="请再次输入密码"></el-input>
            </div>
          </div>
        </div>
        <!-- 立即注册按钮 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">
            <div class="inforbox"></div>
            <div class="resgiterbutton2" @click="getresgiter">同意以下协议并注册</div>
          </div>
        </div>
        <!-- 用户协议 -->
        <div class="resgitermsgbox1">
          <div class="resgitermsgbox1-1">
            <div class="inforbox"></div>
            <div class="resgiterbutton3">《美团点评用户服务协议》 《美团点评隐私政策》</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部模块 -->
    <div class="rsgmsgboxfooter"></div>
    <div class="rsgmsgboxfootermsg">©meituan.com京ICP证070791号京公网安备11010502025545号</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      username: "",
      email: "",
      password: "",
      rpassword: "",
    };
  },
  methods: {
    //点击去往登录页
    gologin() {
      this.$router.push("/login");
    },
    //点击注册
    getresgiter() {
      this.$api
        .resgiter({
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          if (res.code === 200) {
            this.$router.push("/login");
          }
        })
        .catch((err) => {});
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>