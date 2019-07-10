<template>
  <div class='container'>
    <div class='list-type'>
      <button class='list-choice' :class="{ 'list-choice-selected': notice }" @click=onChoiceNotice>初级装备</button>
      <button class='list-choice' :class="{ 'list-choice-selected': source }" @click=onChoiceSource>进阶心法</button>
      <button class='list-choice' :class="{ 'list-choice-selected': classInfo }" @click=onChoiceClass>高阶神器</button>
    </div>
    <div class="list">
        <div v-for='(item, index) in result' :key="index" class="card" @click="onClick(item.src)">
            <div>{{item.title}}</div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  mpType: 'page',
  onUnLoad() {
  },
  onShareAppMessage() {
    return {
      title: '武汉大学图书馆',
    };
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '玩转本馆',
    });
  },
  data: {
    type: 0,
    d: [[
      {
        title: '玩转图书馆之总馆',
        src: 'https://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=506991305&idx=1&sn=3c9659f2343c4f8ee147e152b3a6d474&scene=19#wechat_redirect',
      },
      {
        title: '玩转图书馆之信息分馆',
        src: 'https://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=506991309&idx=1&sn=227170d11af41e2fce3d5faccdc297a3&scene=19#wechat_redirect',
      },
      {
        title: '玩转图书馆之工学分馆',
        src: 'https://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=506991307&idx=1&sn=4a40466f4a649c36e5c75953d4838ce4&scene=19#wechat_redirect',
      },
      {
        title: '玩转图书馆之医学分馆',
        src: 'https://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=506991311&idx=1&sn=f3cc13894badf445b8913591c87f088c&scene=19#wechat_redirect',
      },
      {
        src: 'https://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=506991313&idx=1&sn=efe17470290b8bc87c28079605455814&scene=19#wechat_redirect',
        title: '图书馆安全须知与读者文明规范',
      },
    ],
    [],
    [],
    ],
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
    result() {
      return this.d[this.type];
    },
  },
  methods: {
    onClick(src) {
      this.$store.dispatch('setActivityUrl', src);
      const url = '/pages/notice/activity';
      wx.navigateTo({ url });
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
  height: 100vh;
  .list-type{
    display: flex;
    border-bottom-style: none;
    border-bottom-width: 2rpx;
    border-radius: 0;
    .list-choice{
      // position: static;
      color: #5888D7;
      font-size:29rpx;
      font-family:MicrosoftYaHei;
      background-color: #E0EFFF;
      border: none;
      border-radius: 0;
      width: 226rpx;
      height: 61rpx;
    }
    .list-choice::after{
      border: none;
    }
    .list-choice-selected{
      border-bottom-color: #4a88dd;
      color: #ffffff;
      background-color: #4A88DD;
      border-bottom-style: solid;
      border-radius: 0;
    }
  }
  .list{
      margin-top: 70rpx;
  }
  .card{
      height: 47rpx;
      width: 659rpx;
      color: #5D5D5D;
      border-bottom: 2rpx solid #B1B1B1;
      font-size: 28rpx;
      padding: 0;
      div{
          margin-top: 29rpx; 
      }
  }
}

</style>
