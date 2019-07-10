<template>
  <web-view
  src='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx311d49281953c3fb&redirect_uri=https%3a%2f%2fsystem.lib.whu.edu.cn%2flibseat-wechat%2findex&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect'
  @load=webLoad
  />
</template>

<script>
export default {
  mpType: 'page',
  onLoad() {
    wx.showLoading({ title: '加载中...' });
  },
  onShareAppMessage() {
    return {
      title: '武汉大学图书馆座位预约',
    };
  },
  methods: {
    webLoad(e) {
      wx.hideLoading();
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
