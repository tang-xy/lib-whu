<template>
  <div class="find-view">
    <scroll-view  scroll-y="true"  class="scroll-view" bindscrolltolower="loadMore">
      <view class="swiper">
        <swiper class="swiper-box" :indicator-dots="indicatorDots" :vertical="vertical"
              :autoplay="autoplay" :interval="interval" :duration="duration"
              indicator-color="#fff">
          <block v-for='(item, index) in banner_url' :key=index>
            <swiper-item>
              <block :wx:if="item.img_url">
                <image class="scroll-image" :src="item.img_url"  mode="aspectFill" @click='onClickPic(item.url)' />
              </block>
            </swiper-item>
          </block>
        </swiper>
      </view>
    </scroll-view>
    <div class="find-tittle">
        <span>&nbsp;&nbsp;教学培训&nbsp;</span>
        <div class="tittle-en">
          <span>TEACHING &TRAINING</span>
        </div>
    </div>
    <div class='education-button-container'>
      <button type='default' @click='toUnfinished'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/日程 (1)@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
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
      <span>往期培训</span>
      <span>使用攻略</span>
    </div>
    <div class="find-tittle">
      <span>&nbsp;&nbsp;新生专栏&nbsp;</span>
        <div class="tittle-en">
          <span>FRESHMAN COLUMN</span>
        </div>
    </div>
    <div class='education-button-container'>
      <button type='default' @click='toAbout'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/我的图书馆@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toStudent'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/书 (2)@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toCurator'>
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
        <div class="tittle-en">
          <span>MOBILE  DATABASE</span>
        </div>
    </div>
    <div class='education-button-container'>
      <button type='default' @click='onClickPic("http://librarywap.koolearn.com/encryptedLogin/5769d078bb186da8")'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/图层 2@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='onClickPic("http://web.libvideo.com/index.html")'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/图层 4@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='onClickPic("http://whdx.w.chineseall.cn/index")'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/图层 3@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image src='https://system.lib.whu.edu.cn/mp-static/200/gengduo@2x.png' mode='aspectFit'/>
      </button>
      <span>&ensp;新东方&ensp;</span>
      <span>知识视界</span>
      <span>书香中国</span>
      <span>&ensp;&ensp;更多&ensp;&ensp;</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { getActivity } from '../api';

export default {
  mpType: 'page',
  onLoad(options) {
    wx.showLoading({ title: '加载中...' });
    const { value } = options;
    const that = this;
    getActivity({
      session: that.$store.getters.getSession,
    }).then((response) => {
      if (response.count !== 0) {
        that.banner_url = response.results;
      }
      wx.hideLoading();
    });
  },
  config: {
  },
  data() {
    return {
      banner_url: [],
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
  onShareAppMessage() {
    return {
      title: '武汉大学图书馆',
    };
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement',
    ]),
    toTraining() {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
        return;
      }
      const url = '/pages/training';
      wx.navigateTo({ url });
    },
    toUnfinished() {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
        return;
      }
      const url = '/pages/unfinished';
      wx.navigateTo({ url });
    },
    toWeiKe() {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
        return;
      }
      const url = '/pages/weike';
      wx.navigateTo({ url });
    },
    toStudent() {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
        return;
      }
      const url = '/pages/students';
      wx.navigateTo({ url });
    },
    toCurator() {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
        return;
      }
      const url = '/pages/curator';
      wx.navigateTo({ url });
    },
    toAbout() {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
        return;
      }
      const url = '/pages/about';
      wx.navigateTo({ url });
    },
    onClickPic(aurl) {
      this.$store.dispatch('setActivityUrl', aurl);
      const url = '/pages/notice/activity';
      wx.navigateTo({ url });
    },
  },
};
</script>

<style lang="scss" scoped>
.find-view{
  width: 100vw;
  height: 1350rpx;
  padding-left: 8rpx;
  padding-top: 22rpx;
  padding-bottom: 0vh;
  background-color: #f7f7f7;
  .scroll-view{
    width: 740rpx;
    height: 295rpx;
    .swiper-box{
      height: 295rpx;
    }
    .scroll-image{
      width: 731rpx;
      height: 295rpx;
      image{
        width: 100%;
        height: 100%;
      }
    }
  }
  .find-tittle{
      border-bottom: 3rpx solid #ABABAB;
      margin-left: 45rpx;
      margin-right: 67rpx;
      margin-top: 31rpx; 
      margin-bottom: 12rpx;
      display: flex;
      display: -webkit-flex;
      flex-wrap: wrap;
      -webkit-flex-direction: row;
      flex-direction: row;
      span{
        font-size: 30rpx;
        color: #525252;
      }
      .tittle-en{
        margin-left: 288rpx;
        span{
          font-size: 18rpx;
          color: #525252;
        }
      }
  }
  .education-button-container{
    display: flex;
    margin-top: 12rpx;
    margin-left: 70rpx;
    margin-right: 28rpx;
    width: 656rpx;
    height: 190rpx;
    flex-wrap: wrap;
    button::after{
      border: none;
    }
    button{
      width: 115rpx;
      height: 115rpx;
      padding: 0%;
      margin-right: 47rpx;
      background-color: transparent;
      flex-direction: column;
      -webkit-flex-direction: column;
      image{
        width: 100%;
        height: 100%;
      }
    }
    span{
        -webkit-flex-direction: column;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 24rpx;
        margin-top: 0vh;
        margin-left: 12rpx;
        margin-right: 56rpx;
        color: #525252;
      }

  }
}
</style>
