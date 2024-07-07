<template>
  <el-menu
    default-active="2-1"
    class="el-menu-vertical-demo"
    :default-openeds="['8']" 
    @select="handleSelect"
  >
  <el-sub-menu index="1">
    <template #title>
       <el-icon >
        <Picture />
    </el-icon>
      <span>首页</span>
    </template>
  </el-sub-menu>
  <el-sub-menu index="2">
    <template #title>
     <el-icon >
        <Medal />
    </el-icon>
      <span>商品库浏览</span>
    </template>
  </el-sub-menu>
  <el-sub-menu index="3">
    <template #title>
       <el-icon >
        <ShoppingBag />
    </el-icon>
      <span>拍卖行</span>
    </template>
  </el-sub-menu>
  <el-sub-menu index="4">
    <template #title>
       <el-icon >
        <Shop />
    </el-icon>
      <span>买卖论坛</span>
    </template>
  </el-sub-menu>
  <el-sub-menu index="5">
    <template #title>
       <el-icon >
        <Search />
    </el-icon>
      <span>查找用户</span>
    </template>
  </el-sub-menu>
  <el-sub-menu index="6">
    <template #title>
       <el-icon >
        <Message />
    </el-icon>
      <span>私信列表</span>
    </template>
  </el-sub-menu>
  <el-sub-menu index="7">
    <template #title>
       <el-icon ><MessageBox /></el-icon>
      <span>系统消息</span>
    </template>
  </el-sub-menu>
   <el-sub-menu index="8">
    <template #title>
      <el-icon ><User /></el-icon>
      <span>个人中心</span>
    </template>
     <!-- <el-sub-menu index="8-1">
      <template #title>item four</template>
    </el-sub-menu> -->
    <el-menu-item index="8-1">用户信息</el-menu-item>
          <el-menu-item index="8-2">我的商品</el-menu-item>
          <el-menu-item index="8-3">浏览记录</el-menu-item>
          <el-menu-item index="8-4">我的收藏</el-menu-item>
  </el-sub-menu>
  </el-menu>
</template>

<script>
/* import { Medal, Message, MessageBox, Picture, Search, Shop, ShoppingBag} from '@element-plus/icons'; */
export default {
  methods: {
    handleSelect(index) {
      if (index === '1') {
        this.$router.push('/browsing-history');
      } else if (index === '2') {
        this.$router.push('/my-products');
      } else if (index === '3') {
        this.$router.push('/my-favorites');
      }else if (index === '4') {
        this.$router.push('/my-products');
      } else if (index === '5') {
        this.$router.push('/my-favorites');
      }else if (index === '6') {
        this.$router.push('/my-products');
      } else if (index === '7') {
        this.$router.push('/my-favorites');
      }else if (index === '8-1') {
        this.$router.push('/User');
      } else if (index === '8-2') {
        this.$router.push('/MyProducts');
      } else if (index === '8-3') {
        this.$router.push('/BrowsingHistory');
      } else if (index === '8-4') {
        this.$router.push('/MyFavorites');
      }
    }
  }
};
</script>

<style scoped>
.el-menu-vertical-demo {
  width: 100%;
}
</style>
