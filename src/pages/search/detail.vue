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
        <detail-list :result=books @click-reserve=onClickReserve @click-rfid=toUnfinished />
      </scroll-view>
    </div>
    <success-modal :showModal="showModal" text='可前往我的-预约结果查看预约详情' title='预约成功' @confirm=onConfirm @cancel=onCancel buttontext='查看'/>
    <pick-modal :showModal='pickModal' title='预约成功' @confirm=onClickModal @cancel=onCancel />
  </div>
</template>

<script>
import detailList from '../../components/list/detailList';
import pickModal from '../../components/modal/pickModal';
import successModal from '../../components/modal/successModal';
import { getBookDetail, reserveBook } from '../../api';

export default {
  mpType: 'page',
  onUnload() {
    this.showModal = false;
    this.pickModal = false;
  },
  onShareAppMessage() {
    return {
      title: '武汉大学图书馆',
    };
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '书籍详情',
    });
    wx.showLoading({ title: '加载中...' });
    const that = this;
    that.name = options.title;
    that.author = options.author;
    that.theme = options.theme;
    that.publish = options.publish;
    getBookDetail({
      session: that.$store.getters.getSession,
      doc_num: options.doc_number,
    }).then((response) => {
      if (response.status === 0) {
        that.books = response.result;
        let i = 0;
        for (i = 0; i < that.books.length;) {
          that.books[i].index = i;
          that.books[i].reserve = (that.books[i].loan_status === '外借书');
          if (that.books[i].due_date === 'On Shelf') {
            that.books[i].due_date = '在架上';
          } else if (that.books[i].due_date === 'Reshelving') {
            that.books[i].due_date = '返架中';
          }
          i += 1;
        }
      }
      wx.hideLoading();
    });
  },
  data: {
    name: '',
    author: '',
    theme: '',
    publish: '',
    books: [],
    showModal: false,
    pickModal: false,
    bar_code: '',
  },
  components: {
    successModal,
    detailList,
    pickModal,
  },
  computed: {

  },
  methods: {
    onConfirm() {
      this.showModal = false;
      this.pickModal = false;
      const url = '/pages/borrow/reserve';
      wx.navigateTo({ url });
    },
    onCancel() {
      this.showModal = false;
      this.pickModal = false;
    },
    onClickModal(pickup) {
      const pick = ['WL', 'XX', 'GX', 'YX'];
      const that = this;
      reserveBook({
        session: that.$store.getters.getSession,
        bar_code: that.bar_code,
        pickup: pick[pickup],
      }).then((response) => {
        if (response.status === 0) {
          this.pickModal = false;
          that.showModal = true;
        } else {
          // wx.showToast({ title: '本书目前无法预约', icon: 'none' });
        }
      });
    },
    onClickReserve(p) {
      if (!this.$store.getters.getLibBind) {
        const url = '/pages/login';
        wx.navigateTo({ url });
        return;
      }
      this.bar_code = p.key;
      this.pickModal = true;
    },
    onShare() {

    },
    onScrollToBottom() {

    },
    onRFID(key) {
      const url = `rfid?url=${key}`;
      wx.navigateTo({ url });
    },
    toUnfinished(key) {
      if (!this.$store.getters.getLibBind) {
        let url;
        if (this.$store.getters.getLogin) url = '/pages/login';
        else url = '/pages/login?type=login';
        wx.navigateTo({ url });
      }
      const url = '/pages/unfinished';
      wx.navigateTo({ url });
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
      width: 34rpx;
      height: 42rpx;
      position: absolute;
      right: 0;
      border-radius: 0;
      border: none;
      border-color: #ffffff;
      background-color: #ffffff;
      image{
        width: 34rpx;
        height: 42rpx;
        position: absolute;
        left: 0;
      }
    }
    .share::after{
      border-color: #ffffff;
      border: none;
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
