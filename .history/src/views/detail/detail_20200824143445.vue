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
              <el-select v-model="value" placeholder="全部分类">
                <el-option
                  v-for="item in menu"
                  :key="item.id"
                  :label="item.label"
                  :value="item.name"
                >
                
                  <span style="float: left" v-if="Array.isArray(item.name)">
                    <span v-for="(item1,index1) in item.name" :key="index1">{{item1}}<span v-if="index1 !==  item.name.length-1">/</span> </span>
                  </span>
                  <span style="float: left" v-else>{{ item.name }}</span>
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
      menu: [],
      value: "",
    };
  },
  methods: {},
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