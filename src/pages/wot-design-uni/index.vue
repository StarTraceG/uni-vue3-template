<script setup lang="ts">
import type { PlacementType } from 'wot-design-uni/components/wd-popover/types'
import type { SignatureResult } from 'wot-design-uni/components/wd-signature/types'
import { useUserStore } from '@/store/user'
import { useToast } from 'wot-design-uni'

const userStore = useUserStore()
const userTheme = userStore.theme

const show = ref<boolean>(false)
const panels = ref<any[]>([])

const showActions = () => {
  show.value = true
  panels.value = [
    [
      {
        iconUrl: 'https://img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
        title: '微信好友',
      },
      {
        iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/111572/11/11734/1245/5f0692a1E39d13d21/b35dfe9243bd6c2a.png',
        title: '微信朋友圈',
      },
      {
        iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/132639/25/4003/945/5f069336E18778248/fa181913030bed8a.png',
        title: 'QQ好友',
      },
      {
        iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/134807/4/3950/1256/5f069336E76949e27/d20641da8e699f07.png',
        title: '微信收藏',
      },
    ],
    [
      {
        iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/132639/25/4003/945/5f069336E18778248/fa181913030bed8a.png',
        title: 'QQ好友',
      },
      {
        iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/134807/4/3950/1256/5f069336E76949e27/d20641da8e699f07.png',
        title: '微信收藏',
      },
      {
        iconUrl: 'https://img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
        title: '微信好友',
      },
    ],
  ]
}
const close = () => {
  show.value = false
}

const toast = useToast()
const select = ({ item, rowIndex, colIndex }: { item: any, rowIndex: number, colIndex: number }) => {
  toast.show(`当前选中项: ${item.title}, 行下标: ${rowIndex}, 列下标: ${colIndex}`)
}

const page = ref(1)
const total = ref(100)
const pageSize = ref(10)
const pageChange = ({ value }: { value: number }) => {
  console.log('pageChange---', value)
}

const showPopover = ref<boolean>(false)
const placement = ref<PlacementType>('top')
const menu = ref<Array<Record<string, any>>>([
  {
    iconClass: 'read',
    content: '全部标记已读',
  },
  {
    iconClass: 'delete',
    content: '清空最近会话',
  },
  {
    iconClass: 'detection',
    content: '消息订阅设置',
  },
  {
    iconClass: 'subscribe',
    content: '消息异常检测',
  },
])
const menuclick = (e: any) => {
  toast.show(`选择了${e.item.content}`)
}

const radio = ref<number>(1)

const searchType = ref<string>('车牌号')
const searchValue = ref<string>('')
const searchMenu = ref([
  {
    content: '车牌号',
  },
  {
    content: '订单号',
  },
  {
    content: '退款单号',
  },
])
const changeSearchType = ({ item }: { item: any }) => {
  searchType.value = item.content
}
const signatureImg = ref<Partial<SignatureResult>>({})
const confirmSignature = (result: SignatureResult) => {
  signatureImg.value = result
}
const clearSignature = () => {
  signatureImg.value = {}
}
</script>

