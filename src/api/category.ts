import { http } from '@/utils/http'
import { Result } from '@/@types/category'

/**
 * 获取分类列表
 *
 * @export
 * @return {*}  {Promise<Result[]>}
 */
export function categoryTopAPI(): Promise<Result[]> {
  return http({
    url: '/category/top',
    method: 'GET',
  })
}
