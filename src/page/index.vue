<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <Menu />
      </el-col>
      <el-col :span="19">
        <Life />
      </el-col>
    </el-row>
    <el-row :span="24">
      <Container :nav="iStyleList" />
      <Container :nav="recomment" />
    </el-row>
  </div>
</template>

<script>
import Menu from "@/components/index/Menu";
import Life from "@/components/index/Life";
import Container from "@/components/index/Container";
export default {
  components: {
    Menu,
    Life,
    Container
  },
  data() {
    return {
      iStyleList: {
        class: "iStyle",
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人SPA",
            tab: "spa"
          },
          {
            text: "电影演出",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "travel"
          }
        ]
      },
      recomment: {
        class: "youhui",
        title: "很优惠",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "美食",
            tab: "food"
          },
          {
            text: "休闲",
            tab: "xiuxian"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
