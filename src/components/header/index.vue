<template>
  <div class="m-header">
    <el-row>
      <TopBar />
    </el-row>
    <el-row>
      <SearchBar />
    </el-row>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";

export default {
  components: {
    TopBar,
    SearchBar
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
</style>
