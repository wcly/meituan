<template>
  <div class="layout-default">
    <el-container class="layout-default">
      <el-header height="" style="box-shadow:0 2px 27px 0 rgba(0,0,0,0.10)">
        <Header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height=""><Footer /></el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/header/index.vue";
import Footer from "@/components/footer/index.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>
