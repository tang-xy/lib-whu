<template>
  <div class='index-view'>
    <div class='index-image'>
      <image src='https://system.lib.whu.edu.cn/mp-static/100/1_100首页.png'/>
    </div>
    <div class='index-search'>
      <button type='default' @click='onSearch'>
        <image src='https://system.lib.whu.edu.cn/mp-static/100/sousuo@3x.png'/>
        <span>&nbsp;点击搜索馆藏资源</span>
      </button>
    </div>
    <div class='index-command'>
      <image src='https://system.lib.whu.edu.cn/mp-static/100/个性@3x.png'/>
      <span>&nbsp;推荐功能&nbsp;&nbsp;</span>
    </div>
    <div class='index-button-container'>
      <button type='default' @click='toSeat'>
        <image src='https://system.lib.whu.edu.cn/mp-static/100/座位预约@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toBorrow'>
        <image src='https://system.lib.whu.edu.cn/mp-static/100/借阅@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toRank'>
        <image src='https://system.lib.whu.edu.cn/mp-static/100/借阅排行@3x.png' mode='aspectFit'/>
      </button>
      <button type='default' @click='toNotice'>
        <image src='https://system.lib.whu.edu.cn/mp-static/100/通知公告@3x.png' mode='aspectFit'/>
      </button>
    </div>
  </div>
</template>

<script>
import card from '@/components/card';

export default {
  mpType: 'page',
  onLoad() {
    const session = wx.getStorageSync('session') || '';
    this.$store.dispatch('setSession', session);
  },

  data() {

  },

  components: {

  },

  methods: {
    onSearch() {
      const url = '/pages/search';
      wx.navigateTo({ url });
    },
    toSeat() {
      const url = '/pages/seatReserve';
      wx.navigateTo({ url });
    },
    toBorrow() {
      const url = '/pages/borrow';
      wx.navigateTo({ url });
    },
    toRank() {
      const url = '/pages/borrow/rank';
      wx.navigateTo({ url });
    },
    toNotice() {
      const url = '/pages/notice';
      wx.navigateTo({ url });
    },
  },
};
</script>

<style lang="scss" scoped>
.index-view{
  width: 96%;
  height: 96vh;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2vh;
  padding-bottom: 2vh;
  background-color: #f7f7f7;
  .index-image{
    width: 96vw;
    height: 27vh;
    image{
      width: 100%;
      height: 100%;
    }
  }
  .index-command{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 96vw;
    height: 7vh;
    image{
      height: 5vh;
      width: 5vh;
    }
  }
  .index-search{
    margin-top: 4vh;
    margin-bottom: 2vh;
    width: 96vw;
    height: 7vh;
    button{
      background-color: #E4E4E4;
      border-color: #e6e6e6;
      border-width: 1em;
      border-radius: 3vh;
      color: #a4a4a4;
      height: 6vh;
      width: 100%;
      display: flex;
      justify-content: left;
      align-items: center;
      image{
        height: 4vh;
        width: 4vh;
      }
    }
  }
  .index-button-container{
    display: flex;
    margin-top: 2vh;
    width: 96vw;
    height: 40vh;
    flex-wrap: wrap;
    button::after{
      border: none;
    }
    button{
      width: 50%;
      height: 50%;
      padding: 0%;
      background-color: transparent;
      image{
        width: 96%;
        height: 100%;
      }
    }
  }
}

</style>
