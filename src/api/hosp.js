import request from '@/utils/request'

const api_name = '/admin/hosp/hospital'

export default {

  // 医院列表
  getPageList(current, limit, searchObj) {
    return request({
      url: api_name + `/${current}/${limit}`,
      method: 'get',
      data: searchObj
    })
  },

  // 根据dictcode查询下级数据字典
  findByDictCode(dictCode) {
    return request({
      url: `/admin/cmn/dict/findByDictCode/${dictCode}`,
      method: 'get'
    })
  },

  // 根据id查询下级数据字典
  findByParentId(id) {
    return request({
      url: `/admin/cmn/dict/findChildData/${id}`,
      method: 'get'
    })
  },

  // 更新医院状态
  updateStatus(id, status) {
    return request({
      url: api_name + `/updateStatus/${id}/${status}`,
      method: 'get'
    })
  },

  // 查看医院详情
  getHospById(id) {
    return request({
      url: api_name + `/showHospDetail/${id}`,
      method: 'get'
    })
  },

  getDeptByHoscode(hoscode) {
    return request({
      url: `/admin/hosp/department/getDeptList/${hoscode}`,
      method: 'get'
    })
  },

  getScheduleRule(page, limit, hoscode, depcode) {
    return request({
      url: `/admin/hosp/schedule/getScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },

  // 查询排班详情
  getScheduleDetail(hoscode, depcode, workDate) {
    return request({
      url: `/admin/hosp/schedule/getScheduleDetail/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  }

}
