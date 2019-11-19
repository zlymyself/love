<template>
    <el-card>
    <el-card style="width:100%;height:60px"><span style="display:block;height:100%;float:left">偏差考核电量偏差阈值配置</span></el-card>
        <el-row>
            <el-form style="margin-top: 10px">
                <el-form-item label="生效时间：" style="width: 320px;float: left" >
                <el-date-picker v-model="date" value-format="yyyy-MM-dd" type="date" style="width: 150px" />
                </el-form-item>
                <el-select v-model="value" placeholder="请选择发电类型" style="float:left">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-form-item style="float: left;margin-left:20px">
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
            label="发电类型"
            fixed="left"
            align="center"
            width="150">
            </el-table-column>
            <el-table-column
            prop="date"
            label="开始时间"
            align="center"
            width="200">
            </el-table-column>
            <el-table-column
            prop="date"
            label="结束时间"
            align="center"
            width="200">
            </el-table-column>
             <el-table-column
            prop="num"
            label="正偏差"
            align="center"
            width="200">
            </el-table-column>
             <el-table-column
            prop="num"
            label="负偏差"
            align="center"
            width="200">
            </el-table-column>
             <el-table-column
            prop="remark"
            label="备注"
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
            num:'2',
            remark:'我也不知道为啥'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            num:'2',
            remark:'我也不知道为啥'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            num:'2',
            remark:'我也不知道为啥'
          }],
        options:[{
          value: '选项1',
          label: '发电类型一'
        }, {
          value: '选项2',
          label: '发电类型二'
        }, {
          value: '选项3',
          label: '发电类型三'
        }],
        value: '',
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