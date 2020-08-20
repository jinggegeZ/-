<template>
  <div class="topbox">
    <div class="top">
      <div class="navbox">
        <div class="navleftbox">
          <div class="navleftbox-item">
            <!-- 信息-->
            <div >
              <span>
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`" />
                </svg>
              </span>
            </div>
            <!-- 右箭头-->
            <div></div>
          </div>
        </div>
        <div class="navrightbox"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    menu: {
      type: Array,
    },
  },
  components: {},
  data() {
    return {
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
    };
  },
  methods: {},
  mounted() {
       // 获取全部分类
    this.$api
      .getall()
      .then((res) => {
        console.log(res);
        this.menu = res.data.menu
      })
      .catch((err) => {});
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>