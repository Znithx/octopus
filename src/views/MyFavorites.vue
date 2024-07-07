<template>
  <el-container>
    <el-aside width="200px">
      <SidebarNavigation />
    </el-aside>
  <el-container>
    <el-header style="background-color: #ffffff; border-bottom: 1px solid #ebeef5;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>我的收藏</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main style="background-color: #ffffff; padding: 20px;">
      <user-info :user="user" :statistics="statistics"></user-info>
      <el-row>
        <el-col :span="24">
          <h3>我的收藏</h3>
          <el-table :data="favorites" style="width: 100%">
            <el-table-column prop="productName" label="商品名称"></el-table-column>
            <el-table-column prop="collectionTime" label="收藏时间"></el-table-column>
            <el-table-column label="操作">
              <template #default="scope">
                <el-link type="primary" @click="viewProduct(scope.row)" class="operation-button">查看商品</el-link>
                <el-link type="danger" @click="removeFavorite(scope.row)" class="operation-button">移除收藏</el-link>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-main>
      </el-container>
  </el-container>
</template>

<script>
import SidebarNavigation from '@/components/SidebarNavigation.vue';

export default {
  components: {
    SidebarNavigation,
  },
  data() {
    return {
      user: {
        profilePictureUrl: 'https://example.com/profile.jpg',
        username: 'dsfuis',
        studentId: '2489372598',
        qq: '2489372598',
        realName: 'xxx',
        phone: '2489372598',
        wechat: '2489372598'
      },
      statistics: {
        boughtItemsCount: 12,
        soldItemsCount: 10,
        successRate: 100,
        successfulTransactions: 22,
        disputedTransactions: 0,
        creditScore: 100
      },
      favorites: [
        { productName: '高等数学教材', collectionTime: '2021-02-28 10:30' },
        { productName: '计算机网络复习资料', collectionTime: '2021-02-27 14:20' }
      ]
    };
  },
  methods: {
    viewProduct(product) {
      // 查看商品的操作
      console.log('查看商品:', product);
    },
    removeFavorite(product) {
      // 移除收藏的操作
      console.log('移除收藏:', product);
    }
  }
};
</script>
