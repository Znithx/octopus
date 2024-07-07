<template>
  <el-container>
    <el-aside width="200px">
      <SidebarNavigation />
    </el-aside>
    <el-container>
      <el-main>
        <UserInfo />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SidebarNavigation from '@/components/SidebarNavigation.vue';
import UserInfo from '@/components/UserInfo.vue';

export default {
  components: {
    SidebarNavigation,
    UserInfo,
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.el-container {
  height: 100%;
}

</style>
