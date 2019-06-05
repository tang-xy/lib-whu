<template>
  <div class='training-card' :class="{ 'selected': isSelected }">
    <div class='author'>
      <span class='key'>讲座主题：</span>
      <span class='value'>{{theme}}</span>
    </div>
    <div class='speaker'>
      <span class='key'>主讲人：</span>
      <span class='value'>{{spealker}}</span>
    </div>
    <div class='timer'>
      <span class='key'>时间：</span>
      <span class='value'>{{timer}}</span>
    </div>
    <div class='place'>
      <span class='key'>地点：</span>
      <span class='value'>{{place}}</span>
    </div>
    <div class="info-underscores">
        <view class="divLine"></view>
    </div>
    <div class="line">
      <div type='default' @click='toStar' class="star">
        <image :src=picpath mode='aspectFit'/>
      </div>
      <div type='default' open-type="share" class="star">
        <image src='https://system.lib.whu.edu.cn/mp-static/221/分享@3x.png' mode='aspectFit'/>
      </div>
      <button class="more">
        <span>详情</span>
      </button>
    </div>
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
    timer: {
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
  },
  data: {
  },
  computed: {
    index() {
      return (this.key + 1).toString();
    },
    picpath() {
      if (this.isSelected) {
        return 'https://system.lib.whu.edu.cn/mp-static/221/选中@3x.png';
      } return 'https://system.lib.whu.edu.cn/mp-static/221/星星@3x.png';
    },
  },
  methods: {
    toStar() {
      this.isSelected = !this.isSelected;
    },
  },
};
</script>

<style lang="scss" scoped>
.training-card{
  height: 382rpx;
  width: 625rpx;
  border-style: solid;
  border-radius: 1rpx;
  border-width: 1rpx;
  border-color: #777777;
  padding-left: 35rpx;
  padding-bottom: 24rpx;
  padding-top: 27rpx;
  padding-right: 35rpx;
  background-color: white;
  margin-bottom: 16rpx;
  position: relative;
  .author{
    display: flex;
    font-size: 24rpx;
    align-items: center;
    color: #525252;
    margin-left: 4rpx;
    margin-bottom: 48rpx;
    .key{
      font-size: 24rpx;
    }
    .value{
      font-size: 24rpx;
      font-weight: lighter;
      color: #525252;
    }
  }
  .speaker{
    display: flex;
    font-size: 24rpx;
    align-items: center;
    color: #525252;
    margin-top: 0;
    margin-left: 4rpx;
    margin-bottom: 48rpx;
    .key{
      font-size: 24rpx;
    }
    .value{
      font-size: 24rpx;
      font-weight: lighter;
      color: #525252;
    }
  }
  .timer{
    display: flex;
    font-size: 24rpx;
    align-items: center;
    color: #525252;
    margin-left: 4rpx;
    margin-bottom: 48rpx;
    .key{
      font-size: 24rpx;
    }
    .value{
      font-size: 24rpx;
      font-weight: lighter;
      color: #525252;
    }
  }
  .place{
    display: flex;
    font-size: 24rpx;
    align-items: center;
    color: #525252;
    margin-left: 4rpx;
    margin-bottom: 48rpx;
    .key{
      font-size: 24rpx;
    }
    .value{
      font-size: 24rpx;
      font-weight: lighter;
      color: #525252;
    }
  }
  .info-underscores{
    height: 3rpx;
    padding-left: 0;
    width: 100%;
    .divLine{
      background: #ababab;
      height: 3rpx;
    }
  }
  .line{
    flex-wrap: wrap;
    display: flex;
    .star{
      margin-left: 32rpx;
      margin-top: 19rpx;
      margin-right: 181rpx;
      height: 43rpx;
      width: 41rpx;
      background: none;
      image{
          height: 100%;
          width: 100%;
      }
    }
    .star::after{
      border: none;
    }
    .more{
      padding-left: 0%;
      padding-bottom: 0%;
      padding-top: 0%;
      padding-right: 0%;
      height: 9vw;
      width: 9vw;
      background: none;
      border: none;
      font-size: 32rpx;
      span{
        color: #777777;
      }
    }
    .more::after{
      border: none;
    }
  }
}
</style>
