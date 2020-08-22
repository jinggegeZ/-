<template>
  <div>
    <div class="topbox2">
      <div class="top">
        <!-- 有格调部分 -->
        <div class="stybox">
          <!-- 头部左边信息 -->
          <div class="stybox1">
            <div class="stybox1-font">有格调</div>
            <div class="stybox1-font2">
              <div
                class="stybox1-font2-item1"
                v-for="(item,index) in arr1"
                :key="index"
                @mouseenter="mouseover(item,index)"
                @mouseleave="mouseleave(item,index)"
              >
                {{item.title}}
                <div v-if="item.flag === true" class="triangle_border_up"></div>
              </div>
            </div>
          </div>
          <!-- 头部右边信息 -->
          <div class="stybox2">
            全部
            <span>
              <img class="stybox2-img" src="../../../public/image/right.png" alt />
            </span>
          </div>
        </div>
        <!-- 数据渲染部分 -->
        <div class="stybox3">
          <div class="stybox3-item" v-for="(item,index) in arr" :key="index">
            <div class="stybox3-itemimg">
              <img class="stybox3-itemimg1" :src="item.photos[0].url" alt />
            </div>
            <div class="stybox3-itemfont">{{item.name}}</div>
            <div>{{item.type}}</div>
            <div class="font2">{{item.tag}}</div>
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
      arr: [],
      city: "成都市",
      keyword: "美食",
      flag: true,
      arr1: [
        {
          title: "约会聚餐",
          name: "美食",
          flag: true,
        },
        {
          title: "丽人spa",
          name: "丽人",
          flag: false,
        },
        {
          title: "品质出游",
          name: "旅游",
          flag: false,
        },
        {
          title: "全部",
          name: "景点",
          flag: false,
        },
      ],
    };
  },
  methods: {
    //移入事件
    mouseover(item) {

      this.keyword = item.name;
      this.getarr();
      this.arr1.map(item => {
          item.flag =false
      })
      item.flag = true
    },
    //离开事件
    mouseleave(item){
        this.arr1.map(item => {
          item.flag =false
      })
       item.flag = true
    },
    //获取信息
    getarr(city, keyword) {
      this.$api
        .getkeyword({ city: this.city, keyword: this.keyword })
        .then((res) => {

          if (res.code === 200) {
            this.arr = res.data.pois.slice(4, 10);
            console.log(this.arr);
          }
        })
        .catch((err) => {});
    },
  },
  mounted() {
    this.getarr();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>