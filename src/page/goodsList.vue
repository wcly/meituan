<template>
  <div class="page-product">
    <el-row>
      <Crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <Categroy />
        </el-row>
        <el-row>
          <List />
        </el-row>
      </el-col>
      <el-col :span="5">map + tuijian</el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from "@/components/products/Crumbs";
import Categroy from "@/components/products/Categroy";
import List from "@/components/products/List";
export default {
  components: {
    Crumbs,
    Categroy,
    List
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>
