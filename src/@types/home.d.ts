export type resData<T> = {
  code: string
  msg: string
  result: Array<T>
}
export type resultItem = {
  [key in 'hrefUrl' | 'id' | 'imgUrl' | 'type']: string
}

export interface homeCategoryMutliItm {
  /**
   * 展示图标
   */
  icon: string
  /**
   * id
   */
  id: string
  /**
   * 分类名称
   */
  name: string
}

/**
 * 热门推荐
 */
export interface homeHotMutliItem {
  /**
   * 推荐说明
   */
  alt: string
  /**
   * id
   */
  id: string
  /**
   * 图片集合
   */
  pictures: string[]
  /**
   * 跳转地址
   */
  target: string
  /**
   * 推荐标题
   */
  title: string
  /**
   * 推荐类型
   */
  type: string
}

/**
 * 新鲜好物
 */
export interface homeNewItem {
  /**
   * 备注
   */
  desc: string
  /**
   * id
   */
  id: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 商品图片链接
   */
  picture: string
  /**
   * 价格
   */
  price: number
  /** 订单 */
  orderNum: number
}

/**
 * 首页-猜你喜欢
 */
export interface guessLike {
  /**
   * 总条数
   */
  counts: number
  /**
   * 当前页数据
   */
  items: guessLikeItem[]
  /**
   * 当前页数
   */
  page: number
  /**
   * 总页数
   */
  pages: number
  /**
   * 每页条数
   */
  pageSize: number
}

export interface guessLikeItem {
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品折扣
   */
  discount: number
  /**
   * id
   */
  id: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 商品已下单数量
   */
  orderNum: number
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: number
}

export interface guessLikeParams {
  /**
   * 页码默认值1
   */
  page?: number
  /**
   * 页大小默认是10
   */
  pageSize?: number
}
