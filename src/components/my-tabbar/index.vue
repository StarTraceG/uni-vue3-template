<script setup lang="ts">
// unocss icon 默认不生效，需要在这里写一遍才能生效！注释掉也是生效的，但是必须要有！
// i-ant-design-home-outlined
// i-ant-design-message-outlined
// i-ant-design-user-outlined
import { tabBar } from '@/pages.json'
import { tabbarStore } from './tabbar'

/** tabbarList 里面的 path 从 pages.config.ts 得到 */
const tabbarList = tabBar.list.map(item => ({ ...item, path: `/${item.pagePath}` }))

const selectTabBar = ({ value: index }: { value: number }) => {
  const url = tabbarList[index].path
  tabbarStore.setCurIdx(index)
  uni.switchTab({ url })
}

onLoad(() => {
  // 解决原生 tabBar 未隐藏导致有2个 tabBar 的问题
  // #ifdef APP-PLUS | H5
  uni.hideTabBar({
    fail(err) {
      console.log('hideTabBar fail: ', err)
    },
    success(res) {
      console.log('hideTabBar success: ', res)
    },
  })
  // #endif
})
</script>

<template>
  <wd-tabbar
    v-model="tabbarStore.curIdx"
    bordered
    safeareainsetbottom
    placeholder
    fixed
    shape="round"
    @change="selectTabBar"
  >
    <block v-for="(item, idx) in tabbarList" :key="item.path">
      <wd-tabbar-item
        v-if="item.iconType === 'wot'"
        :title="item.text"
        :icon="item.icon"
      />
      <wd-tabbar-item
        v-else-if="item.iconType === 'unocss' || item.iconType === 'iconfont'"
        :title="item.text"
      >
        <template #icon>
          <view
            :class="[item.icon, idx === tabbarStore.curIdx ? 'is-active' : 'is-inactive']"
            class="h-40rpx w-40rpx"
          />
        </template>
      </wd-tabbar-item>
      <wd-tabbar-item v-else-if="item.iconType === 'local'" :title="item.text">
        <template #icon>
          <image :src="item.icon" class="h-40rpx w-40rpx" />
        </template>
      </wd-tabbar-item>
    </block>
  </wd-tabbar>
</template>
