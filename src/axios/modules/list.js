
/*
*   列表-详情接口
*
*/
import service from '../request'
import qs from 'qs'

export function mineHelpApi(data) {
  return service({
      url: '/Support/findAll',
      method: 'post',
      data: qs.stringify(data)
  })
}
