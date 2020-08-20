<template>
  <div>
      <top></top>
      <Navigation :city='city'></Navigation>
      <navbox></navbox>
  </div>
</template>

<script>
import top from "../components/top/top";
import Navigation from "../components/Navigation/Navigation";
import navbox from "../components/navbox/navbox"
export default {
  name: "",
  props: {},
  components: {
    top,
    Navigation,
    navbox
  },
  data() {
    return {
      city:''
    };
  },
  methods: {},
  mounted() {
    //获取省份
    // this.$api
    //   .getprovince()
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {});
    //获取城市
    this.$api
      .getposition()
      .then((res) => {
        this.city = JSON.parse(res.data).city
      })
      .catch((err) => {});
      // 获取全部分类
    this.$api.getall().then(res => {
      console.log(res);
    }).catch(err => {})
  },
    
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>

</style>
