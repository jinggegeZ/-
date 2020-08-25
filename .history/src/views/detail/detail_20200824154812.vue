<template>
  <div>
    <top></top>
    <div class="topbox2">
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
                  <span class="hover" style="float: left" v-else @click="choseitem(item)">{{ item.name }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                </el-option>
              </el-select>
            </div>
          </div>
            <!-- 搜索及相关搜索 -->
        <div class="detail-topbox-right">
            <div></div>
            <div class="detail-topbox-rightbox"></div>
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
      menu: [],
      value: "",
      flagColor: -1,
    };
  },
  methods: {
    //   鼠标移入事件
    changeItem(item) {
       Array.from(this.$refs.changes).map(item1 => {
           if (item1.innerText === item) {
               item1.style.color = 'orange'
           }
       })
   },
   //鼠标移出事件
  deleteitem(item){
    Array.from(this.$refs.changes).map(item1 => {
           if (item1.innerText === item) {
               item1.style.color = '#000'
           }
       })
  },
    //点击事件
    choseitem1(item1) {
        console.log(item1);
    },
    //点击事件
    choseitem(item){
        console.log(item.name);
    }
  },
  mounted() {
    this.$api
      .getall()
      .then((res) => {
        if (res.code === 200) {
          this.menu = res.data.menu;
          this.menu.map((item) => {
            if (item.name.includes("/")) {
              item.name = item.name.split("/");
              console.log(item.name);
            }
          });
          console.log(this.menu);
        }
      })
      .catch((err) => {});
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>