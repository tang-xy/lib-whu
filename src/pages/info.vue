<template>
  <div class='info-view'>
    <div class="info-logon">
      <image src='/static/320/矢量免扣卡通人物@3x.png'/>
      <view @click="onClick">点击登录
        <span>&nbsp;&nbsp;登录更精彩</span>
      </view>
      <div/>
    </div>
    <div class="info-margin"/>
    <div class="info-list">
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=piclist.cardpic mode='aspectFit'/>
        <div>
          <span>&nbsp;电子校园卡</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
      <div class="info-underscores">
        <view class="divLine"></view>
      </div>
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=piclist.zhangdanpic mode='aspectFit'/>
        <div>
          <span>&nbsp;图书馆账单</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
    </div>
    <div class="info-margin"/>
    <div class="info-list">
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=piclist.jieyuepic mode='aspectFit'/>
        <div>
          <span>&nbsp;借阅信息</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
      <div class="info-underscores">
        <view class="divLine"></view>
      </div>
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=piclist.lishipic mode='aspectFit'/>
        <div>
          <span>&nbsp;借阅历史</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
      <div class="info-underscores">
        <view class="divLine"></view>
      </div>
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=piclist.yuyuepic mode='aspectFit'/>
        <div>
          <span>&nbsp;预约结果</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
    </div>
    <div class="info-margin"/>
    <div class="info-list">
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=piclist.ziyuanpic mode='aspectFit'/>
        <div>
          <span>&nbsp;资源导购</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
    </div>
    <div class="info-margin"/>
    <div class="info-list">
      <div class="info-margin"/>
      <div class="info-line">
        <image :src=piclist.jianyipic mode='aspectFit'/>
        <div>
          <span>&nbsp;建议与反馈</span>
          <image src='/static/320/更多 (1)@3x.png' mode='aspectFit'/>
        </div>
      </div>
      <div class="info-margin">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mpType: 'page',
  data: {
    base: '/static/330/',
    piclist: {
      cardpic: '/static/320/卡 (1)@3x.png',
      zhangdanpic: '/static/320/账单 (1)@3x.png',
      jieyuepic: '/static/320/书 (4)@3x.png',
      lishipic: '/static/320/历史 (1)@3x.png',
      yuyuepic: '/static/320/预约 (1)@3x.png',
      ziyuanpic: '/static/320/购物车@3x.png',
      jianyipic: '/static/320/建议 (1)@3x.png',
    },
  },
  computed: {
    picurl: function picurl() {
      return this.base;
    },
  },
};
</script>

<style lang="scss" scoped>
.info-view{
  width: 100%;
  height: 96vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
  background-color: #f7f7f7;
  .info-image{
    width: 96vw;
    height: 27vh;
    padding-bottom: 2vh;
    image{
      width: 100%;
      height: 100%;
    }
  }
  .info-logon{
    background-color: #ffffff;
    width: 100%;
    height: 25vh;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-flex-direction: row;
    flex-direction: row;
    image{
      padding-left: 5%;
      padding-top: 5vh;
      width: 25%;
      height: 18vh;
    }
    view{
      width: 30%;
      height: 10vh;
      padding-top: 8.3vh;
      background-color: #ffffff;
      font-size: 45rpx;
      span{
        font-size: 34rpx;
        color: #777777;
      }
    }
    div{
      width: 40%;
    }
  }
  .info-margin{
    height: 1.5vh;
  }
  .info-underscores{
    height: 1vh;
    padding-left: 10%;
    width: 90%;
    .divLine{
      background: #e9e9e9;
      height: 0.2vh;
    }
  }
  .info-list{
    background-color: #ffffff;
    width: 100%;
  }
  .info-line{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    height: 5vh;
    background-color: #ffffff;
    -webkit-flex-direction: column;
    image{
      padding-top:2.5%;
      width: 15%;
      height: 90%;
      align-items: left;
      justify-content: left;
    }
    div{
      width: 80%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      span{
        padding-top:1.25vh;
        font-size: 0.9;
        width: 95%;
        color: #ABABAB;
      }
      image{
        padding-top:1.5vh;
        width: 5%;
        height: 60%;
        align-items: right;
        justify-content: right;
      }
    }
  }
}
</style>

