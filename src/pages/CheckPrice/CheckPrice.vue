<template>
    <el-card>
        <el-row>
          <el-card style="width:100%;height:60px"><span style="display:block;height:100%;float:left">偏差考核电价阈值配置</span></el-card>
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
            <el-table-column prop="participantName" label="发电企业" align="center"></el-table-column>
            <el-table-column prop="startTime" label="开始时间" align="center"></el-table-column>
            <el-table-column prop="endTime" label="结束时间" align="center"></el-table-column>
            <el-table-column prop="bechPrice" label="标杆电价" align="center"></el-table-column>
            <el-table-column prop="rate" label="标杆电价比例" align="center"></el-table-column>
            <el-table-column prop="checkPrice" label="考核电价" align="center"></el-table-column>
            <el-table-column prop="transPrice" label="通道电价" align="center"></el-table-column>
            <el-table-column prop="transcheckPrice" label="通道考核电价" align="center"></el-table-column>
            <el-table-column prop="tunelRate" label="通道电价比例" align="center"></el-table-column>
            <el-table-column prop="remark" label="备注" align="center"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100" align="center">
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
          participantName:'类型一',
          startTime: '2016-05-03',
          endTime: '2019-11-19',
          bechPrice:"521",
          rate:'61%',
          checkPrice:'1314',
          transPrice:'521',
          transcheckPrice:'123',
          tunelRate:'88%',
          remark:'这是个备注',
        }, {
          participantName:'类型一',
          startTime: '2016-05-03',
          endTime: '2019-11-19',
          bechPrice:"521",
          rate:'61%',
          checkPrice:'1314',
          transPrice:'521',
          transcheckPrice:'123',
          tunelRate:'88%',
          remark:'这是个备注',
        }, {
          participantName:'类型一',
          startTime: '2016-05-03',
          endTime: '2019-11-19',
          bechPrice:"521",
          rate:'61%',
          checkPrice:'1314',
          transPrice:'521',
          transcheckPrice:'123',
          tunelRate:'88%',
          remark:'这是个备注',
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