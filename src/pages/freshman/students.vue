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
    [
      {
        title: '新生常见问题集锦-你想问什么？',
        src: 'http://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=506991301&idx=1&sn=0e42e5cc9f4706026746b21b627d2797&chksm=00ae66a337d9efb5b5e738c0043dc010686eb43aafcae8adcd7c1cec3e4c4b26fdc44d90cc83&mpshare=1&scene=23&srcid=0711E7e0E39xoNUZlqOt9VSG#rd',
      },
      {
        title: '高大上的图书馆主页了解一下',
        src: 'http://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=506991284&idx=1&sn=945a8e66115c7a7e304a06ee1795b7b6&chksm=00ae66d237d9efc4fa30225d1e426194dffee812ba9b5bdac692de5908fdd95436c34244c7c3&mpshare=1&scene=23&srcid=0711zzdsVJXidCq0vXmfw6H3#rd',
      },
      {
        title: '我想约......图书馆座位！',
        src: 'http://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=506991287&idx=1&sn=08a663dfca1cc1429714c93b51b8a231&chksm=00ae66d137d9efc7a2320848a641164b5ba66a1bd53c8ec4b6bf787efd7195b3b1fd8376666f&mpshare=1&scene=23&srcid=0711wGtgI8fxA1s1i60f5CO9#rd',
      },
      {
        title: '如何从图书馆借阅大学第一本书？',
        src: 'http://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=506991291&idx=1&sn=f887e98e2905c210abbeb9fbdab0432a&chksm=00ae66dd37d9efcbf69e05dcc610b1ab62153f3a842d7d464da57f1d18280bd2a6c4b9ad4677&mpshare=1&scene=23&srcid=07118HtrZ1iS25EB1a2GxOML#rd',
      },
      {
        title: '图书通借预约，你的pick不会错过！',
        src: 'https://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=506991293&idx=1&sn=87ba2b628f1ef33bfd79207a513130a5&chksm=00ae66db37d9efcd6cbe48210068fcaebdf01b654dd627c95ac0d0d0471f970699e12e27ad24&mpshare=1&scene=23&srcid=0711E4E2gIdV4vltV23CHvLx#rd',
      },
    ],
    [
      {
        title: '带你了解数据库！',
        src: 'https://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=506991303&idx=1&sn=c0269d08c42ac1f5111bd1aa2e10f620&chksm=00ae66a137d9efb76d535dd5b2a824f76e2c4283308146048ea694c6267aca560088bfdb24d8&mpshare=1&scene=23&srcid=0711Vhu3U0JwVVeEyE3BNbDu#rd',
      },
      {
        title: '武汉大学读书节',
        src: 'https://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=205117596&idx=1&sn=f76ee8bf6dbf6c7b88e3b7c5b4bc7b39&chksm=12afacfa25d825ec923ef708bb6a807b7c8df312450a4a861240fec958f7a0d4887761be3cbe&mpshare=1&scene=23&srcid=0711BWn5YjWqmO9PTqcm50dg#rd',
      },
      {
        title: '武汉大学图书馆文化活动月',
        src: 'https://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=205117596&idx=2&sn=65aab7578d728808f131bb1076f24314&chksm=12afacfa25d825ec3fe6324e91d9eddd0fef19e33740a287a13b7bd8d156a966fa8b054a154c&mpshare=1&scene=23&srcid=0711dfuT7X2Cu7iVAyXBy85G#rd',
      },
      {
        title: '珞珈阅读广场',
        src: 'https://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=205117596&idx=3&sn=dbb4162e5433e1a837c68568c3246e3f&chksm=12afacfa25d825eca84ce0556ff3494d4f1be26ee85876976e9d839aaabb9171a6a349121b42&mpshare=1&scene=23&srcid=0711zhnGILZbe8uA6Dryaohs#rd',
      },
      {
        title: '真人图书馆',
        src: 'https://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=205117596&idx=4&sn=63f7720d4b53ab7d5e1222b6a1829a3f&chksm=12afacfa25d825ecf69ff9b42f1cfb93a85c90c22892cd285cf965d502a77cecd82122ddd819&mpshare=1&scene=23&srcid=0711TqAEuwaDmSApjmw4gKmy#rd',
      },
      {
        title: '音乐随心听',
        src: 'https://mp.weixin.qq.com/s?__biz=MzAwOTIyNTQ4MQ==&mid=205117596&idx=5&sn=82371a162ed41843a2332e45f495831d&chksm=12afacfa25d825ec07a0bd247e16499778ee7ee94d70e7f3a4eb706d0bebf171204a01b1a1e3&mpshare=1&scene=23&srcid=0711ilE2DERAm2Bvlgmx0nNa#rd',
      },
    ],
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
