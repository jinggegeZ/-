<template>
  <div>
    <!-- 头部组件 -->
    <top></top>
    <!-- 详情头部信息包含美团及搜索部分 -->
    <div class="topboxdetail">
      <div class="top">
        <div class="detail-topbox">
          <!-- 美团详情 -->
          <div class="detail-topbox-left">
            <div>
              <img
                class="detail-topbox-leftimg"
                src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
                alt
              />
            </div>
            <div class="detail-topbox-leftbox">
              <el-select v-model="value" placeholder="全部分类">
                <el-option
                  v-for="item in menu"
                  :key="item.id"
                  :label="item.label"
                  :value="item.name"
                >
                  <span style="float: left" v-if="Array.isArray(item.name)">
                    <span v-for="(item1,index1) in item.name" :key="index1">
                      <span
                        ref="changes"
                        @mouseenter="changeItem(item1)"
                        @mouseleave="deleteitem(item1)"
                        @click="choseitem1(item1)"
                      >{{item1}}</span>
                      <span v-if="index1 !==  item.name.length-1">/</span>
                    </span>
                  </span>
                  <span
                    class="hover"
                    style="float: left"
                    v-else
                    @click="choseitem(item)"
                  >{{ item.name }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                </el-option>
              </el-select>
            </div>
          </div>
          <!-- 搜索及相关搜索 -->
          <div class="detail-topbox-right">
            <div>
              <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
            </div>
            <div class="detail-topbox-rightbox">搜索</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 详情中间详细部分 -->
    <div class="topbox2">
      <div class="top">
        <!-- 面包屑 -->
        <div class="crumbs">
          <div class="crumbs-box">成都美团>博物馆</div>
        </div>
        <div class="detail-navbox">
          <!-- 左边部分 -->
          <div class="detail-navbox-left">
            <div class="location-box">
              <!-- 相关全部 -->
              <div class="location-box-top">
                <div class="location-box-top1">
                  <div class="location-box-top1-1">
                    <div class="location-box-top1-1-1">分类</div>
                  </div>
                  <div class="location-box-top1-2">
                    <div class="location-box-top1-2-1">全部</div>
                  </div>
                  <div class="location-box-top1-3">
                    <div class="location-box-top1-3-1">
                      <div
                        class="location-box-top1-3-1-item"
                        v-for="(item,index) in menu"
                        :key="index"
                      >
                        <div v-if="Array.isArray(item.name)" class="postionbox">
                          <span>{{item.name[0]}}</span>
                          <span class="elsebox">
                            <img class="elseboximg" src="../../../public/image/down.png" alt />
                          </span>

                          <div class="location-box-nonebox">
                            <div class="itemtitle">{{item.child[0].title}}</div>
                            <div class="nonebox1">
                              <div
                                class="xh"
                                v-for="(item2,index2) in item.child[0].child"
                                :key="index2"
                              >{{item2}}</div>
                            </div>
                          </div>
                        </div>

                        <div v-else class="postionbox">
                          {{item.name}}
                          <span class="elsebox">
                            <img class="elseboximg" src="../../../public/image/down.png" alt />
                          </span>
                          <div class="location-box-nonebox">
                            <div class="itemtitle">{{item.child[0].title}}</div>
                            <div class="nonebox1">
                              <div
                                class="xh"
                                v-for="(item2,index2) in item.child[0].child"
                                :key="index2"
                              >{{item2}}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 相关地区 -->
              <div class="location-box-top">
                <div class="location-box-top1">
                  <div class="location-box-top1-1">
                    <div class="location-box-top1-1-1">区域</div>
                  </div>
                  <div class="location-box-top1-2">
                    <div class="location-box-top1-2-1">全部</div>
                  </div>
                  <div class="location-box-top1-3">
                    <div class="location-box-top1-3-1">
                      <div
                        class="location-box-top1-3-1-item1"
                        v-for="(item,index) in areas"
                        :key="index"
                      >
                        {{item.type}}
                        <span class="location-box-top1-3-1-itemimgbox">
                          <img
                            class="location-box-top1-3-1-itemimg"
                            src="../../../public/image/down.png"
                            alt
                          />
                        </span>
                        <div class="location-box-nonebox">
                            <div class="itemtitle">{{item.type}}</div>
                            <div class="nonebox1">
                              <div
                                class="xh"
                                v-for="(item1,index1) in item.module"
                                :key="index1"
                              >{{item1}}</div>
                            </div>
                          </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

            </div>
             <!-- 城市热门部分 -->
            <div class="hotcitybox">
                <!-- 城市热门头部排序部分 -->
                <div class="hotcitybox-rate">
                  <div class="hotcitybox-rate1">
                  <div>智能排序</div>
                  <div>价格排序</div>
                  <div>人气最高</div>
                  <div>评价最高</div>
                  </div>
                </div>
                <!-- 热门城市身体渲染部分 -->
                <div class="hotcitybox-body">
                  <div class="hotcitybox-body-item" v-for="(item,index) in more" :key="index">
                    <div class="body-item-img"><img class="body-item-img" src="" alt=""></div>
                    <div class="body-item-descriton">
                      <div class="body-item-descritonfont">xingmimg</div>
                      <div>pingfen</div>
                      <div>ditu</div>
                      <div>renjun24</div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <!-- 右边地图部分 -->
          <div class="detail-navbox-right">123</div>
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
      menu: [],
      value: "",
      input: "",
      city: "成都",
      areas: [],
      keyword:'火锅',
      more:[]
    };
  },
  methods: {
    //   鼠标移入事件
    changeItem(item) {
      Array.from(this.$refs.changes).map((item1) => {
        if (item1.innerText === item) {
          item1.style.color = "orange";
        }
      });
    },
    //鼠标移出事件
    deleteitem(item) {
      Array.from(this.$refs.changes).map((item1) => {
        if (item1.innerText === item) {
          item1.style.color = "#000";
        }
      });
    },
    //点击事件
    choseitem1(item1) {
      console.log(item1);
    },
    //点击事件
    choseitem(item) {
      console.log(item.name);
    },
  },
  mounted() {
    //获取传递过来的商品名
    this.name = this.$route.query.name;
    console.log(this.name);
    //   获取所有分类
    this.$api
      .getall()
      .then((res) => {
        if (res.code === 200) {
          this.menu = res.data.menu;
         
          this.menu.map((item) => {
            if (item.name.includes("/")) {
              item.name = item.name.split("/");
            }
          });
        }
      })
      .catch((err) => {});
    //获取城市详情
    this.$api
      .crumbs({ city: this.city })
      .then((res) => {
        if (res.code === 200) {
          this.areas = res.data.areas;
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //获取商铺详情
    this.$api.product({city:this.city,keyword:this.keyword}).then(res => {
      if(res.code === 200){
        this.more = res.data.more
        console.log(this.more);
      }

    }).catch(err => {

    })
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>