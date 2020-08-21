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
              <div class="stybox1-font2-item1" >
                约会聚餐
                <div class="triangle_border_up"></div>

              </div>

              <!-- <div class="stybox1-font2-item2">丽人spa
              <div class="triangle_border_up"></div>
              </div>
              <div class="stybox1-font2-item4">品质出游
              <div class="triangle_border_up"></div>
              </div> -->
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
                <div class="stybox3-itemimg"><img class="stybox3-itemimg1" :src="item.photos[0].url" alt=""></div>
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
        arr:[],
        arr1:[
            {
                title:'约会聚餐',
                name:'美食'
            },
             {
                title:'约会聚餐',
                name:'美食'
            },
             {
                title:'约会聚餐',
                name:'美食'
            },
        ]

    };
  },
  methods: {},
  mounted() {
      //获取数据
      this.$api. getkeyword({city:'成都市',keyword:'美食'}).then(res => {
          console.log(res);
          this.arr =res.data.pois.slice(0,6)
          console.log(this.arr);
      }).catch(err => {})
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>