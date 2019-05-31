<template>
  <div class='container'>
    <div class='list-type'>
      <button class='list-choice' :class="{ 'list-choice-selected': notice }" @click=onChoiceNotice>通知公告</button>
      <button class='list-choice' :class="{ 'list-choice-selected': source }" @click=onChoiceSource>资源动态</button>
      <button class='list-choice' :class="{ 'list-choice-selected': classInfo }" @click=onChoiceClass>培训信息</button>
    </div>
    <scroll-view
    class='scroll-list'
    scroll-y=true
    enable-back-to-top=true
    @scrolltolower=onScrollToBottom>
      <notice-list :result=displayList @click-card=onClickCard />
    </scroll-view>
  </div>
</template>

<script>
import noticeList from '../../components/list/noticeList';
import { getNotice } from '../../api';

export default {
  mpType: 'page',
  onLoad(options) {
    wx.showLoading({ title: '加载中...' });
    const { value } = options;
    const that = this;
    getNotice().then((response) => {
      that.result = response;
      wx.hideLoading();
    });
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
  },
  components: {
    noticeList,
  },
  methods: {
    onClickCard(key) {
      wx.navigateTo({ url: `/pages/notice/detail?key=${key}` });
    },
    onChoiceNotice() {
      this.type = 0;
    },
    onChoiceSource() {
      this.type = 1;
    },
    onChoiceClass() {
      this.type = 2;
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
