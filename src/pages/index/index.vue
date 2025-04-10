<route lang="json5" type="home">
{
  layout: 'wotdemo',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: 'uni-vue3-template'
  }
}
</route>

<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const userTheme = computed(() => userStore.theme)
</script>

<template>
  <div class="app" :class="{ dark: isDark }">
    <view class="px-4 py-4 text-center">
      <AppLogos />
    </view>
    <view un-mb-4>
      <wd-cell title="当前主题" center>
        <view class="i-carbon-sun dark:i-carbon-moon" @click="toggleDark()" />
      </wd-cell>
      <wd-cell title="主题切换" center>
        <view class="flex items-center justify-end" style="height: 32px;">
          <view class="mr-4">
            {{ userTheme === 'dark' ? '黑暗模式' : '明亮模式' }}
          </view>
          <wd-switch v-model="userTheme" active-value="dark" inactive-value="light" @change="toggleDark()" />
        </view>
      </wd-cell>
    </view>
    <wd-card title="项目集成 UI 组件库部分示例">
      <wd-grid clickable>
        <wd-grid-item
          link-type="navigateTo"
          url="/wot-design-uni/index"
          icon="discount-filled"
          text="Wot Design Uni"
        />
        <wd-grid-item
          link-type="navigateTo"
          url="/uv-ui/index"
          icon="discount-filled"
          text="uv-ui"
        />
        <wd-grid-item
          link-type="navigateTo"
          url="/uni-ui/index"
          icon="discount-filled"
          text="uni-ui"
        />
      </wd-grid>
    </wd-card>
  </div>
</template>

<style lang="scss"></style>
