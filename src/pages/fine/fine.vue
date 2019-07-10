<template>
  <div class='entry-page'>
      <div class="entry-visit">
        <div class="entry-username-text">
            <image class="entry-username-logo" src="../../static/qiankuan.png"></image>
            <div>总欠款</div>
        </div>
        <div class="entry-count">{{result.balance}}元</div>
        <div class="entry-count-text">您共有{{length}}笔欠款记录，尚有{{np_count}}笔欠款未结清，请尽快前往图书馆服务台结清欠款。 在线结算功能正在加紧开发中，敬请期待...</div>
      </div>
      <scroll-view
      class='scroll-list'
      scroll-y=true
      enable-back-to-top=true
      @scrolltolower=onScrollToBottom>
        <div class="entry-info" v-for='(item, index) in result.detail' :key=item.index>
          <div class="title">{{item.book_info.title}}</div>
          <div class="author">{{item.book_info.author}}著</div>
          <div class="time">{{item.fine_info.date}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.fine_info.description}}</div>
          <div class="fine" v-if="item.fine_info.status==='Paid'">已结清</div>
          <div class="n-fine" v-if="item.fine_info.status!=='Paid'">-{{item.fine_info.sum}}</div>
        </div>
      </scroll-view>
  </div>
</template>

<script>
import { getFineInfo } from '../../api';


export default {
  mpType: 'page',
  components: {
  },
  onShareAppMessage() {
    return {
      title: '武汉大学图书馆',
    };
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '图书馆账单',
    });
    const that = this;
    wx.showLoading({ title: '加载中...' });
    this.username = this.$store.getters.getLibUser.name;
    getFineInfo({
      session: that.$store.getters.getSession,
    }).then((response) => {
      that.result = response.result;
      that.length = that.result.detail.length;
      that.result.detail.map((element) => {
        const tmp = element;
        tmp.fine_info.date = that.formatDate(element.fine_info.date);
        if (element.fine_info.status !== 'Paid') {
          that.np_count += 1;
        }
        return tmp;
      });
      wx.hideLoading();
    });
  },
  data() {
    return {
      result: {},
      np_count: 0,
      length: 0,
    };
  },
  methods: {
    formatDate(str) {
      return `${str.slice(0, 4)}/${str.slice(4, 6)}/${str.slice(6)}`;
    },
    getTop(index) {
      const tmp = 206 * index;
      console.log(tmp);
      return String(88 + tmp);
    },
  },
};
</script>

<style lang="scss" scoped>

.entry-page{
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  padding: 0%;
  height: 100vh;
}
.entry-visit{
    height: 388rpx;
    top: 0;
    left: 0;
    .entry-username-text{
        position: absolute;
        width: 200rpx;
        top: 36rpx;
        left: 53rpx;
        font-size: 30rpx;
        color: #3b3b3b;
        image{
            height: 39rpx;
            width: 37rpx;
            left: 0rpx;
            top: 0rpx;
            position: absolute;
        }
        div{
            left: 48rpx;
            top: 7rpx;
            position: absolute;
        }
    }
    .entry-count{
        width: 750rpx;
        text-align: center;
        padding-top: 108rpx;
        font-size: 72rpx;
        color: #5888d7;
    }
    .entry-count-text{
        width: 650rpx;
        text-align: center;
        font-size: 24rpx;
        padding-top: 46rpx;
        padding-left: 50rpx;
        padding-right: 50rpx;
        color: #929292;
    }
}
.entry-info{
    height: 236rpx;
    width: 688rpx;
    margin-top: 15rpx;
    margin-left: 29rpx;
    background-color: #E0EFFF;
    border-radius: 30rpx;
    .title{
        padding-top: 31rpx;
        margin-left: 33rpx;
        color: #5888D7;
        font-weight:bold;
        font-size:30rpx;
    }
    .author{
        padding-top: 17rpx;
        margin-left: 33rpx;
        color: #5888D7;
        font-size:24rpx;
    }
    .time{
        padding-top: 44rpx;
        margin-left: 33rpx;
        color: #5888D7;
        font-size:24rpx;
    }
    .fine{
        margin-left: 526rpx;
        margin-top: -100rpx;
        font-size:36rpx;
        font-family:PingFangSC-Regular;
        font-weight:bold;
        color:rgba(88,136,215,1);
        line-height:45rpx;
    }
    .n-fine{
        margin-left: 526rpx;
        margin-top: -100rpx;
        line-height:45rpx;
        font-size:45rpx;
        font-family:PingFangSC-Regular;
        font-weight:bold;
        color:rgba(254,99,99,1);
    }
}
</style>
