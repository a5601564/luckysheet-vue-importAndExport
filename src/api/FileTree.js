import request from '../utils/request'

export function fetchList(query) {
  return request({
    url: '/api/stock/getFileTree',
    method: 'get',
    params: query
  })
}

export function getLocalFile(query) {
  return request({
    url: '/api/stock/getFile',
    method: 'get',
    params: query
  })
}

export function getLocalFileById(query) {
  return request({
    url: '/api/stock/getFileById',
    method: 'get',
    params: query
  })
}


export function getLocalFileByName(query) {
  return request({
    url: '/api/stock/getFileByName',
    method: 'get',
    params: query
  })
}

export function getWXNotify(query) {
  return request({
    url: '/api/stock/getWXNotify',
    method: 'get',
    params: query
  })
}


export function getLastKlines(query) {
  return request({
    url: '/api/stock/getLastKlines',
    method: 'get',
    params: query
  })
}


export function submitMonitorForm(data) {
  return request({
    url: '/api/stock/submitMonitorForm',
    method: 'post',
    data: data
  })
}


export function deleteMonitorForm(data) {
  return request({
    url: '/api/stock/deleteMonitorForm',
    method: 'delete',
    data: data
  })
}


export function getPriceMonitors(query) {
  return request({
    url: '/api/stock/getPriceMonitors',
    method: 'get',
    params: query
  })
}
