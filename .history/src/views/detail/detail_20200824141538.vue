<template>
  <div>
    <top></top>
    <div class="topbox2">
      <div class="top">
        <div class="detail-topbox">
          <div class="detail-topbox-left">
            <div>
              <img
                class="detail-topbox-leftimg"
                src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
                alt
              />
            </div>
            <div class="detail-topbox-leftbox">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in menu"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                </el-option>
              </el-select>
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
      menu:[],
      value:''
    };
  },
  methods: {},
  mounted() {
      this.$api.getall().then(res => {
          if(res.code === 200){
              this.menu = res.data.menu
              console.log(this.menu);
          }
      }).catch(err => {})
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>