<template>
  <el-card>
  <el-row class="main" style="background-color: white;padding:20px 24px 8px;">
    <el-row>
      <el-form style="margin-top: 10px" >
        <el-form-item label="月份:" style="width: 1220px;float: left" >
          <el-date-picker v-model="date" value-format="yyyy-MM-dd" type="month" style="width: 150px;float:left"></el-date-picker>
          <el-button type="primary" style="float: left;margin-left:20px" @click="search">查询</el-button>
        </el-form-item>
        <el-form-item style="width:1200px">
          <el-button type="primary" style="float: left" @click="imitateExtract">模拟抽取</el-button>
          <el-button type="primary" style="float: left" @click="formalExtract">正式抽取</el-button>
          <el-button type="primary" style="float: left" @click="calculation">计算</el-button>
          <el-button type="primary" style="float: left" @click="save">保存</el-button>
          <el-button type="primary" style="float: left" @click="exportExcel">导出</el-button>
          <el-button type="primary" style="float:right"  @click="isShow =!isShow" >更多<i class="el-icon-arrow-down el-icon--right"></i></el-button>
        </el-form-item>
          <el-collapse-transition>
            <div style="1200px" v-if="isShow">
                <el-button type="primary" style="float: left" @click="tsetting">偏差考核条目设置</el-button>
                <el-button type="primary" style="float: left" @click="checkD">偏差考核电量偏差阈值配置</el-button>
                <el-button type="primary" style="float: left" @click="checkP">偏差考核电价阈值配置</el-button>
            </div>
          </el-collapse-transition>
      </el-form>
    </el-row>
    <el-row id="exportTab" style="margin-top:20px">
      <el-table>
        <el-table-column prop="participantName" label="发电企业" align="center" :width="150"></el-table-column>
        <el-table-column prop="accountEng" label="结算电量" align="center"></el-table-column>
        <el-table-column prop="planEng" label="计划电量" align="center"></el-table-column>
        <el-table-column prop="planFinish" label="计划完成率" align="center"></el-table-column>
        <el-table-column prop="shouldEng" label="应考核电量" align="center"></el-table-column>
        <el-table-column prop="exempEng" label="免考核电量" align="center"></el-table-column>
        <el-table-column prop="planAdjust" label="计划调整电量" align="center"></el-table-column>
        <el-table-column prop="ajustPlanFinish" label="调整后计划完成率" align="center"></el-table-column>
        <el-table-column label="电厂考核" align="center">
          <el-table-column prop="actualcheckEng" label="实际考核电量" align="center"></el-table-column>
          <el-table-column prop="checkPrice" label="考核电价" align="center"></el-table-column>
          <el-table-column prop="checkFee" label="考核电费" ></el-table-column>
        </el-table-column>
        <el-table-column label="通道考核" align="center">
          <el-table-column prop="transcheckEng" label="通道考核电量" align="center"></el-table-column>
          <el-table-column prop="transcheckPrice" label="通道考核电价" align="center"></el-table-column>
          <el-table-column prop="transcheckFee" label="通道考核电费" align="center"></el-table-column>
        </el-table-column>
        <el-table-column prop="sumFee" label="总考核电费" align="center"></el-table-column>
      </el-table>
    </el-row>
  </el-row>
  <el-tabs id="messageTab" type="border-card" style="background-color: white;padding:20px 24px 8px;">
    <el-tab-pane label="免考核申请信息">
      <el-table border style="width: 100%">
        <el-table-column prop="outPut" label="发电企业" width="180" align="center"></el-table-column>
        <el-table-column prop="startTime" label="开始时间" width="180" align="center"></el-table-column>
        <el-table-column prop="endTime" label="结束时间" align="center"></el-table-column>
        <el-table-column prop="applyadjustEng" label="申请计划调整电量" align="center"></el-table-column>
        <el-table-column prop="applycheckEng" label="申请免考核电量" align="center"></el-table-column>
        <el-table-column prop="reasonType" label="原因类型" align="center"></el-table-column>
        <el-table-column prop="eleRemark" label="电厂备注" align="center"></el-table-column>
        <el-table-column prop="agreeAjust" label="调度是否同意" align="center"></el-table-column>
        <el-table-column prop="ajustRemark" label="调度备注" align="center"></el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="免考核附件信息">
      <el-table border style="width: 100%">
        <el-table-column prop="functory" label="工厂" width="200" align="center"></el-table-column>
        <el-table-column prop="addMsg" label="附件信息" width="300" align="center"></el-table-column>
        <el-table-column prop="option" label="操作" align="center" width="300">
          <template slot-scope="">
            <el-button  type="text" size="small">预览</el-button>
            <el-button type="text" size="small">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      date: new Date(),
      exportDate:{},
      isShow:false
    }
  },
  methods:{
    search() {},
    imitateExtract() {},
    formalExtract() {},
    extract() {},
    calculation() {},
    save() {},
    exportExcel() {},
    tsetting() {
      this.$router.push({
        path:'/tsetting'
      })
    },
    checkP() {
      this.$router.push({
        path:'/checkprice'
      })
    },
    checkD() {
      this.$router.push({
        path:'/checkdeviation'
      })
    }
  },
  created() {

  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>

</style>