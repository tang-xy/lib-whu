<template>
  <div class='container'>
    <div class='info-container'>
      <div class='info'>
        <span class='key'>题名：</span>
        <span class='value'>{{name}}</span>
      </div>
      <div class='info'>
        <span class='key'>作者：</span>
        <span class='value'>{{author}}</span>
      </div>
      <div class='info'>
        <span class='key'>主题：</span>
        <span class='value'>{{theme}}</span>
      </div>
      <div class='info'>
        <span class='key'>出版发行：</span>
        <span class='value'>{{publish}}</span>
      </div>
      <button class='share' @click=onShare open-type="share">
        <image src='https://system.lib.whu.edu.cn/mp-static/112/分享@3x.png'/>
      </button>
    </div>
    <div class='list-container'>
      <div class='title'>
        <image src='https://system.lib.whu.edu.cn/mp-static/112/书 (3)@3x.png'/>
        <span>馆藏分布情况</span>
      </div>
      <scroll-view
      class='list-container'
      scroll-y=true
      enable-back-to-top=true
      @scrolltolower=onScrollToBottom>
        <detail-list :result=books @click-reserve=onClickReserve />
      </scroll-view>
    </div>
  </div>
</template>

<script>
import detailList from '../../components/list/detailList';
import { getBookDetail } from '../../api';

export default {
  mpType: 'page',
  onLoad(options) {
    wx.showLoading({ title: '加载中...' });
    const { value } = options;
    const that = this;
    getBookDetail().then((response) => {
      that.name = response.name;
      that.author = response.author;
      that.theme = response.theme;
      that.publish = response.publish;
      that.books = response.books;
      wx.hideLoading();
    });
  },
  data: {
    name: '',
    author: '',
    theme: '',
    publish: '',
    books: [],
  },
  components: {
    detailList,
  },
  computed: {

  },
  methods: {
    onClickReserve(key) {

    },
    onShare() {

    },
    onScrollToBottom() {

    },
  },
  onReachBottom() {
  },
};
</script>

<style lang="scss" scoped>
.container{
  display: block;
  padding: 0%;
  padding-left: 4.5vw;
  padding-right: 4.5vw;
  padding-top: 2vh;
  background-color: white;
  height: 100vh;
  .info-container{
    display: flex;
    flex-direction: column;
    font-size: 35rpx;
    position:relative;
    .info{
      margin-bottom: 2%;
      .key{
        font-weight:normal;
      }
      .value{
        font-weight: lighter;
      }
    }
    .share{
      width: 5vw;
      height: 7vw;
      position: absolute;
      right: 0;
      border-radius: 0;
      border: none;
      image{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
      }
    }
  }
  .list-container{
    height: 70vh;
    padding-bottom: 2vh;
    padding-top: 1vh;
    background: #f7f7f7;
    border-radius: 20rpx;
    .title{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 35rpx;
      padding-right: 2%;
      image{
        width: 5vw;
        height: 5vw;
      }
    }
  }
  .scroll-list{
    height: 85vh;
    width: 100%;
    height: 100%;
  }
}

</style>
