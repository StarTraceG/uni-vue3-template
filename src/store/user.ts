export const useUserStore = defineStore(
  'user',
  () => {
    const theme = ref()
    theme.value = uni.getSystemInfoSync()?.theme
    const setTheme = (val: string) => {
      theme.value = val
    }

    return {
      theme,
      setTheme,
    }
  },
  {
    persist: true,
  },
)
