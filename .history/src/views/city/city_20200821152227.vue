<template>
  <div>
    <top :city="city"></top>
    <div class="topbox1">
      <div class="top">
        <div class="nav">
          <!-- 美团-->
          <div class="nav1">
            <div>
              <img
                class="nav1img"
                src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
                alt
              />
            </div>
          </div>
          <!-- 搜索-->
          <div class="nav1input">
            <div class="nav1input">
              <el-input v-model="keyword" placeholder="请输入内容" @input="change"></el-input>
              <div class="nav1input1box" v-if="keyword != ''">
                <div class="item" v-for="item in arr" :key="item.id">
                  <div v-if="item.name">{{item.name}}</div>
                </div>
              </div>
            </div>

            <div class="nav1inputboox">
              <img class="nav1inputbooximg" src="../../../public/image/search.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="topbox2">
    <div class="top">
         <!-- 城市部分 -->
        <div class="citybox">
            <!-- 按省份选择部分 -->
            <div class="citybox-province">
                <!-- 按省份选择左边部分 -->
                <div>按省份选择：</div>
                <div class="proviencechosebox">
                    <div class="proviencechosebox1">
                        <div>省份</div>
                        <div><img class="cityboximg" src="../../../public/image/right.png" alt=""></div>
                    </div>
                </div>
                <div class="citychosebox">
                    <div class="citychosebox1">
                        <div>城市</div>
                        <div><img class="cityboximg" src="../../../public/image/right.png" alt=""></div>
                    </div>
                </div>
                 <!-- 按省份选择左边部分 -->
                <div class="">

                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import top from "../../components/top/top";

export default {
  name: "",
  props: {},
  components: {
    top,
  },
  data() {
    return {
      city: "",
      keyword: "",
      arr: [],
    };
  },
  methods: {
    //输入框change事件变化
    change(value) {
      this.keyword = value;
      this.$api
        .getkeyword({ city: this.city, keyword: this.keyword })
        .then((res) => {
          console.log(res);
          this.arr = res.data.pois.slice(0, 10);
        })
        .catch((err) => {});
    },
  },
  mounted() {
    //获取城市
    this.$api
      .getposition()
      .then((res) => {
        this.city = JSON.parse(res.data).city;
      })
      .catch((err) => {});
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>