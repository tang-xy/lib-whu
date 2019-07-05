<template>
  <div class='container'>
    <div class='list-type'>
      <button class='list-choice' :class="{ 'list-choice-selected': notice }" @click=onChoiceNotice>通知公告</button>
      <button class='list-choice' :class="{ 'list-choice-selected': source }" @click=onChoiceSource>资源动态</button>
      <button class='list-choice' :class="{ 'list-choice-selected': classInfo }" @click=onChoiceClass>活动信息</button>
    </div>
    <scroll-view
    class='scroll-list'
    scroll-y=true
    enable-back-to-top=true
    @scrolltolower=onScrollToBottom>
      <notice-list :result=result @click-card=onClickCard />
    </scroll-view>
  </div>
</template>

<script>
import noticeList from '../../components/list/noticeList';
import { getNotice } from '../../api';

export default {
  mpType: 'page',
  onUnLoad() {
  },
  onLoad(options) {
    if (this.type === 0) {
      this.type = -1;
      this.onChoiceNotice();
    } else if (this.type === 1) {
      this.type = -1;
      this.onChoiceSource();
    } else if (this.type === 2) {
      this.type = -1;
      this.onChoiceClass();
    }
  },
  data: {
    result: [],
    type: 0,
  },
  computed: {
    displayList() {
      const that = this;
      return that.result.filter(e => e.type === that.type);
    },
    notice() {
      return this.type === 0;
    },
    source() {
      return this.type === 1;
    },
    classInfo() {
      return this.type === 2;
    },
    typeC() {
      if (this.type === 0) return 'N';
      if (this.type === 1) return 'Z';
      return 'P';
    },
  },
  components: {
    noticeList,
  },
  methods: {
    onClickCard(key) {
      const tmp = this.result[key];
      if (tmp.urlEnable) {
        this.$store.dispatch('setActivityUrl', tmp.url);
        const url = '/pages/notice/activity';
        wx.navigateTo({ url });
      } else {
        const url = `/pages/notice/detail?contents=${tmp.contents}&title=${tmp.title}`;
        wx.navigateTo({ url });
      }
    },
    onChoiceNotice() {
      wx.setNavigationBarTitle({
        title: '通知公告',
      });
      if (this.type === 0) return;
      this.type = 0;
      const that = this;
      wx.showLoading({ title: '加载中...' });
      getNotice({
        type: 'N',
      }).then((response) => {
        let i = 0;
        that.result = response.results.map((e) => {
          const tmp = e;
          tmp.index = i;
          i += 1;
          return tmp;
        });
        wx.hideLoading();
      });
    },
    onChoiceSource() {
      wx.setNavigationBarTitle({
        title: '资源动态',
      });
      if (this.type === 1) return;
      wx.showLoading({ title: '加载中...' });
      this.type = 1;
      const that = this;
      getNotice({
        type: 'Z',
      }).then((response) => {
        let i = 0;
        that.result = response.results.map((e) => {
          const tmp = e;
          tmp.index = i;
          i += 1;
          return tmp;
        });
        wx.hideLoading();
      });
    },
    onChoiceClass() {
      wx.setNavigationBarTitle({
        title: '活动信息',
      });
      if (this.type === 2) return;
      wx.showLoading({ title: '加载中...' });
      this.type = 2;
      const that = this;
      getNotice({
        type: 'P',
      }).then((response) => {
        let i = 0;
        that.result = response.results.map((e) => {
          const tmp = e;
          tmp.index = i;
          i += 1;
          return tmp;
        });
        wx.hideLoading();
      });
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
