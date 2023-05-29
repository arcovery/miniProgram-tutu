import { http } from '@/utils/http'
import {
  guessLike,
  homeCategoryMutliItm,
  homeHotMutliItem,
  homeNewItem,
  resultItem,
  guessLikeParams,
} from '@/@types/home'

/**
 * 获取首页-广告
 *
 * @export
 * @param {(1 | 2)} [distributionSite=1]
 * @return {*}  {Promise<resultItem[]>}
 */
export function homeBannerAPI(
  distributionSite: 1 | 2 = 1,
): Promise<resultItem[]> {
  return http({
    method: 'GET',
    url: '/home/banner',
    data: { distributionSite },
  })
}

/**
 * 获取首页-前台分类
 *
 * @export
 * @return {*}  {Promise<homeCategoryMutliItm[]>}
 */
export function homeCategoryMutliAPI(): Promise<homeCategoryMutliItm[]> {
  return http({
    url: '/home/category/mutli',
    method: 'GET',
  })
}

/**
 * 首页-热门推荐
 *
 * @export
 * @return {*}  {Promise<homeHotMutliItem[]>}
 */
export function homeHotMutliAPI(): Promise<homeHotMutliItem[]> {
  return http({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}

/**
 * 首页-新鲜好物
 *
 * @export
 * @return {*}  {Promise<homeNewItem[]>}
 */
export function homeNewAPI(): Promise<homeNewItem[]> {
  return http({
    url: '/home/new',
  })
}

/**
 * 首页-猜你喜欢
 *
 * @export
 * @return {*}  {Promise<guessLike>}
 */
export function homeGoodsGuessLikeAPI(
  data: guessLikeParams,
): Promise<guessLike> {
  return http({
    url: '/home/goods/guessLike',
    data,
  })
}
