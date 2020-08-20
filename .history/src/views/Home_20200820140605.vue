<template>
  <div>
      <top></top>
      <Navigation :city='city'></Navigation>
  </div>
</template>

<script>
import top from "../components/top/top";
import Navigation from "../components/Navigation/Navigation";
export default {
  name: "",
  props: {},
  components: {
    top,
    Navigation,
  },
  data() {
    return {
      city:''
    };
  },
  methods: {},
  mounted() {
    //获取省份
    this.$api
      .getprovince()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
    //获取城市
    this.$api
      .getposition()
      .then((res) => {
        console.log(res);
        this.city = JSON.parse(res.data).city
        console.log(this.city);
      })
      .catch((err) => {});
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>

</style>
