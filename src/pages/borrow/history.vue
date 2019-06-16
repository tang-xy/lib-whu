<template>
  <div class='container'>
    <div class='list-container'>
      <scroll-view
      class='list-container'
      scroll-y=true
      enable-back-to-top=true
      @scrolltolower=onScrollToBottom>
        <div class="tip" v-if="result.length===0">
          <span>无借阅历史</span>
        </div>
        <borrow-list :result=result @click-card=onClickCard />
      </scroll-view>
    </div>
  </div>
</template>

<script>
import borrowList from '../../components/list/borrowList';
import { getLoanHistory } from '../../api';

export default {
  mpType: 'page',
  onLoad(options) {
    wx.showLoading({ title: '加载中...' });
    const { value } = options;
    const that = this;
    getLoanHistory({
      session: that.$store.getters.getSession,
    }).then((response) => {
      if (response.status === 0) {
        let i = 0;
        that.result = response.result.map((e) => {
          const tmp = {};
          tmp.isSelected = false;
          tmp.book_info = { title: e.booktitle, author: e.author };
          tmp.loan_info = { loan_date: e.loan_date };
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
  },
  methods: {
    onClickCard(key) {
      this.result[key].isSelected = !this.result[key].isSelected;
    },
    onRenew() {
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
    height: 80vh;
    padding-bottom: 2vh;
    padding-top: 1vh;
    background: white;
    border-radius: 20rpx;
    .tip{
      span{
        margin-left: 230rpx;
        font-size: 48rpx;
      }
    }
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
