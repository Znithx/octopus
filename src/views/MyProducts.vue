<template>
  <el-container>
    <el-aside width="200px">
      <SidebarNavigation />
    </el-aside>
    <el-container>
      <el-header style="background-color: #ffffff; border-bottom: 1px solid #ebeef5;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>个人中心</el-breadcrumb-item>
          <el-breadcrumb-item>我的商品</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main style="background-color: #ffffff; padding: 20px;">
        <user-info :user="user" :statistics="statistics"></user-info>
        <el-row>
          <el-col :span="24">
            <h3>我的商品</h3>
            <el-button type="primary" @click="addProduct" style="margin-bottom: 20px;">添加新商品</el-button>
            <el-table :data="myProducts" style="width: 100%">
              <el-table-column prop="productName" label="商品名称"></el-table-column>
              <el-table-column prop="status" label="状态"></el-table-column>
              <el-table-column prop="creationTime" label="创建时间"></el-table-column>
              <el-table-column label="操作">
                <template #default="scope">
                  <el-link type="primary" @click="editProduct(scope.row)" class="operation-button">编辑</el-link>
                  <el-link type="danger" @click="deleteProduct(scope.row)" class="operation-button">删除</el-link>
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
      myProducts: [
        { productName: '高等数学教材', status: '上架中', creationTime: '2021-02-28 10:30' },
        { productName: '计算机网络复习资料', status: '已售出', creationTime: '2021-02-27 14:20' }
      ]
    };
  },
  methods: {
    addProduct() {
      // 添加新商品的操作
      console.log('添加新商品');
    },
    editProduct(product) {
      // 编辑商品的操作
      console.log('编辑商品:', product);
    },
    deleteProduct(product) {
      // 删除商品的操作
      console.log('删除商品:', product);
    }
  }
};
</script>

<style>
.el-container {
  background-color: #ffffff;
}

.el-header {
  background-color: #ffffff;
  padding: 10px 20px;
  border-bottom: 1px solid #ebeef5;
}

.el-main {
  background-color: #ffffff;
  padding: 20px;
}

.el-avatar {
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  position: relative;
}

.camera-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.el-row {
  margin-bottom: 20px;
}

.stats-box {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.el-table {
  background-color: #f5f5f5;
}

.operation-button {
  margin-right: 10px;
}

h3 {
  border-bottom: 2px solid #ebeef5;
  padding-bottom: 5px;
  margin-bottom: 20px;
  font-weight: bold;
}

.el-button {
  float: right;
}
</style>
