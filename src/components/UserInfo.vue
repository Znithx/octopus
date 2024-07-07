<template>
  <el-container>
    <el-header style="background-color: #ffffff; border-bottom: 1px solid #ebeef5;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>用户信息</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main style="background-color: #ffffff; padding: 20px;">
      <el-row>
        <el-col :span="4" style="position: relative;">
          <el-avatar :src="user.headURL" size="large" style="width: 150px; height: 150px;"></el-avatar>
          <el-button type="primary" icon="el-icon-camera" circle size="small" class="camera-icon" @click="handleAvatarChange"></el-button>
        </el-col>
        <el-col :span="10">
          <div>
            <p>用户名：{{ user.username }} <el-link type="primary" @click="editUser('username')">修改</el-link></p>
            <p>学号：{{ user.userID }}</p>
            <p>QQ：{{ user.qq }} <el-link type="primary" @click="editUser('qq')">修改</el-link></p>
          </div>
        </el-col>
        <el-col :span="10">
          <div>
            <p>真实姓名：{{ user.realName }} <el-link type="primary" @click="editUser('realName')">修改</el-link></p>
            <p>手机号：{{ user.phoneNum }} <el-link type="primary" @click="editUser('phoneNum')">修改</el-link></p>
            <p>微信：{{ user.weChat }} <el-link type="primary" @click="editUser('weChat')">修改</el-link></p>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <h3>交易统计</h3>
          <div class="stats-box">
            <el-row>
              <el-col :span="12">
                <p>买入商品数：{{ statistics.boughtItemsCount }}</p>
              </el-col>
              <el-col :span="12">
                <p>卖出商品数：{{ statistics.soldItemsCount }}</p>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <p>交易成功率：{{ statistics.successRate }}%</p>
              </el-col>
              <el-col :span="12">
                <p>交易成功数：{{ statistics.successfulTransactions }}</p>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <p>交易争议数：{{ statistics.disputedTransactions }}</p>
              </el-col>
              <el-col :span="12">
                <p>信誉度：{{ statistics.creditScore }}</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <h3>交易记录</h3>
          <el-table :data="records" style="width: 100%">
            <el-table-column prop="transactionType" label="交易类型"></el-table-column>
            <el-table-column prop="transactionItem" label="交易物品"></el-table-column>
            <el-table-column prop="status" label="当前状态"></el-table-column>
            <el-table-column prop="creationTime" label="创建时间"></el-table-column>
            <el-table-column label="操作">
              <template #default="scope">
                <el-link type="primary" @click="viewRecord(scope.row)" class="operation-button">查看</el-link>
                <el-link v-if="scope.row.status === '进行中'" type="danger" @click="cancelRecord(scope.row)" class="operation-button">撤回</el-link>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" />
    </el-main>
    <el-dialog v-model:visible="dialogVisible" title="修改信息">
      <el-form :model="form">
        <el-form-item label="值">
          <el-input v-model="form.value"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="updateUser">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </el-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {},
      statistics: {
        boughtItemsCount: 12,
        soldItemsCount: 10,
        successRate: 100,
        successfulTransactions: 22,
        disputedTransactions: 0,
        creditScore: 100
      },
      records: [
        {
          transactionType: '普通交易',
          transactionItem: '高等数学教材',
          status: '进行中',
          creationTime: '2021-02-28 10:30'
        },
        {
          transactionType: '拍卖',
          transactionItem: '计算机网络复习资料',
          status: '已完成',
          creationTime: '2021-02-28 10:30'
        }
      ],
      dialogVisible: false,
      form: {
        field: '',
        value: ''
      }
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      axios.get('/api/users/first')
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleAvatarChange() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        axios.post('/api/users/upload-avatar', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          this.user.profilePictureUrl = response.data.url;
        }).catch(error => {
          console.error("Error uploading file:", error);
        });
      }
    },
    editUser(field) {
      this.form.field = field;
      this.form.value = this.user[field];
      this.dialogVisible = true;
    },
    updateUser() {
      this.user[this.form.field] = this.form.value;
      axios.put('/api/users/update', this.user)
        .then(response => {
          this.user = response.data;
          this.dialogVisible = false;
          this.fetchUser();  // 更新成功后重新获取用户信息
        })
        .catch(error => {
          console.error(error);
        });
    },
    viewRecord(record) {
      // 查看交易记录的操作
      console.log('查看交易记录:', record);
    },
    cancelRecord(record) {
      // 撤回交易记录的操作
      console.log('撤回交易记录:', record);
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
</style>
