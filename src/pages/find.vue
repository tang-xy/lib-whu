<template>
  <div class="find-view">
    <div class="find-act">
      <span>&nbsp;&nbsp;热门活动&nbsp;</span>
    </div>
    <scroll-view  scroll-y="true" style="height:200px"  class="scroll-view" bindscrolltolower="loadMore">
      <view class="swiper">
        <swiper class="swiper-box" :indicator-dots="indicatorDots" :vertical="vertical"
              :autoplay="autoplay" :interval="interval" :duration="duration"
              indicator-color="#fff" indicator-active-color="red">
          <block :wx:for-items="banner_url" wx:key="item.id">
            <swiper-item>
              <block :wx:if="item">
                <image class="scroll-image" :src="item.pic"  mode="aspectFill"/>
              </block>
            </swiper-item>
          </block>
        </swiper>
      </view>
    </scroll-view>
    <div class="find-tittle">
        <span>&nbsp;&nbsp;教学培训&nbsp;</span>
    </div>
    <div class='education-button-container'>
      <button type='default' @click='toSeat'>
        <image src='/static/200/日程 (1)@3x.png' mode='aspectFit'/>
        <span>培训日程</span>
      </button>
      <button type='default' @click='toBorrow'>
        <image src='/static/200/视频 (2) 副本@3x.png' mode='aspectFit'/>
        <span>小布微课</span>
      </button>
      <button type='default' @click='toRank'>
        <image src='/static/200/齿轮@3x.png' mode='aspectFit'/>
        <span>使用攻略</span>
      </button>
      <button type='default' @click='toNotice'>
        <image src='/static/200/书 (2)@3x.png' mode='aspectFit'/>
        <span>往期培训</span>
      </button>
    </div>
    <div class="find-tittle">
      <span>&nbsp;&nbsp;移动数据库&nbsp;</span>
    </div>
    <div class='education-button-container'>
      <button type='default' @click='toSeat'>
        <image src='/static/200/图层 1@3x.png' mode='aspectFit'/>
        <span>百度教育</span>
      </button>
      <button type='default' @click='toBorrow'>
        <image src='/static/200/图层 2@3x.png' mode='aspectFit'/>
        <span>新东方</span>
      </button>
      <button type='default' @click='toRank'>
        <image src='/static/200/图层 4@3x.png' mode='aspectFit'/>
        <span>知识世界</span>
      </button>
      <button type='default' @click='toNotice'>
        <image src='/static/200/图层 3@3x.png' mode='aspectFit'/>
        <span>书香中国</span>
      </button>
    </div>
    <div class="find-tittle">
      <span>&nbsp;&nbsp;新生专栏&nbsp;</span>
    </div>
    <div class='education-button-container'>
      <button type='default' @click='toSeat'>
        <image src='/static/200/我的图书馆@3x.png' mode='aspectFit'/>
        <span>关于本馆</span>
      </button>
      <button type='default' @click='toBorrow'>
        <image src='/static/200/我的图书馆@3x.png' mode='aspectFit'/>
        <span>玩转本馆</span>
      </button>
      <button type='default' @click='toRank'>
        <image src='/static/200/lingdao@3x.png' mode='aspectFit'/>
        <span>馆长寄语</span>
      </button>
      <button type='default' @click='toNotice'>
        <image src='/static/200/游戏@3x.png' mode='aspectFit'/>
        <span>新生游戏</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  mpType: 'page',
  config: {
  },
  data: {
    banner_url: [
      {
        pic: '/static/200/banner1 拷贝@3x.png',
        url: '',
      },
      {
        pic: '/static/200/banner1 拷贝@3x.png',
        url: '',
      },
    ],
    open: false,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
  },
  computed: {
    ...mapState([
      'count',
    ]),
  },

  methods: {
    ...mapMutations([
      'increment',
      'decrement',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.find-view{
  width: 96%;
  height: 150vh;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2vh;
  padding-bottom: 0vh;
  background-color: #f7f7f7;
  .find-act{
    font-size: 2vh;
    justify-content:center;
  }
  .scroll-view{
    .scroll-image{
      width: 96vw;
      height: 27vh;
      image{
        width: 100%;
        height: 100%;
      }
    }
    padding-bottom: 0vh;
  }
  .find-tittle{
      border-bottom: 0.1vh solid #777777;
      margin-bottom: .5rem;
      padding-bottom: .5rem;
  }
  .education-button-container{
    display: flex;
    margin-top: 2vh;
    width: 96vw;
    height: 30vh;
    flex-wrap: wrap;
    button::after{
      border: none;
    }
    button{
      width: 24%;
      height: 75%;
      padding: 0%;
      background-color: transparent;
      -webkit-flex-direction: column;
      image{
        width: 90%;
        height: 50%;
      }
      span{
        width: 24%;
        height: 40%;
        align-items: center;
        font-size: 2vh
      }
    }

  }
}
</style>
