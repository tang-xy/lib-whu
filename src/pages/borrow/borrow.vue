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
      <div class='select-all' @click=onSelectAll>
        <image src='https://system.lib.whu.edu.cn/mp-static/130/圆角矩形 3@3x.png'/>
        <image style='position:absolute;' src='https://system.lib.whu.edu.cn/mp-static/131/勾@3x.png' v-if="all"/>
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
      session: that.$store.getters.getSession,
    }).then((response) => {
      if (response.status === 0) {
        let i = 0;
        that.result = response.result.map((e) => {
          const tmp = e;
          tmp.isSelected = false;
          return tmp;
        });
        for (i = 0; i < that.result.length; i += 1) {
          that.result[i].index = i;
        }
      }
      wx.hideLoading();
    });
  },
  data: {
    result: [],
    all: false,
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
      this.result[key].isSelected = !this.result[key].isSelected;
    },
    onSelectAll() {
      this.all = !this.all;
      this.result.map((e) => {
        const tmp = e;
        tmp.isSelected = this.all;
        return tmp;
      });
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
