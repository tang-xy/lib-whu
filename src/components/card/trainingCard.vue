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
      <button type='default' @click='toStar' class="star">
        <image src='/static/221/星星@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toStar' class="star">
        <image src='/static/221/分享@3x.png' mode='aspectFit'/>
      </button>
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
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.training-card{
  margin-top: 2%;
  margin-bottom: 2%;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: grey;
  padding-left: 5%;
  padding-bottom: 3%;
  padding-top: 3%;
  padding-right: 3%;
  background-color: white;
  position: relative;
  .author{
    display: flex;
    font-size: 40rpx;
    align-items: center;
    color: #444444;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
    .key{
      margin-right: 4vw;
    }
    .value{
      font-size: 30rpx;
      font-weight: lighter;
      color: grey;
    }
  }
  .speaker{
    display: flex;
    font-size: 40rpx;
    align-items: center;
    color: #444444;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
    .key{
      margin-right: 4vw;
    }
    .value{
      font-size: 30rpx;
      font-weight: lighter;
      color: grey;
    }
  }
  .timer{
    display: flex;
    font-size: 40rpx;
    align-items: center;
    color: #444444;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
    .key{
      margin-right: 4vw;
    }
    .value{
      font-size: 30rpx;
      font-weight: lighter;
      color: grey;
    }
  }
  .place{
    display: flex;
    font-size: 40rpx;
    align-items: center;
    color: #444444;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
    .key{
      margin-right: 4vw;
    }
    .value{
      font-size: 30rpx;
      font-weight: lighter;
      color: grey;
    }
  }
  .info-underscores{
    height: 1vh;
    padding-left: 5%;
    width: 90%;
    .divLine{
      background: #ababab;
      height: 0.2vh;
    }
  }
  .line{
    flex-wrap: wrap;
    display: flex;
    margin-top: 0%;
    margin-bottom: 0%;
    border-style: none;
    padding-left: 0%;
    padding-bottom: 0%;
    padding-top: 0%;
    padding-right: 0%;
    .star{
      border-style: none;
      padding-left: 0%;
      padding-bottom: 0%;
      padding-top: 0%;
      padding-right: 0%;
      height: 9vw;
      width: 9vw;
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
