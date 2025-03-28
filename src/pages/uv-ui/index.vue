<script setup lang="ts">
const uvSwitch1 = ref(false)
const uvSwitch2 = ref(true)
</script>

<template>
  <div px-2 py2>
    <uv-divider text-position="left" text="按钮" />
    <div mb-2>
      <uv-row justify="space-between" gutter="10">
        <uv-col span="3">
          <uv-button type="primary" size="small" text="确定" />
        </uv-col>
        <uv-col span="3">
          <uv-button type="primary" size="small" :plain="true" text="镂空" />
        </uv-col>
        <uv-col span="3">
          <uv-button type="primary" size="small" :plain="true" :hairline="true" text="细边" />
        </uv-col>
        <uv-col span="3">
          <uv-button type="primary" size="small" disabled text="禁用" />
        </uv-col>
      </uv-row>
    </div>
    <uv-row justify="space-between" gutter="10">
      <uv-col span="3">
        <uv-button type="primary" size="small" loading loading-text="加载中" />
      </uv-col>
      <uv-col span="3">
        <uv-button type="primary" size="small" icon="map" text="图标按钮" />
      </uv-col>
      <uv-col span="3">
        <uv-button type="primary" size="small" shape="circle" text="按钮形状" />
      </uv-col>
      <uv-col span="3">
        <uv-button text="渐变色按钮" size="small" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" />
      </uv-col>
    </uv-row>

    <uv-divider text-position="left" text="图标" />
    <div flex>
      <uv-icon name="level" size="32" />
      <uv-icon name="home" size="32" />
      <uv-icon name="share-fill" size="32" />
      <uv-icon name="tags-fill" size="32" />
      <uv-icon name="mic" size="32" />
      <uv-icon name="weixin-fill" size="32" />
    </div>

    <uv-divider text-position="left" text="输入框" />
    <div mb-2>
      <uv-input placeholder="前置插槽">
        <template #prefix>
          <uv-text text="http://" margin="0 3px 0 0" type="tips" />
        </template>
      </uv-input>
    </div>
    <div mb-2>
      <uv-input placeholder="后置插槽">
        <template #suffix>
          <uv-button text="获取验证码" type="success" size="mini" />
        </template>
      </uv-input>
    </div>

    <uv-divider text-position="left" text="开关" />
    <div flex>
      <div mx-2>
        <uv-switch v-model="uvSwitch1" loading />
      </div>
      <div mx-2>
        <uv-switch v-model="uvSwitch2" loading />
      </div>
    </div>

    <uv-divider text-position="left" text="标签" />
    <div mb-2 flex>
      <div mr-2>
        <uv-tags text="标签" />
      </div>
      <div mr-2>
        <uv-tags text="标签" type="warning" />
      </div>
      <div mr-2>
        <uv-tags text="标签" type="success" />
      </div>
      <div mr-2>
        <uv-tags text="标签" type="error" />
      </div>
    </div>
    <div flex>
      <div mr-2>
        <uv-tags text="标签" plain />
      </div>
      <div mr-2>
        <uv-tags text="标签" type="warning" plain />
      </div>
      <div mr-2>
        <uv-tags text="标签" type="success" plain />
      </div>
      <div mr-2>
        <uv-tags text="标签" type="error" plain />
      </div>
    </div>

    <uv-divider text-position="left" text="展开更多" />
    <uv-read-more show-height="200rpx" :toggle="true">
      <view class="content">
        <view>丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。</view>
        <view>明月几时有？把酒问青天。不知天上宫阙，今夕是何年。</view>
        <view>我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。</view>
        <view>转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？</view>
        <view>人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。</view>
      </view>
    </uv-read-more>

    <uv-divider text-position="left" text="步骤条" />
    <uv-steps current="0">
      <uv-steps-item title="已下单" desc="10:30" />
      <uv-steps-item title="已出库" desc="10:35" />
      <uv-steps-item title="运输中" desc="11:40" />
    </uv-steps>
  </div>
</template>

<style scoped>

</style>
