<template>
  <div class="dashboard-editor-container">
    <h2>系统首页</h2>

    <div class="orderCount">
      <div class="orderCountHead">
        <span class="title">订单统计</span>
        <el-date-picker
          v-model="order.beginDate"
          type="date"
          placeholder="开始日期"
        />
        -
        <el-date-picker
          v-model="order.endDate"
          type="date"
          placeholder="结束日期"
        />
        <el-button @click="searchOrder(order)">{{ $t('button.search') }}</el-button>
        <el-button @click="searchOrder">本月</el-button>
        <el-button @click="searchOrder">本周</el-button>
        <el-button @click="searchOrder">本年</el-button>
      </div>
      <hr>
      <panel-group @handleSetLineChartData="orderData" />
    </div>

    <div class="recentCount">
      <el-row>
        <span class="title">近一周统计</span>
      </el-row>
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <line-chart :chart-data="weekData" />
      </el-row>
    </div>

    <div class="amountCount">
      <el-row>
        <span class="title">金额统计</span>
        <el-date-picker
          v-model="amount.beginDate"
          type="date"
          placeholder="开始日期"
        />
        -
        <el-date-picker
          v-model="amount.endDate"
          type="date"
          placeholder="结束日期"
        />
        <el-button @click="searchAmount(amount)">{{ $t('button.search') }}</el-button>
        <el-button @click="">本月</el-button>
        <el-button @click="">本周</el-button>
        <el-button @click="">本年</el-button>
      </el-row>
      <hr>
      <el-row>
        <pie-chart :chart-data="amountData" />
      </el-row>
    </div>

  </div>
</template>

<script>
import { orderCount } from '@/api/dashboard'
import { weekCount } from '@/api/dashboard'
import { amountCount } from '@/api/dashboard'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
// import RaddarChart from './components/RaddarChart'
// import BarChart from './components/BarChart'
// import TransactionTable from './components/TransactionTable'
// import TodoList from './components/TodoList'
// import BoxCard from './components/BoxCard'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    PieChart
    // RaddarChart,
    // BarChart,
    // TransactionTable,
    // TodoList,
    // BoxCard
  },
  data() {
    return {
      order: {
        beginDate: '',
        endDate: ''
      },
      amount: {
        beginDate: '',
        endDate: ''
      },
      orderData: '',
      weekData: '',
      amountData: ''
      // lineChartData: lineChartData.newVisitis
    }
  },
  created() {
    this.init()
  },
  methods: {
    // handleSetLineChartData(type) {
    //   this.lineChartData = lineChartData[type]
    // }
    init() {
      weekCount().then(response => {
        this.weekData = response.data
      })
    },
    searchOrder(order) {
      orderCount(order).then(response => {
        this.orderData = response.data
      })
    },
    searchAmount(order) {
      amountCount(order).then(response => {
        this.amountData = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

.orderCount,.recentCount,.amountCount {
  padding: 15px;
  margin: 15px;
  background-color: #ffffff;
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
