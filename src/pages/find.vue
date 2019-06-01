<template>
  <div class="find-view">
    <scroll-view  scroll-y="true"  class="scroll-view" bindscrolltolower="loadMore">
      <view class="swiper">
        <swiper class="swiper-box" :indicator-dots="indicatorDots" :vertical="vertical"
              :autoplay="autoplay" :interval="interval" :duration="duration"
              indicator-color="#fff">
          <block v-for='(item, index) in banner_url' :key=index>
            <swiper-item>
              <block :wx:if="item.pic">
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
      <button type='default' @click='toTraining'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/日程 (1)@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toWeiKe'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/视频 (2) 副本@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/视频 (1)@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/齿轮@3x.png' mode='aspectFit'/>
      </button>
      <span>培训日程</span>
      <span>小布微课</span>
      <span>小布微课</span>
      <span>使用攻略</span>
    </div>
    <div class="find-tittle">
      <span>&nbsp;&nbsp;新生专栏&nbsp;</span>
    </div>
    <div class='education-button-container'>
      <button type='default' @click='toUnfinished'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/我的图书馆@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/书 (2)@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/lingdao@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/游戏@3x.png' mode='aspectFit'/>
      </button>
      <span>关于本馆</span>
      <span>玩转本馆</span>
      <span>馆长寄语</span>
      <span>新生游戏</span>
    </div>
    <div class="find-tittle">
      <span>&nbsp;&nbsp;移动数据库&nbsp;</span>
    </div>
    <div class='education-button-container'>
      <button type='default' @click='toUnfinished'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/图层 1@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/图层 2@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/图层 4@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/图层 3@3x.png' mode='aspectFit'/>
      </button>
      <span>百度教育</span>
      <span>&nbsp;新东方&nbsp;&nbsp;</span>
      <span>知识世界</span>
      <span>书香中国</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  mpType: 'page',
  config: {
  },
  data() {
    return {
      banner_url: [
        {
          pic: 'https://system.lib.whu.edu.cn/mp-static/200/banner1 拷贝@3x.png',
          url: '',
          id: 0,
        },
        {
          pic: 'https://system.lib.whu.edu.cn/mp-static/200/banner1 拷贝@3x.png',
          url: '',
          id: 1,
        },
      ],
      open: false,
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
    };
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
    toTraining() {
      console.log('training');
      const url = '/pages/training';
      wx.navigateTo({ url });
    },
    toUnfinished() {
      const url = '/pages/unfinished';
      wx.navigateTo({ url });
    },
    toWeiKe() {
      const url = '/pages/weike';
      wx.navigateTo({ url });
    },
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
  .scroll-view{
    width: 96vw;
    height: 27vh;
    .swiper-box{
      height: 27vh;
    }
    .scroll-image{
      width: 96vw;
      height: 27vh;
      image{
        width: 100%;
        height: 100%;
      }
    }
  }
  .find-tittle{
      border-bottom: 0.1vh solid #e6e6e6;
  }
  .education-button-container{
    display: flex;
    margin-top: 1vh;
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
    }
    span{
        align-items: center;
        justify-content: center;
        font-size: 2.5vw;
        margin-top: -13vh;
        padding-left: 7.5vw;
        padding-right: 6.3vw;
      }

  }
}
</style>
