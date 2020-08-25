<template>
  <div>
    <div class="topbox3">
      <div class="top">
        <div class="logintopbox">
          <!-- 美团logo -->
          <div class="logintopbox1">
            <img
              class="logintopbox1img"
              src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
              alt
            />
          </div>
        </div>
        <!-- 登录主图 -->
        <div class="sloginbox">
          <!-- 登录主图左 -->
          <div class="sloginbox1">
            <img
              class="sloginbox1img"
              src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
              alt
            />
          </div>
          <!-- 登录主图右 -->
          <div class="login-section">
            <div class="login-sectionbox" v-if="flag === true">
              <div class="login-section1">
                <div>账号登录</div>
                <div @click="modelogin">
                  手机动态码登录
                  <span>
                    <img class="login-section1img" src="../../../public/image/phone.png" alt />
                  </span>
                </div>
              </div>
              <!-- 手机登录 -->
              <div class="login-section2">
                <div>+86></div>
                <div>
                  <el-input v-model="phone" placeholder="请输入手机号"></el-input>
                </div>
              </div>
              <!-- 密码验证 -->
              <div class="login-section2">
                <div class="login-section2imgbox">
                  <img class="login-section2img" src="../../../public/image/password .png" alt />
                </div>
                <div>
                  <el-input v-model="password" placeholder="请输入密码"></el-input>
                </div>
              </div>
              <!-- 忘记密码？ -->
              <div class="forgetpassword">忘记密码？</div>
              <!-- 登录按钮 -->
              <div class="loginbox">登录</div>
              <!-- 没有账号 -->
              <div class="goresgiter">
                <div>还没有账号？</div>
                <div class="goresgiter1" @click="goresgiter">立即注册</div>
              </div>
              <!-- 第三方登录 -->
              <div class="otherlogin">
                <div class="otherloginbox1">
                  <div class="otherloginbox1-1"></div>
                  <div>用合作网站账号登录</div>
                  <div class="otherloginbox1-2"></div>
                </div>
                <div class="otherloginbox2">
                  <div class="otherloginbox2-1">
                    <div>
                      <img class="otherloginbox2-1img" src="../../../public/image/qq.png" alt />
                    </div>
                    <div>
                      <img class="otherloginbox2-1img" src="../../../public/image/weibo.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="login-sectionbox" v-else>
              <div class="login-section1">
                <div>账号登录</div>
                <div @click="mobielogin">
                  普通登录
                  <span>
                    <img class="login-section1img" src="../../../public/image/my.png" alt />
                  </span>
                </div>
              </div>
              <!-- 手机登录 -->
              <div class="login-section2">
                <div>+86></div>
                <div>
                  <el-input v-model="phone" placeholder="请输入手机号"></el-input>
                </div>
              </div>
              <!-- 密码验证 -->
              <div class="login-section2">
                <div class="login-section2imgbox">
                  <img class="login-section2img" src="../../../public/image/password .png" alt />
                </div>
                <div>
                  <el-input v-model="msgpassword" placeholder="请输入验证码"></el-input>
                </div>
              </div>
              <!-- 忘记密码？ -->
              <div class="forgetpassword">忘记密码？</div>
              <!-- 登录按钮 -->
              <div class="loginbox">登录</div>
              <!-- 没有账号 -->
              <div class="goresgiter">
                <div>提示：未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意<span>《美团点评用户服务协议》</span><span>《美团点评隐私政策》</span></div>
              </div>
              <!-- 第三方登录 -->
              <div class="otherlogin">
                <div class="otherloginbox1">
                  <div class="otherloginbox1-1"></div>
                  <div>用合作网站账号登录</div>
                  <div class="otherloginbox1-2"></div>
                </div>
                <div class="otherloginbox2">
                  <div class="otherloginbox2-1">
                    <div>
                      <img class="otherloginbox2-1img" src="../../../public/image/qq.png" alt />
                    </div>
                    <div>
                      <img class="otherloginbox2-1img" src="../../../public/image/weibo.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 底部说明 -->
        <div class="footbox">
            <div class="footboxitem">
                <div>关于美团</div>
                <div class="footboxitem-mid"></div>
                <div>加入我们</div>
                <div class="footboxitem-mid"></div>
                <div>商家入驻</div>
                <div class="footboxitem-mid"></div>
                <div>帮助中心</div>
                <div class="footboxitem-mid"></div>
                <div>美团手机版</div>
            </div>
        </div>
        <!-- 版权所有 -->
        <div class="footer">©美团网团购 meituan.com京ICP证070791号京公网安备11010502025545号</div>
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
      phone: "",
      password: "",
      msgpassword:"",
      flag:true
    };
  },
  methods: {
      //去往主页页
      goresgiter(){
         this.$router.push('/resgiter') 
      },
      modelogin(){
        this.flag = false
      },
      mobielogin(){
        this.flag = true
      }
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>