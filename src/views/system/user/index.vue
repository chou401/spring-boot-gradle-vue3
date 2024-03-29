<template>
  <el-card shadow="never" class="card-box">
    <!--    查询-->
    <el-form :model="queryForm" label-width="80px">
      <el-row :gutter="20">
        <el-col :sm="24" :md="12" :lg="8" :xl="6">
          <el-form-item :label="$t('user.userName')">
            <el-input v-model="queryForm.username" clearable :placeholder="$t('common.input') + $t('user.userName')" />
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8" :xl="6">
          <el-form-item :label="$t('user.nickName')">
            <el-input v-model="queryForm.nickname" clearable :placeholder="$t('common.input') + $t('user.nickName')" />
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8" :xl="6">
          <el-form-item :label="$t('user.phone')">
            <el-input v-model="queryForm.phone" clearable maxlength="11"
              :placeholder="$t('common.input') + $t('user.phone')" />
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8" :xl="6">
          <el-form-item :label="$t('user.roleName')">
            <el-select v-model="queryForm.roleId" clearable :placeholder="$t('common.select') + $t('user.roleName')">
              <el-option v-for="item in roleList" :label="item.name" :value="item.id" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8" :xl="6">
          <el-form-item :label="$t('user.status')">
            <el-select v-model="queryForm.status" clearable :placeholder="$t('common.select') + $t('user.status')">
              <el-option :label="$t('common.enable')" :value="1" />
              <el-option :label="$t('common.disable')" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8" :xl="6">
          <el-form-item label-width="0">
            <el-button type="primary" @click="onSearch">
              <el-icon>
                <ele-search />
              </el-icon>
              <span class="search-btn__left">{{ $t('common.query') }}</span>
            </el-button>
            <el-button @click="onReset">
              <el-icon>
                <ele-refresh />
              </el-icon>
              <span class="search-btn__left">{{ $t('common.reset') }}</span>
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!--    新 增-->
    <div class="-btn-box mbtable10">
      <el-button type="primary" @click="openDialog" v-permission="['sys:user:add']">
        <el-icon class="mr5">
          <ele-circle-plus />
        </el-icon>
        {{ $t('common.add') }}
      </el-button>
    </div>
    <!--    表格-->
    <el-table :data="tableData.data" border style="width: 100%" row-key="id" @sort-change="sortChange">
      <el-table-column prop="username" :label="$t('user.userName')" align="center" />
      <el-table-column prop="nickname" :label="$t('user.nickName')" align="center" />
      <el-table-column prop="roleName" :label="$t('user.roleName')" align="center" />
      <el-table-column prop="phone" :label="$t('user.phone')" align="center" width="150" />
      <el-table-column prop="email" :label="$t('user.email')" align="center" width="180" />
      <el-table-column prop="gender" :label="$t('user.gender')" align="center">
        <template #default="scope">
          <el-tag v-if="scope.row.gender === 0" type="danger" disable-transitions>{{ $t('common.women') }}</el-tag>
          <el-tag v-else-if="scope.row.gender === 1" type="success" disable-transitions>{{ $t('common.man') }}</el-tag>
          <el-tag v-else type="info" disable-transitions>{{ $t('common.unkown') }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="status" :label="$t('user.status')" align="center">
        <template #default="scope">
          <el-tag v-if="scope.row.status" type="success" disable-transitions>{{ $t('common.enable') }}</el-tag>
          <el-tag v-else type="danger" disable-transitions>{{ $t('common.disable') }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" sortable="custom" :label="$t('user.createDate')" align="center" width="180" />
      <el-table-column :label="$t('common.operation')" fixed="right" align="center" width="200">
        <template #default="{ row }">
          <template v-if="!row.isAdmin">
            <el-button link type="primary" @click="openDialog(row)" v-permission="['sys:user:update']">
              {{ $t('common.update') }}
            </el-button>
            <el-button link type="primary" @click="openPswDialog(row)" v-permission="['sys:user:reset-password']">
              {{ $t('common.resetPassword') }}
            </el-button>
            <el-button @click="delTable(row)" link type="danger" v-permission="['sys:user:delete']">
              {{ $t('common.delete') }}
            </el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <!--    分页-->
    <CustomPagination v-model:currentPage="pageData.pageIndex" v-model:pageSize="pageData.pageSize"
      :total="pageData.total" @changePage="changePage" />

    <!--    添加，编辑弹框-->
    <TableForm ref="tableDialogRef" @refresh="getTableList" :roleList="roleList" />

    <!--    重置密码-->
    <ResetPassword ref="passwordDialogRef" />
  </el-card>
</template>
<script lang="ts" setup>
import { deleteSysUser, getSysUserList } from "@/api/user";
import { ElMessage, ElMessageBox } from 'element-plus'
import TableForm from './table-form.vue'
import ResetPassword from './reset-password.vue'
import { getSysRoleAllList } from "@/api/role";

/** 查询*/
let queryForm = ref({})
// 查询
const onSearch = () => {
  pageData.pageIndex = 1;
  getTableList();
}
// 重置
const onReset = () => {
  queryForm.value = {}
  pageData.pageIndex = 1;
  getTableList();
}

/** 分页*/
// 分页数据
const pageData = reactive({
  pageIndex: 1,
  pageSize: 10,
  total: 0
})
// 翻页
const changePage = (page: number) => {
  pageData.pageIndex = page;
  getTableList();
}

/** 排序*/
const orderBy = ref({})

/** 表格*/
// 表格数据
const tableData = reactive({
  data: [],
})
// 获取表格列表
const getTableList = () => {
  getSysUserList({ ...pageData, ...queryForm.value, orderBy: { ...orderBy.value } }).then(res => {
    tableData.data = res.list || [];
    pageData.total = res.total;
  })
}
// 删除
const delTable = (row: any) => {
  ElMessageBox.confirm(
    '是否确认删除本条数据？',
    '提示',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    })
    .then(() => {
      deleteSysUser(row.id).then(() => {
        ElMessage.success('删除成功');
        getTableList();
      })
    }).catch(() => {
    })
}
// 排序
const sortChange = ({ column, prop, order }) => {
  if (order) {
    orderBy.value.column = "create_time";
    orderBy.value.asc = order === "ascending";
  } else {
    orderBy.value = {}
  }

  pageData.pageIndex = 1;
  getTableList();
}

/** 角色信息*/
const roleList = ref([])
// 获取角色数据
const getRoleList = () => {
  return new Promise((resolve) => {
    getSysRoleAllList({}).then(res => {
      roleList.value = res || [];
      resolve(roleList.value)
    })
  })
}

/** 添加，编辑*/
const tableDialogRef = ref()
// 打开弹框
const openDialog = async (row: any = {}) => {
  await tableDialogRef.value.openDialog(row);
}

/** 重置密码*/
const passwordDialogRef = ref()
// 打开弹框
const openPswDialog = async (row: any) => {
  await passwordDialogRef.value.openPswDialog(row);
}

getRoleList();
getTableList();
</script>
<style></style>
