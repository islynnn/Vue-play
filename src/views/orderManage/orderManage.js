import { getList } from '@/api/orderManage'

export default {
  data() {
    return {
      condition: {
        beginDate: '',
        endDate: '',
        expressType: '',
        prescStatus: '',
        cardNo: '',
        phone: '',
        pharmacyId: '',
        prescId: '',
        pageNum: '1',
        pageSize: '10'
      },
      typeList: '',
      statusList: '',
      form: {},
      rules: '',
      dialogTitle: '',
      dialogGet: false,
      dialogfillIn: false,
      dialogTrack: false,
      orderDetail: false,
      total: 0,
      list: null,
      listLoading: false,
      selRow: {}
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
  },
  methods: {
    search() {
      this.listLoading = true
      getList(this.condition).then(response => {
        this.list = response.data
        this.listLoading = false
        this.total = response.data.total
      })
    },
    reset() {
      this.condition = ''
      this.search()
    },
    getMedicine() {
      this.dialogTitle = '核对取药信息'
      this.dialogGet = true
    },
    fillInLogistics() {
      this.dialogTitle = '核对快递信息'
      this.dialogFillIn = true
    },
    submit() {
    },
    trackLogistics() {
      this.dialogTitle = '跟踪快递信息'
      this.dialogTrack = true
    },
    check() {
      this.dialogTitle = '订单详情'
      this.orderDetail = true
    },
    changeSize(limit) {
      this.list.limit = limit
      this.search()
    },
    fetchPage(page) {
      this.list.page = page
      this.search()
    },
    fetchPrev() {
      this.list.page = this.list.page - 1
      this.search()
    },
    fetchNext() {
      this.list.page = this.list.page + 1
      this.search()
    }
  }
}
