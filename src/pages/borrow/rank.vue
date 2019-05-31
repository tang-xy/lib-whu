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
    wx.showLoading({ title: '加载中...' });
    const { value } = options;
    const that = this;
    getRank({
      start: 0,
      limit: 10,
    }).then((response) => {
      that.result = response;
      wx.hideLoading();
    });
  },
  data: {
    result: {},
    year: true,
    month: false,
    week: false,
  },
  components: {
    borrowRankList,
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
  .list-type{
    display: flex;
    .list-choice{
      // position: static;
      color: grey;
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
