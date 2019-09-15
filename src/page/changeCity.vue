<template>
  <div class="page-changeCity">
    <el-row>
      <Province />
    </el-row>
    <el-row>
      <Hot title="热们城市：" :list="hostList" />
    </el-row>
    <el-row>
      <Hot title="最近访问：" :list="recentList" />
    </el-row>
    <el-row>
      <Category />
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/changeCity/Province";
import Hot from "@/components/changeCity/Hot";
import Category from "@/components/changeCity/Category";
import api from "@/api";
export default {
  components: {
    Province,
    Hot,
    Category
  },
  created() {
    api.getHotCity().then(res => {
      this.hostList = res.data.data.map(item => item.name);
    });
    api.getRecentCity().then(res => {
      this.recentList = res.data.data.map(item => item.name);
    });
  },
  data() {
    return {
      hostList: [],
      recentList: []
    };
  }
};
</script>
