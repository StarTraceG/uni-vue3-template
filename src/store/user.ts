const initState = { nickname: '', avatar: '' }

export const useUserStore = defineStore(
  'user',
  () => {
    const theme = ref()
    theme.value = uni.getSystemInfoSync()?.theme
    const setTheme = (val: string) => {
      theme.value = val
    }

    const userInfo = ref<IUserInfo>({ ...initState })

    const setUserInfo = (val: IUserInfo) => {
      userInfo.value = val
    }

    const clearUserInfo = () => {
      userInfo.value = { ...initState }
    }
    const isLogined = computed(() => !!userInfo.value.token)

    return {
      theme,
      setTheme,
      userInfo,
      setUserInfo,
      clearUserInfo,
      isLogined,
    }
  },
  {
    persist: true,
  },
)
