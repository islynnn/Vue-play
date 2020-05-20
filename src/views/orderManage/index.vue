<template>
  <div class="app-container">
    <div class="block">
      <h2>订单管理</h2>
      <el-form :inline="true" :model="condition">
        <el-row>
          <el-col :span="12">
            <el-form-item label="订单日期">
              <el-date-picker
                v-model="condition.beginDate"
                type="date"
                placeholder="开始日期"
              />
              -
              <el-date-picker
                v-model="condition.endDate"
                type="date"
                placeholder="结束日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="订单类型">
              <el-select v-model="condition.expressType" placeholder="请选择" clearable>
                <el-option v-for="item in typeList" :key="item.key" :label="item.value" :value="item.key" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="订单状态">
              <el-select v-model="condition.prescStatus" placeholder="请选择" clearable>
                <el-option v-for="item in statusList" :key="item.key" :label="item.value" :value="item.key" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="就诊卡号">
              <el-input v-model="condition.cardNo" placeholder="请选择" clearable /></el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号">
              <el-input v-model="condition.phone" placeholder="请选择" clearable /></el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="search">{{ $t('button.search') }}</el-button>
            <el-button type="success" @click="reset">{{ $t('button.reset') }}</el-button>
          </el-col>
        </el-row>
      </el-form>

      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column label="姓名" width="100">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column label="手机号" width="160">
          <template slot-scope="scope">
            {{ scope.row.phone }}
          </template>
        </el-table-column>
        <el-table-column label="就诊卡号" width="">
          <template slot-scope="scope">
            {{ scope.row.cardNo }}
          </template>
        </el-table-column>
        <el-table-column label="订单日期" width="160">
          <template slot-scope="scope">
            {{ scope.row.orderDate }}
          </template>
        </el-table-column>
        <el-table-column label="订单类型" width="100">
          <template slot-scope="scope">
            {{ scope.row.orderType }}
          </template>
        </el-table-column>
        <el-table-column label="订单状态" width="100">
          <template slot-scope="scope">
            {{ scope.row.orderStatus }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <!-- <el-button v-if="scope.row.orderStatus==='待取药'" type="text" @click="getMedicine">患者取药</el-button>
          <el-button v-if="scope.row.orderStatus==='待发货'" type="text" @click="fillInLogistics">填写单号</el-button>
          <el-button v-if="scope.row.orderStatus==='待收货'" type="text" @click="trackLogistics">物流跟踪</el-button>
          <el-button @click="check">{{ $t('button.check') }}</el-button> -->
        </el-table-column>
      </el-table>

      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogGet"
        width="70%"
      >
        <el-form ref="form" :model="form" :rules="rules" label-width="150px">
          <el-form-item>
            <el-button @click.native="dialogGet = false">{{ $t('button.close') }}</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogfillIn"
        width="70%"
      >
        <el-form ref="form" :model="form" :rules="rules" label-width="150px">
          <el-form-item>
            <el-button @click.native="dialogFillIn = false">完成取药</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogTrack"
        width="70%"
      >
        <el-form ref="form" :model="form" :rules="rules" label-width="150px">
          <el-form-item>
            <el-button @click.native="submit">确认提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <el-dialog
        :title="dialogTitle"
        :visible.sync="orderDetail"
        width="100%"
      >
        <el-form ref="form" :model="form" :rules="rules" label-width="150px">
          <el-form-item>
            <el-button @click.native="orderDetail = false">{{ $t('button.close') }}</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[10, 20, 50, 100,500]"
        :page-size="10"
        :total="total"
        @size-change="changeSize"
        @current-change="fetchPage"
        @prev-click="fetchPrev"
        @next-click="fetchNext"
      />
    </div>
  </div>
</template>

<script src="./orderManage.js"></script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/common.scss";
</style>
