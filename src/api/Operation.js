import request from '../utils/request'

export function stopProcess(query) {
  return request({
    url: '/api/op/stopProcess',
    method: 'get',
    params: query
  })
}

export function getProcess(query) {
  return request({
    url: '/api/op/getProcess',
    method: 'get',
    params: query
  })
}

export function terminateProcess(query) {
  return request({
    url: '/api/op/terminateProcess',
    method: 'get',
    params: query
  })
}

export function gridTradingInfo_list(query) {
  return request({
    url: '/api/gridTradingInfo/list',
    method: 'get',
    params: query
  })
}

export function gridTradingInfo_update(data) {
  return request({
    url: '/api/gridTradingInfo/update',
    method: 'post',
    data: data
  })
}


export function gridTradingInfo_delete(data) {
  return request({
    url: '/api/gridTradingInfo/delete',
    method: 'post',
    data: data
  })
}


export function sysConfigInfo_list(query) {
  return request({
    url: '/api/sysConfigInfo/list',
    method: 'get',
    params: query
  })
}

export function sysConfigInfo_update(data) {
  return request({
    url: '/api/sysConfigInfo/update',
    method: 'post',
    data: data
  })
}


export function sysConfigInfo_delete(data) {
  return request({
    url: '/api/sysConfigInfo/delete',
    method: 'post',
    data: data
  })
}

export function addStrategy(query) {
  return request({
    url: '/api/op/addStrategy',
    method: 'post',
    data: query
  })
}

export function updateStrategy(query) {
  return request({
    url: '/api/op/updateStrategy',
    method: 'post',
    data: query
  })
}


export function getStrategys(query) {
  return request({
    url: '/api/op/getStrategys',
    method: 'get',
    params: query
  })
}

export function addFavorite(query) {
  return request({
    url: '/api/op/addFavorite',
    method: 'post',
    data: query
  })
}


export function getFavorites(query) {
  return request({
    url: '/api/op/getFavorites',
    method: 'get',
    params: query
  })
}