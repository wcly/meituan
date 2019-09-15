<template>
  <div class="m-header m-header-topbar">
    <el-col :span="10">
      <Geo />
    </el-col>
    <el-col :span="14">
      <Nav />
    </el-col>
  </div>
</template>

<script>
import Geo from "./Geo";
import Nav from "./Nav";
export default {
  components: {
    Geo,
    Nav
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/topbar.scss";
</style>
