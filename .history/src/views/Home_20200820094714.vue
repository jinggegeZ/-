<template>
 <div class="content">
      <div class="content-c"><top></top>
      <Navigation></Navigation></div>
 </div>
</template>

<script>
import top from '../components/top/top'
import Navigation from '../components/Navigation/Navigation'
 export default {
   name: '',
   props: {
   },
   components: {
     top,
     Navigation
   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {
     this.$api.
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
}
.content-c {
  min-width: 960px;
}
</style>
