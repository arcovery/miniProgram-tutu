<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

import { onLoad } from '@dcloudio/uni-app'
import { hotPreferenceAPI } from '@/api/recommend'
import { hotPreferenceResultItem } from '@/@types/recommend'
import { hotPreferenceParams } from '@/@types/recommend'

onLoad(({ type }) => {
  getData(type as string)
})

/** type 对应的路径的集合 */
const typePath = [
  { type: '1', url: '/hot/preference' },
  { type: '2', url: '/hot/inVogue' },
  { type: '3', url: '/hot/oneStop' },
  { type: '4', url: '' },
  { type: '5', url: '/hot/new' },
]
/** tab栏数据 */
const subTypes = ref<hotPreferenceResultItem[]>([])
/** 背景图 */
const bannerPicture = ref<string>('')
/** 当前页面 */
const page = ref<number>(1)
/** 页面大小 */
const pageSize = ref<number>(10)
/** 存储当前API地址 */
const url = ref<string>('')
/** 获取页面数据 */
const getData = async (subType: string) => {
  // 获取对应URL的type值
  const itemObject = typePath.find((item) => {
    return item.type === subType
  })
  if (!itemObject?.url) {
    return uni.showModal({
      title: '功能尚在开发',
      content: '确认返回',
      showCancel: false,
      success() {
        uni.navigateBack({
          delta: 1,
        })
      },
    })
  }
  url.value = itemObject?.url
  const res = await hotPreferenceAPI(itemObject?.url, {})
  console.log('%c Line:47 🍯 res', 'color:#465975', res)
  // 动态更新导航栏标题
  uni.setNavigationBarTitle({
    title: res.title,
  })
  // 动态更新背景图
  bannerPicture.value = res.bannerPicture
  // 动态更新tab栏
  subTypes.value = res.subTypes
}
/** 定义active  */
const active = ref<number>(0)
/** tab栏按钮点击 */
const tabTap = (index: number) => {
  active.value = index
}

/** 滚动底部加载函数 */
const scrolltolower = async () => {
  const subData = subTypes.value[active.value].goodsItems
  if (subData.finish)
    return uni.showToast({
      title: '已全部加载完成',
      icon: 'none',
    })
  const res = await hotPreferenceAPI(url.value, {
    page: ++subData.page,
    pageSize: pageSize.value,
    subType: subTypes.value[active.value].id,
  })
  const resData = res.subTypes[active.value].goodsItems
  if (resData.page === resData.pages) {
    subData.finish = true
    return uni.showToast({
      title: '没有更多了',
      icon: 'none',
    })
  }

  subData.items = [...subData.items, ...resData.items]
  console.log(subTypes.value)
}
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture"></image>
    </view>
    <view class="tabs">
      <text
        class="text"
        v-for="(item, index) in subTypes"
        :key="item.id"
        :class="{ active: index === active }"
        @click="tabTap(index)"
        >{{ item.title }}</text
      >
    </view>
    <!-- tab 下方的数据源 -->
    <scroll-view
      v-show="active === index"
      v-for="(item, index) in subTypes"
      :key="index"
      scroll-y
      enhanced
      :show-scrollbar="false"
      class="scroll-view"
      @scrolltolower="scrolltolower()"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          url="/pages/goods/index"
          class="navigator"
          v-for="(i, v) in item.goodsItems.items"
          :key="v"
        >
          <image class="thumb" :src="i.picture"></image>
          <view class="name ellipsis">{{ i.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ i.price.split('.')[0] }}</text>
            <text class="decimal">.{{ i.price.split('.')[1] }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading">{{
        item.goodsItems.finish ? '全部加载完成' : '正在加载...'
      }}</view>
    </scroll-view>
  </view>
</template>

<style>
page {
  height: 100%;
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}

.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;

  position: absolute;
  left: 0;
  top: 0;
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
}

.tabs .text {
  margin: 0 20rpx;
  position: relative;
}

.tabs .active::after {
  content: '';
  width: 40rpx;
  height: 4rpx;
  transform: translate(-50%);
  background-color: #27ba9b;
  position: absolute;
  left: 50%;
  bottom: 24rpx;
}

.scroll-view {
  flex: 1;
}

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
}

.goods .navigator {
  width: 345rpx;
  padding: 20rpx;
  margin-top: 20rpx;
  border-radius: 10rpx;
  background-color: #fff;
}

.goods .thumb {
  width: 305rpx;
  height: 305rpx;
}

.goods .name {
  height: 88rpx;
  font-size: 26rpx;
}

.goods .price {
  line-height: 1;
  color: #cf4444;
  font-size: 30rpx;
}

.goods .symbol,
.goods .decimal {
  font-size: 70%;
}
</style>
