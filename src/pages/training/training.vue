<template>
  <div class='container'>
    <scroll-view
    class='scroll-list'
    scroll-y=true
    enable-back-to-top=true
    @scrolltolower=onScrollToBottom>
      <training-list :result=result @click-card=onClickCard />
    </scroll-view>
  </div>
</template>

<script>
import trainingList from '../../components/list/trainingList';
import { searchLib } from '../../api';

export default {
  mpType: 'page',
  onLoad(options) {
    wx.showLoading({ title: '加载中...' });
    const { value } = options;
    const that = this;
    searchLib({
      start: 0,
      limit: 10,
    }).then((response) => {
      that.result = response;
      wx.hideLoading();
    });
  },
  data: {
    result: {},
  },
  components: {
    trainingList,
  },
  methods: {
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
  .scroll-list{
    height: 90vh;
    width: 100%
  }
  .total{
    display: flex;
    justify-content: left;
    width: 100%;
    color: #777777;
    margin-bottom: 1vh
  }
}

</style>
