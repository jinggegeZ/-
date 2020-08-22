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
              <el-select v-model="value" placeholder="省份">
                <el-option
                  v-for="item in cities"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                  <!-- <span style="float: left">{{ item.name }}</span> -->
                  <span style="float: right; color: #8492a6; font-size: 13px" @click="choseprovice(item)">{{ item.name }}</span>
                </el-option>
              </el-select>
            </div>
            <div class="citychosebox">
              <el-select v-model="value1" :disabled="flag" placeholder="城市">
                <el-option
                  v-for="item in citiess"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px" @click="gohome(item)">{{ item.name }}</span>
                </el-option>
              </el-select>
            </div>
            <!-- 按省份选择左边部分 -->
            <div class="directSearch">
              <div>直接搜索：</div>
              <div class="directSearchbox">
                <div>
                  <el-input v-model="input" placeholder="请直接输入城市地名或者拼音"></el-input>
                </div>
              </div>
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
      arr:[],
      cities:[],
      citiess:[],
      input: "",
      value:'',
      value1:'',
      flag:true
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
    //点击获取id
    choseprovice(item){
        console.log(item);
        let id = item.id
        this.$api.getcity(id)
        .then(res => {
            console.log(res);
            if(res.code === 200){
                this.citiess = res.data.city
                this.flag = false
            }
        }).catch(err => {})
        this.value1 ===''
    },
    //点击返回首页
    gohome(item){
       console.log(item);
       let name = item.name
       this.$router.push({
           path:'/',
           query:{name:name}
       })
    }
  },
  mounted() {
       //获取省份
    this.$api
      .getprovince()
      .then((res) => {
        console.log(res);
        if(res.code === 200) {
            this.cities = res.data.province
        }
      })
      .catch((err) => {});
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