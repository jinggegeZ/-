<template>
  <div class="topbox">
    <div class="top">
      <div class="navbox">
        <!-- 左边导航部分-->
        <div class="navleftbox">
          <div class="navleftbox-item" v-for="(item,index) in menu" :key="index">
            <!-- 信息-->
            <div>
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#${item.icon}`" />
              </svg>
              <span>{{item.name}}</span>
            </div>
            <!-- 右箭头-->
            <div>
              <img class="icon1" src="../../../public/image/right.png" alt />
            </div>
            <!-- 定位盒子-->
            <div class="itembox">
              <div class="itembox1">
                <div class="itembox2" v-for="(item1,index1) in item.child" :key="index1">
                  <!-- 上部大数据-->
                  <div class="item-child">
                    <div>{{item1.title}}</div>
                    <div>
                      更多
                      <span>
                        <img class="icon1" src="../../../public/image/right.png" alt />
                      </span>
                    </div>
                  </div>
                  <!-- 详细数据-->
                  <div class="itembox3">
                    <div
                      class="itembox4"
                      v-for="(item2,index2) in item1.child"
                      :key="index2"
                    >{{item2}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右边渲染部分-->
        <div class="navrightbox">
          <!-- 上部伦博部分-->
          <div class="navrightbox-1">
            <div class="navrightbox-swiper">
              <el-carousel :interval="5000" arrow="always" indicator-position="inside">
                <el-carousel-item v-for="item in imgs" :key="item.id">
                  <img class="swiperimg" :src="item.img" alt="">
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="navrightbox-2">
            <img class="navrightbox-2img" src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="">
          </div>
            <div class="loginbox">
                <div class="loginbox1">
                    <div class="headimg"><img class="headimg1" src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt=""></div>
                    <div class="headimg2">
                        <div class="headimg2-1">Hi! 你好</div>
                    </div>
                    <div class="headimg">
                        <div class="headimg3">注册</div>
                    </div>
                    <div class="headimg">
                    <div class="headimg3">立即登录</div>
                    </div>
                </div>
            </div>
          </div>
          <!-- 下部解析部分-->
          <div class="bottombox">
            <div class="bottombox-1"> <img class="bottombox-1img" src="//p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt=""></div>
          </div>
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
      menu: [],
      Uicons: [
        {
          icon: "icon-tubiaozhizuomoban_meishi",
        },
        {
          icon: "icon-icon_meituanwaimai",
        },
        {
          icon: "icon-jiudian1",
        },
        {
          icon: "icon-jiudian",
        },
        {
          icon: "icon-maoyan",
        },
        {
          icon: "icon-huoche",
        },
        {
          icon: "icon-ziyuan",
        },
        {
          icon: "icon-shenghuofuwu",
        },
        {
          icon: "icon-liren1",
        },
        {
          icon: "icon-jiehunyuyue",
        },
        {
          icon: "icon-qinzi",
        },
        {
          icon: "icon-jianshen",
        },
        {
          icon: "icon-zhuangxiu",
        },
        {
          icon: "icon-xuexipeixun",
        },
        {
          icon: "icon-yiliao",
        },
        {
          icon: "icon-icon-test",
        },
      ],
      imgs:[
          {
              img:'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
              id:1
              
          },
          {
              img:'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
              id:2
          },
          {
              img:'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
              id:3
          },
          {
              img:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',
              id:4
          },
          {
              img:'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
              id:5
          }
      ]
    };
  },
  methods: {},
  mounted() {
    // 获取全部分类
    this.$api
      .getall()
      .then((res) => {
        this.menu = res.data.menu;
        this.menu.map((item, index) => {
          this.Uicons.map((item1, index1) => {
            if (index === index1) {
              this.$set(item, "icon", item1.icon);
            }
          });
        });
      })
      .catch((err) => {});
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>