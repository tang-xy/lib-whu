<template>
  <div class='container'>
    <span id='total'>共检索到{{result.length()}}条记录。</span>
    <search-result-list :result=result @click-card=onClickCard />
  </div>
</template>

<script>
import searchResultList from '../../components/list/searchResultList';
import { searchLib } from '../../api';

export default {
  mpType: 'page',
  onLoad(options) {
    wx.showLoading({ title: '登录中...' });
    const { value } = options;
    const that = this;
    searchLib().then((response) => {
      that.result = response;
      wx.hideLoading();
    });
  },
  data: {
    result: {},
  },
  components: {
    searchResultList,
  },
  methods: {
    onClickCard(key) {
      wx.navigateTo({ url: `/pages/search/detail?key=${key}` });
    },
  },
  onReachBottom() {
  },
};
</script>

<style lang="scss" scoped>

</style>
