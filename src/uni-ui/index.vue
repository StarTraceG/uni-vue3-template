<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: 'uni-ui 示例'
  },
}
</route>

<script setup lang="ts">
import type { UniGoodsNavOption } from '@uni-helper/uni-types'

const routes = ref([
  {
    to: '/pages/index',
    name: '首页',
  },
  {
    to: '',
    name: '菜单 A',
  },
  {
    to: '',
    name: '菜单 B',
  },
])

const selectValue = ref('')
const selectOptions = ref([
  { value: '0', text: '篮球' },
  { value: '1', text: '足球' },
  { value: '2', text: '游泳' },
])

const datetimeRange = ref(['2025-02-1', '2025-3-28'])

const options = ref<UniGoodsNavOption[]>([
  { icon: 'chat', text: '客服' },
  { icon: 'shop', text: '店铺', info: 2, infoBackgroundColor: '#007aff', infoColor: '#f5f5f5' },
  { icon: 'cart', text: '购物车', info: 2 },
])
const customButtonGroup = ref([
  {
    text: '加入购物车',
    backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
    color: '#fff',
  },
  {
    text: '立即购买',
    backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
    color: '#fff',
  },
])
const buttonClick = () => {
  options.value[2].info && options.value[2].info++
}
</script>

<template>
  <div>
    <uni-section title="面包屑" padding>
      <uni-breadcrumb separator="/">
        <uni-breadcrumb-item v-for="(route, index) in routes" :key="index" :to="route.to">
          {{ route.name }}
        </uni-breadcrumb-item>
      </uni-breadcrumb>
    </uni-section>

    <uni-section title="图标" padding>
      <view>
        <uni-icons type="contact" :size="30" />
        <uni-icons type="close" :size="30" />
        <uni-icons type="cloud-upload" :size="30" />
        <uni-icons type="camera-filled" :size="30" />
        <uni-icons type="gift-filled" :size="30" />
        <uni-icons type="cart-filled" :size="30" />
        <uni-icons type="shop-filled" :size="30" />
      </view>
    </uni-section>

    <uni-section title="标签" padding>
      <view un-mb-4>
        <uni-tag text="标签" type="primary" un-mr-2 />
        <uni-tag text="标签" type="success" un-mr-2 inverted />
        <uni-tag text="标签" type="warning" un-mr-2 />
        <uni-tag text="标签" type="error" inverted un-mr-2 />
        <uni-tag text="标签" />
      </view>
      <view>
        <uni-tag text="标签" type="primary" un-mr-2 circle />
        <uni-tag text="标签" type="primary" size="small" un-mr-2 mark />
      </view>
    </uni-section>

    <uni-section title="卡片">
      <uni-card title="基础卡片" extra="额外信息">
        <text class="uni-body">
          这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。
        </text>
      </uni-card>
    </uni-section>

    <uni-section title="卡片">
      <uni-card title="基础卡片" extra="额外信息">
        <uni-list>
          <uni-list-item title="今日新闻" show-arrow />
          <uni-list-item title="今日新闻" show-switch />
        </uni-list>
        <template #actions>
          <view class="card-actions no-border">
            <view class="card-actions-item">
              <uni-icons type="redo" size="18" color="#999" />
              <text class="card-actions-item-text">
                分享
              </text>
            </view>
            <view class="card-actions-item">
              <uni-icons type="heart" size="18" color="#999" />
              <text class="card-actions-item-text">
                点赞
              </text>
            </view>
            <view class="card-actions-item">
              <uni-icons type="chatbubble" size="18" color="#999" />
              <text class="card-actions-item-text">
                评论
              </text>
            </view>
          </view>
        </template>
      </uni-card>
    </uni-section>

    <uni-section title="卡片+列表">
      <uni-card padding="0" spacing="0">
        <template #cover>
          <view class="custom-cover">
            <image class="cover-image" mode="widthFix" src="http://kcsm-ipp-develop-test.oss-cn-shenzhen.aliyuncs.com/965984637023059968_activity.jpg" />
            <view class="cover-content">
              <text class="uni-subtitle uni-white">
                今日新闻热点
              </text>
            </view>
          </view>
        </template>
        <uni-list>
          <uni-list-item title="今日新闻" show-arrow />
          <uni-list-item title="今日新闻" show-arrow />
        </uni-list>
        <template #actions>
          <view class="card-actions no-border">
            <view class="card-actions-item">
              <uni-icons type="redo" size="18" color="#999" />
              <text class="card-actions-item-text">
                分享
              </text>
            </view>
            <view class="card-actions-item">
              <uni-icons type="heart" size="18" color="#999" />
              <text class="card-actions-item-text">
                点赞
              </text>
            </view>
            <view class="card-actions-item">
              <uni-icons type="chatbubble" size="18" color="#999" />
              <text class="card-actions-item-text">
                评论
              </text>
            </view>
          </view>
        </template>
      </uni-card>
    </uni-section>

    <uni-section title="下拉框">
      <view un-px-2>
        <uni-data-select
          v-model="selectValue"
          :localdata="selectOptions"
        />
      </view>
    </uni-section>

    <uni-section :title="`日期范围用法：` + `[${datetimeRange}]`">
      <view un-px-2>
        <uni-datetime-picker v-model="datetimeRange" type="daterange" />
      </view>
    </uni-section>

    <uni-section title="商品导航">
      <uni-goods-nav
        :fill="true"
        :options="options"
        :button-group="customButtonGroup"
        @button-click="buttonClick"
      />
    </uni-section>
  </div>
</template>

<style scoped>
.custom-cover {
  position: relative;
  flex: 1;
  flex-direction: row;
}

.cover-content {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding-left: 15px;
  font-size: 14px;
  color: #fff;
  background-color: rgb(255 255 255 / 40%);
}

.card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 45px;
  border-top: 1px #eee solid;
}

.card-actions-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-actions-item-text {
  margin-left: 5px;
  font-size: 12px;
  color: #666;
}

.cover-image {
  flex: 1;
  width: 100%;
  height: 150px;
}

.no-border {
  border-width: 0;
}
</style>
