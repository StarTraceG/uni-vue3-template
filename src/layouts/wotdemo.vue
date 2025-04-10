<script lang="ts" setup>
import type { ConfigProviderThemeVars } from 'wot-design-uni'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const userTheme = computed(() => userStore.theme)

const themeVars: ConfigProviderThemeVars = {
  // colorTheme: 'red',
  // buttonPrimaryBgColor: '#07c160',
  // buttonPrimaryColor: '#07c160',
}
</script>

<template>
  <wd-config-provider :theme="userTheme" :theme-vars="themeVars">
    <slot />
    <wd-toast />
    <wd-message-box />
  </wd-config-provider>
</template>
