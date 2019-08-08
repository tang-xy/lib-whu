<template>
    <div class="use">
      <scroll-view
      class='scroll-list'
      scroll-y=true
      enable-back-to-top=true
      @scrolltolower=onScrollToBottom>
      <div class="list" v-for='(item, index) in result' :key=item.index>
        <div class="title">{{item.title}}</div>
      </div>
      </scroll-view>
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
      title: '使用攻略',
    });
  },
  data: {
    result: [
      {
        title: '借书还书',
        data: [],
      },
    ],
  },
};
</script>
<style lang="scss" scoped>
</style>