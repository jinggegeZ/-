<template>
 <div>
    <top :city="city"></top>
    <div class=""></div>
 </div>
</template>

<script>
import top from '../../components/top/top'

 export default {
   name: '',
   props: {
   },
   components: {
        top,
   },
   data () {
     return {
         city:''
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