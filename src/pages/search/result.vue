<template>
  <div class='container'>
    <div class='total'>
      <span>共检索到{{no_records}}条记录。</span>
    </div>
    <scroll-view
    class='scroll-list'
    scroll-y=true
    enable-back-to-top=true
    @scrolltolower=onScrollToBottom>
      <search-result-list :result=result @click-card=onClickCard />
    </scroll-view>
  </div>
</template>

<script>
import searchResultList from '../../components/list/searchResultList';
import { searchLib, findLib } from '../../api';

export default {
  mpType: 'page',
  onLoad(options) {
    wx.showLoading({ title: '加载中...' });
    const { value } = options;
    const that = this;
    const code = ['wrd', 'wti', 'WAU', 'CAN', 'ISS', 'ISB'];
    findLib({
      session: that.$store.getters.getSession,
      keyword: options.value,
      code: code[options.index],
    }).then((response) => {
      if (response.status === 0) {
        that.no_records = response.result.no_records || '0';
        searchLib({
          session: that.$store.getters.getSession,
          set_num: response.result.set_number,
        }).then((r) => {
          if (r.status === 0) {
            that.result = r.result;
            wx.hideLoading();
          }
        });
      }
    });
  },
  data: {
    result: {
    },
    no_records: 0,
  },
  components: {
    searchResultList,
  },
  methods: {
    onClickCard(key) {
      wx.navigateTo({ url: `/pages/search/detail?doc_number=${key.doc_number}&&title=${key.title}&&publish=${key.publish}&&author=${key.author}&&theme=${key.theme}` });
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
