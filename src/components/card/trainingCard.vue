<template>
  <div class='training-card' :class="{ 'selected': isSelected }">
    <div class='author'>
      <span class='key'>主题：</span>
      <span class='value'>{{theme}}</span>
    </div>
    <div class='timer'>
      <span class='key'>时间：</span>
      <span class='value'>{{time}}</span>
    </div>
    <div class='place'>
      <span class='key'>地点：</span>
      <span class='value'>{{place}}</span>
    </div>
    <div class='speaker'>
      <span class='key'>主讲人：</span>
      <span class='value'>{{spealker}}</span>
    </div>
    <div class="info-underscores">
        <view class="divLine"></view>
    </div>
    <div class="line">
      <div class="title">内容简介</div>
      <div class='show' @click=toStar >
        <image :src="picpath" />
      </div>
      <div class='bell' @click=toBell >
        <image :src="bellpath" />
      </div>
      <div class="tip">提醒</div>
    </div>
    <div class="content" v-if="isSelected">{{content}}</div>
  </div>
</template>

<script>
export default {
  name: 'trainingCard',
  props: {
    theme: {
      type: String,
      required: true,
      default: 'theme',
    },
    spealker: {
      type: String,
      required: true,
      default: 'spealker',
    },
    time: {
      type: String,
      required: true,
      default: 'timer',
    },
    place: {
      type: String,
      required: true,
      default: 'place',
    },
    isSelected: {
      type: Boolean,
      required: true,
      default: false,
    },
    content: {
      type: String,
      required: true,
      default: '',
    },
    isSelectedbell: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data: {
    ani: null,
  },
  onLoad() {
  },
  computed: {
    index() {
      return (this.key + 1).toString();
    },
    picpath() {
      if (this.isSelected) {
        return 'https://system.lib.whu.edu.cn/mp-static/221/更多 拷贝@2x.png';
      } return 'https://system.lib.whu.edu.cn/mp-static/221/更多.png';
    },
    bellpath() {
      if (this.isSelectedbell) {
        return 'https://system.lib.whu.edu.cn/mp-static/221/tixing-2 拷贝@2x.png';
      } return 'https://system.lib.whu.edu.cn/mp-static/221/tixing-2.png';
    },
  },
  methods: {
    toStar() {
      this.isSelected = !this.isSelected;
    },
    toBell() {
      this.isSelectedbell = !this.isSelectedbell;
    },
  },
};
</script>

<style lang="scss" scoped>
.training-card{
  border: #BFBFBF;
  border-radius: 17rpx;
  width: 636rpx;
  border-style: solid;
  border-width: 1rpx;
  padding-left: 24rpx;
  padding-top: 40rpx;
  padding-right: 30rpx;
  background-color: white;
  margin-top: 15rpx;
  position: relative;
  .author{
    display: flex;
    font-size: 24rpx;
    align-items: center;
    color: #646464;
    margin-left: 4rpx;
    margin-bottom: 24rpx;
    .key{
      font-size: 24rpx;
    }
    .value{
      font-size: 24rpx;
      color: #646464;
    }
  }
  .speaker{
    display: flex;
    font-size: 24rpx;
    align-items: center;
    color: #646464;
    margin-top: 0;
    margin-left: 4rpx;
    margin-bottom: 24rpx;
    .key{
      font-size: 24rpx;
    }
    .value{
      font-size: 24rpx;
      color: #646464;
    }
  }
  .timer{
    display: flex;
    font-size: 24rpx;
    align-items: center;
    color: #646464;
    margin-left: 4rpx;
    margin-bottom: 24rpx;
    .key{
      font-size: 24rpx;
    }
    .value{
      font-size: 24rpx;
      color: #646464;
    }
  }
  .place{
    display: flex;
    font-size: 24rpx;
    align-items: center;
    color: #646464;
    margin-left: 4rpx;
    margin-bottom: 24rpx;
    .key{
      font-size: 24rpx;
    }
    .value{
      font-size: 24rpx;
      color: #646464;
    }
  }
  .info-underscores{
    height: 3rpx;
    padding-left: 0;
    width: 100%;
    .divLine{
      background: #D2D2D2;
      height: 3rpx;
    }
  }
  .content{
    font-size:24rpx;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(166,166,166,1);
    line-height:36rpx;
    margin-left: 23rpx;
    width: 623rpx;
    margin-bottom: 42rpx;
  }
  .line{
    flex-wrap: wrap;
    margin-bottom: 42rpx;
    display: flex;
    font-size: 24rpx;
    color: #646464;
    .title{
      margin-left: 12rpx;
      margin-top: 39rpx;
      font-weight:500;
    }
    .show{
      margin-left: 16rpx;
      margin-top: 32rpx;
      height: 13rpx;
      width: 27rpx;
      image{
        height: 100%;
        width: 100%;
      }
    }
    .bell{
      margin-left: 352rpx;
      margin-top: 30rpx;
      height: 36rpx;
      width: 30rpx;
      image{
        height: 100%;
        width: 100%;
      }
    }
    .tip{
      margin-top: 38rpx;
      margin-left: 24rpx;
    }
  }
}
</style>
