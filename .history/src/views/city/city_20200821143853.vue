<template>
 <div>
    <top :city="city"></top>
    <Navigation :city="city"></Navigation>
 </div>
</template>

<script>
import top from "../components/top/top";
import Navigation from "../components/Navigation/Navigation";
 export default {
   name: '',
   props: {
   },
   components: {
        top,
    Navigation,
   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {
         //获取城市
    this.$api
      .getposition()
      .then((res) => {
        this.city = JSON.parse(res.data).city;
      })
      .catch((err) => {});
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>