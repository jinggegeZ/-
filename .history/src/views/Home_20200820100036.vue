<template>
  <div>
      <top></top>
      <Navigation></Navigation>
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
    return {};
  },
  methods: {},
  mounted() {
    this.$api
      .getprovince()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>

</style>
