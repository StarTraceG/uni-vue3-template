<script setup lang="ts">
const theme = ref()
theme.value = uni.getSystemInfoSync().theme
const handleThemeChange = ({ value }: { value: string }) => {
  console.log('handleThemeChange---', value)
}

onLoad(() => {
  uni.onThemeChange(({ theme }) => {
    console.log('onThemeChange', theme)
  })
})
</script>

<template>
  <wd-cell title="当前主题" center>
    <view style="height: 32px;">
      {{ theme === 'dark' ? '黑暗模式' : '明亮模式' }}
    </view>
  </wd-cell>
  <wd-cell title="主题切换" center>
    <view class="flex items-center justify-end" style="height: 32px;">
      <view class="mr-4">
        {{ theme === 'dark' ? '黑暗模式' : '明亮模式' }}
      </view>
      <wd-switch v-model="theme" active-value="dark" inactive-value="light" @change="handleThemeChange" />
    </view>
  </wd-cell>
  <view px-4 py-4 text-center>
    <AppLogos />
  </view>
  <wd-card title="项目集成 UI 组件库部分示例">
    <wd-grid clickable>
      <wd-grid-item
        link-type="navigateTo"
        url="/pages/wot-design-uni/index"
        icon="discount-filled"
        text="Wot Design Uni"
      />
      <wd-grid-item
        link-type="navigateTo"
        url="/pages/uv-ui/index"
        icon="discount-filled"
        text="uv-ui"
      />
      <wd-grid-item
        link-type="navigateTo"
        url="/pages/uni-ui/index"
        icon="discount-filled"
        text="uni-ui"
      />
    </wd-grid>
  </wd-card>
</template>

<style lang="scss"></style>
