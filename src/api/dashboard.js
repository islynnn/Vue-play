import request from '@/utils/request'

export function orderCount(data) {
  return request({
    url: '/api/home/order',
    method: 'post',
    params: data
  })
}

export function weekCount(params) {
  return request({
    url: '/api/home/week',
    method: 'get',
    params
  })
}

export function amountCount(data) {
  return request({
    url: '/api/home/amount',
    method: 'post',
    params: data
  })
}
