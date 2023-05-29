/** 特惠推荐请求参数 */
export interface hotPreferenceParams {
  /**
   * 分页页码
   */
  page?: number
  /**
   * 分页数据每页条数
   */
  pageSize?: number
  /**
   * Tab 项的 id，默认查询全部 Tab 项的第 1 页数据
   */
  subType?: string
}
/** 特惠推荐反返回结果 */
export interface hotPreferenceResult {
  /**
   * 活动图片
   */
  bannerPicture: string
  /**
   * id信息
   */
  id: string
  /**
   * 子类选项集合
   */
  subTypes: hotPreferenceResultItem[]
  /**
   * 活动标题
   */
  title: string
}
/** 子类选项集合 */
export interface hotPreferenceResultItem {
  goodsItems: hotPreferenceResultGoodsItem
  /**
   * 子类选项id
   */
  id: string
  /**
   * 子类选项名称
   */
  title: string
}
/** 商品选项 */
export interface hotPreferenceResultGoodsItem {
  counts: number
  items: hotPreferenceResultGoodsItemSub[]
  page: number
  pageSize: number
  pages: number
  finish?: boolean
}
export interface hotPreferenceResultGoodsItemSub {
  desc?: string
  id: string
  name: string
  orderNum: number
  picture: string
  price: string
}
