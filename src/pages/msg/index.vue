<route lang="json5" type="page">
{
  layout: 'tabbar',
  style: {
    navigationBarTitleText: '消息',
  },
}
</route>

<script lang="ts" setup>
//
</script>

<template>
  <view class="main-box">
    消息中心
  </view>
</template>

<style lang="scss" scoped>
.main-box {
  min-height: calc(100vh - 50px - var(--window-bottom));
}
</style>
