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
  onUnload() {
    this.result = [];
    this.no_records = 0;
  },
  onShareAppMessage() {
    return {
      title: '武汉大学图书馆',
    };
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '检索结果',
    });
    wx.showLoading({ title: '加载中...' });
    const that = this;
    const code = ['wrd', 'wti', 'WAU', 'CAN', 'ISS', 'ISB'];
    this.lang = options.lang;
    findLib({
      session: that.$store.getters.getSession,
      keyword: options.value,
      code: code[options.index],
      lang: options.lang,
    }).then((response) => {
      if (response.status >= 0) {
        that.set_number = response.result.set_number || '';
        that.no_records = response.result.no_records || '0';
        searchLib({
          session: that.$store.getters.getSession,
          set_num: response.result.set_number,
          lang: options.lang,
          entry: 1,
        }).then((r) => {
          if (r.status === 0) {
            that.result = r.result;
            let i = 0;
            for (i = 0; i < that.result.length; i += 1) {
              that.result[i].index = i;
            }
            wx.hideLoading();
          }
        });
      }
    });
  },
  data: {
    result: [],
    options: {},
    set_number: '',
    no_records: 0,
    lang: 'cn',
  },
  computed: {
    entry() {
      return this.result.length + 1;
    },
  },
  components: {
    searchResultList,
  },
  methods: {
    onClickCard(key) {
      wx.navigateTo({ url: `/pages/search/detail?lang=${this.lang}&&doc_number=${key.doc_number}&&title=${key.title}&&publish=${key.publish}&&author=${key.author}&&theme=${key.theme}` });
    },
    onScrollToBottom() {
      const that = this;
      wx.showLoading({ title: '加载中...' });
      searchLib({
        session: that.$store.getters.getSession,
        set_num: that.set_number,
        entry: that.result.length + 1,
        lang: that.lang,
      }).then((r) => {
        if (r.status === 0) {
          if (r.result.length === 0) {
            wx.showToast({ title: '没有更多了', icon: 'none' });
          }
          let i = 0;
          const tmpres = [];
          for (i = 0; i < r.result.length; i += 1) {
            const temp = r.result[i];
            temp.index = that.result.length + i;
            tmpres.push(temp);
          }
          that.result = that.result.concat(tmpres);
          console.log(that.result);
        }
        wx.hideLoading();
      });
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
