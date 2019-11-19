<template>
    <el-card>
    <el-card style="width:100%;height:60px"><span style="display:block;height:100%;float:left">偏差考核条目配置</span></el-card>
        <el-row>
            <el-form style="margin-top: 10px">
                <el-form-item label="生效时间：" style="width: 320px;float: left" >
                <el-date-picker v-model="date" value-format="yyyy-MM-dd" type="date" style="width: 150px" />
                </el-form-item>
                <el-form-item style="float: left">
                  <el-button type="primary" style="float: left" @click="search">查询</el-button>
                  <el-button type="primary" style="float: left" @click="add">新增</el-button>
                  <el-button type="primary" style="float: left" @click="delAll">删除选中</el-button>
                </el-form-item>
            </el-form>
        </el-row>    
         <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            prop="name"
            label="排序号"
            fixed="left"
            align="center"
            width="150">
            </el-table-column>
            <el-table-column
            label="条目"
            align="center"
            width="200">
            <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
            prop="name"
            label="条目名称"
            align="center"
            width="200">
            </el-table-column>
             <el-table-column
            prop="name"
            label="开始时间"
            align="center"
            width="200">
            </el-table-column>
             <el-table-column
            prop="name"
            label="结束时间"
            align="center"
            width="200">
            </el-table-column>
             <el-table-column
            prop="name"
            label="条目名称"
            align="center"
            width="200">
            </el-table-column>
             <el-table-column
            prop="name"
            label="结算sql"
            align="center"
            width="200">
            </el-table-column>
             <el-table-column
            prop="name"
            label="计划sql"
            align="center"
            width="200">
            </el-table-column>
             <el-table-column
            prop="name"
            label="关联电厂"
            align="center"
            width="200">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100"
            align="center">
            <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>
<script>
export default {
    data(){
        return{
            date: new Date(),
            tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
        }
    },
    methods:{
        search() {
        this.queryParam.pageInfo.pageNum=1
        this.queryPage(this.queryParam)
      },
      add(){
   
      },
      delAll() {},
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    }
}
</script>
<style scoped>

</style>