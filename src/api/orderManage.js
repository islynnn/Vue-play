import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/api/presc/list',
    method: 'post',
    params
  })
}

export function checkOrder(params) {
  return request({
    url: '/api/presc/order',
    method: 'post',
    params
  })
}

export function checkDrug(params) {
  return request({
    url: '/api/presc/drug',
    method: 'post',
    params
  })
}

export function getAddress(params) {
  return request({
    url: '/api/pharmacy/address',
    method: 'get',
    params
  })
}

export function getDrug(params) {
  return request({
    url: '/api/pharmacy/get_drug',
    method: 'post',
    params
  })
}

export function SetExpress(params) {
  return request({
    url: '/api/pharmacy/set_express',
    method: 'post',
    params
  })
}
