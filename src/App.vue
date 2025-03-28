<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app'

onLaunch(() => {})

// 监听主题切换
onThemeChange((val) => {
  console.log(`APP Theme Change ${val}`)
})
</script>

<style lang="scss">
  @import '@climblee/uv-ui/index';
</style>