<template>
  <view class="app" :class="{ dark: isDark }">
    <wd-config-provider :theme="userTheme">
      <div class="px-2 py-2">
        <wd-divider content-position="left">
          按钮
        </wd-divider>
        <wd-button>主要按钮</wd-button>
        <wd-button type="success">
          成功按钮
        </wd-button>
        <wd-button type="info">
          信息按钮
        </wd-button>
        <wd-button type="warning">
          警告按钮
        </wd-button>
        <wd-button type="error">
          危险按钮
        </wd-button>
        <wd-button plain>
          幽灵按钮
        </wd-button>
        <wd-button plain hairline>
          细边框幽灵按钮
        </wd-button>

        <wd-divider content-position="left">
          图标
        </wd-divider>
        <wd-icon name="check" size="22px" />
        <wd-icon name="refresh" size="22px" />
        <wd-icon name="thin-arrow-left" size="22px" />
        <wd-icon name="close" size="22px" />
        <wd-icon name="delete-thin" size="22px" />
        <wd-icon name="camera" size="22px" />
        <wd-icon name="clock" size="22px" />
        <wd-icon name="fullsreen" size="22px" />
        <wd-icon name="fullscreen-exit" size="22px" />

        <wd-divider content-position="left">
          动作面板
        </wd-divider>
        <wd-button @click="showActions">
          弹出菜单
        </wd-button>
        <wd-action-sheet v-model="show" :panels="panels" cancel-text="取消" @close="close" @select="select" />

        <wd-divider content-position="left">
          文本脱敏
        </wd-divider>
        <wd-text text="诸葛亮" mode="name" :format="true" />
        <wd-text text="15825266685" mode="phone" :format="true" />

        <wd-divider content-position="left">
          分页
        </wd-divider>
        <wd-pagination v-model="page" :total="total" :page-size="pageSize" @change="pageChange" />

        <wd-divider content-position="left">
          汽包
        </wd-divider>
        <wd-popover v-model="showPopover" mode="menu" :placement="placement" :content="menu" @menuclick="menuclick">
          <wd-button>操作</wd-button>
        </wd-popover>

        <wd-divider content-position="left">
          汽包
        </wd-divider>
        <wd-radio-group v-model="radio" cell shape="button">
          <wd-radio value="1">
            选项一
          </wd-radio>
          <wd-radio value="2">
            选项二
          </wd-radio>
          <wd-radio value="3">
            选项三
          </wd-radio>
          <wd-radio value="4">
            选项四
          </wd-radio>
          <wd-radio value="5">
            选项五
          </wd-radio>
          <wd-radio value="6">
            选项六
          </wd-radio>
          <wd-radio value="7">
            选项七
          </wd-radio>
        </wd-radio-group>

        <wd-divider content-position="left">
          搜索框
        </wd-divider>
        <wd-search v-model="searchValue" placeholder-left cancel-txt="搜索">
          <template #prefix>
            <wd-popover mode="menu" :content="searchMenu" @menuclick="changeSearchType">
              <view class="search-type">
                <text>{{ searchType }}</text>
                <wd-icon class="icon-arrow" name="fill-arrow-down" />
              </view>
            </wd-popover>
          </template>
        </wd-search>

        <wd-divider content-position="left">
          签名
        </wd-divider>
        <wd-signature :export-scale="2" @submit="confirmSignature" @clear="clearSignature" />
        <wd-img v-if="signatureImg.tempFilePath" mode="widthFix" width="100%" :src="signatureImg.tempFilePath" />

        <wd-divider content-position="left">
          卡片
        </wd-divider>
        <wd-card title="标题内容" type="rectangle">
          <view style="height: 40px" class="content">
            <image
              src="https://img11.360buyimg.com/imagetools/jfs/t1/143248/37/5695/265818/5f3a8546E98d998a4/745897ca9c9e474b.jpg"
              width="40"
              height="40"
              alt="joy"
              style="width: 40px; height: 40px; margin-right: 12px; border-radius: 4px"
            />
            <view>
              <view class="custom-main">
                智云好客CRM短信_催评营销<span>
                  sdf</span>
              </view>
              <view class="custom-sub">
                高级版 | 周期一年
              </view>
            </view>
          </view>
          <template #footer>
            <view>
              <wd-button size="small" plain custom-style="margin-right: 8px">
                评价
              </wd-button>
              <wd-button size="small">
                立即使用
              </wd-button>
            </view>
          </template>
        </wd-card>

        <wd-divider content-position="left">
          图片
        </wd-divider>
        <wd-row :gutter="16">
          <wd-col :span="8">
            <wd-img
              width="100"
              height="100"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              mode="scaleToFill"
              :enable-preview="true"
            />
          </wd-col>
          <wd-col :span="8">
            <wd-img
              width="100"
              height="100"
              :radius="8"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              mode="scaleToFill"
              :enable-preview="true"
            />
          </wd-col>
          <wd-col :span="8">
            <wd-img
              width="100"
              height="100"
              round
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              mode="scaleToFill"
              :enable-preview="true"
            />
          </wd-col>
        </wd-row>
      </div>

      <wd-toast />
    </wd-config-provider>
  </view>
</template>

<style scoped lang="scss">
.search-type {
  position: relative;
  height: 30px;
  padding: 0 8px 0 16px;
  line-height: 30px;
  color: rgb(0 0 0 / 45%);

  &::after {
    position: absolute;
    top: 5px;
    right: 0;
    bottom: 5px;
    width: 1px;
    content: '';
    background: rgb(0 0 0 / 25%);
    transform: scaleX(0.5);
  }

  .icon-arrow {
    display: inline-block;
    margin-left: 4px;
    font-size: 18px;
    vertical-align: middle;
    color: rgb(0 0 0 / 65%);
  }
}
</style>
