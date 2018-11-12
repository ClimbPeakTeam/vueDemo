
/*
*   列表-详情接口
*
*/
import service from '../request'
import qs from 'qs'

export function newsListApi(data) {
  return service({
      url: '/newslist',
      method: 'post',
      data: qs.stringify(data)
  })
}
