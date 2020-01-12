<template>
  <div>
    <div class="search">
      <el-form ref="userForm" :model="userForm" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="用户名" prop="userName">
              <el-input placeholder="输入用户名查询" v-model="userForm.userName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱" prop="userEmail">
              <el-input placeholder="输入邮箱查询" v-model="userForm.userEmail"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button @click="reSet">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <elGrid
      :elGridOp="elGridOp"
      @handleSelectionChange="handleSelectionChange"
      @rowClick="rowClick"
      @cellClick="cellClick"
      @filtersData="filtersData"
      @sortClick="sortClick"
    ></elGrid>
  </div>
</template>
<style>
</style>
<script>
/* eslint-disable */
import elGrid from "@/components/elGrid/index.vue";
export default {
  components: {
    elGrid
  },
  data() {
    return {
      elGridOp: {
        // isSort字段为判断是否过滤， none为不过滤
        multipleTable: true,
        maxHeight: 600,
        border: true,
        size: "mini",
        showHeader: true,
        resizable: true,
        isSort: true,
        colums: [
          {
            id: "name",
            prop: "name",
            label: "姓名",
            minWidth: "180",
            filterType: "input"
          },
          {
            id: "date",
            prop: "date",
            label: "日期",
            minWidth: "180",
            filterType: "date"
          },
          {
            id: "address",
            prop: "address",
            label: "地址",
            minWidth: "180",
            filterType: "input"
          },
          {
            id: "sel",
            prop: "sel",
            label: "选项",
            minWidth: "180",
            filterType: "select"
          }
        ],
        tableData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
            sel: "001"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
            sel: "002"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
            sel: "003"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            sel: "004"
          }
        ]
      },
      userForm: {
        userName: null,
        userEmail: null
      }
    };
  },
  methods: {
    handleSelectionChange(val) {},
    rowClick(val) {},
    cellClick(val) {},
    filtersData(val) {
      console.log("filtersData=========>", val);
    },
    sortClick(val) {
      console.log("sortClick===========>", val);
    },
    onSubmit() {
      this.$refs["userForm"].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    reSet(userForm) {
      this.$refs["userForm"].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.search {
  margin-bottom: 20px;
}
</style>
