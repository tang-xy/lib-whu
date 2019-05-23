<template>
  <div class='container'>
    <div class='list-container'>
      <scroll-view
      class='list-container'
      scroll-y=true
      enable-back-to-top=true
      @scrolltolower=onScrollToBottom>
        <borrow-list :result=result @click-card=onClickCard />
      </scroll-view>
    </div>
    <div class='control-container'>
      <div class='select-all'>
        <image src='/static/130/圆角矩形 3@3x.png'/>
        <image style='position:absolute;' src='/static/131/勾@3x.png'/>
        <span>全选</span>
      </div>
      <button class='con-borrow'>续借</button>
    </div>
  </div>
</template>

<script>
import borrowList from '../../components/list/borrowList';
import { getBorrowInfo } from '../../api';

export default {
  mpType: 'page',
  onLoad(options) {
    wx.showLoading({ title: '加载中...' });
    const { value } = options;
    const that = this;
    getBorrowInfo({
      _start: 0,
      _limit: 10,
    }).then((response) => {
      that.result = response.map((e) => {
        const tmp = e;
        tmp.isSelected = false;
        return tmp;
      });
      wx.hideLoading();
    });
  },
  data: {
    result: [],
  },
  components: {
    borrowList,
  },
  computed: {
    selectedBooks() {
      const list = [];
      this.result.forEach((element) => {
        if (element.isSelected) {
          list.push(element);
        }
      });
      return list;
    },
  },
  methods: {
    onClickCard(key) {
      wx.navigateTo({ url: `/pages/search/detail?key=${key}` });
    },
    onChoiceYear() {
      this.year = true;
      this.week = false;
      this.month = false;
    },
    onChoiceWeek() {
      this.year = false;
      this.week = true;
      this.month = false;
    },
    onChoiceMonth() {
      this.year = false;
      this.week = false;
      this.month = true;
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
  background-color: #f7f7f7;
  height: 100vh;
  .list-container{
    height: 85vh;
    padding-bottom: 2vh;
    padding-top: 1vh;
    background: white;
    border-radius: 20rpx;
  }
  .scroll-list{
    height: 85vh;
    width: 100%;
    height: 100%;
  }
  .control-container{
    display: flex;
    margin-top: 3.5vh;
    align-items: center;
    position: relative;
    margin-left: 2vw;
    margin-right: 2vw;
    .select-all{
      display: flex;
      position: relative;
      align-items: center;
      image{
        width: 5vw;
        height: 5vw;
      }
    }
    .con-borrow{
      width: 40vw;
      border-radius: 100rpx;
      background: #4a88dd;
      color: white;
      position: absolute;
      right:0;
    }
  }
}

</style>
