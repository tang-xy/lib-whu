<template>
  <div class='container'>
    <div class='list-type'>
      <button class='list-choice' :class="{ 'list-choice-selected': year }" @click=onChoiceYear>年&nbsp;榜</button>
      <button class='list-choice' :class="{ 'list-choice-selected': month }" @click=onChoiceMonth>月&nbsp;榜</button>
      <button class='list-choice' :class="{ 'list-choice-selected': week }" @click=onChoiceWeek>周&nbsp;榜</button>
    </div>
    <scroll-view
    class='scroll-list'
    scroll-y=true
    enable-back-to-top=true
    @scrolltolower=onScrollToBottom>
      <borrow-rank-list :result=result @click-card=onClickCard />
    </scroll-view>
  </div>
</template>

<script>
import borrowRankList from '../../components/list/borrowRankList';
import { getRank } from '../../api';

export default {
  mpType: 'page',
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '借阅排行',
    });
    this.LoadData();
  },
  data: {
    result: [],
    year: true,
    month: false,
    week: false,
  },
  computed: {
    time() {
      if (this.year) return 'y';
      if (this.month) return 'm';
      if (this.week) return 'w';
      return '';
    },
  },
  components: {
    borrowRankList,
  },
  methods: {
    LoadData() {
      wx.showLoading({ title: '加载中...' });
      const that = this;
      getRank({
        session: that.$store.getters.getSession,
        time: that.time,
      }).then((response) => {
        if (response.status === 0) {
          that.result = response.result;
          let i = 0;
          for (i = 0; i < that.result.length; i += 1) {
            that.result[i].index = i;
          }
          console.log(that.result);
          wx.hideLoading();
        }
      });
    },
    onClickCard(key) {
      const value = this.result[key].title;
      wx.navigateTo({ url: `/pages/search/result?value=${value}&&index=0&&lang=cn` });
    },
    onChoiceYear() {
      this.year = true;
      this.week = false;
      this.month = false;
      this.LoadData();
    },
    onChoiceWeek() {
      this.year = false;
      this.week = true;
      this.month = false;
      this.LoadData();
    },
    onChoiceMonth() {
      this.year = false;
      this.week = false;
      this.month = true;
      this.LoadData();
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
  .list-type{
    display: flex;
    .list-choice{
      // position: static;
      color: grey;
      border: none;
    }
    .list-choice::after{
      border: none;
    }
    .list-choice-selected{
      border-bottom-color: #4a88dd;
      border-bottom-style: solid;
      border-radius: 0px;
      color: black;
    }
  }
  .scroll-list{
    height: 85vh;
    width: 100%
  }
}

</style>
