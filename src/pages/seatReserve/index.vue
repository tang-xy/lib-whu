<template>
  <web-view
  src='https://seat.lib.whu.edu.cn'
  @load=webLoad
  />
</template>

<script>
export default {
  mpType: 'page',
  onLoad() {
    wx.showLoading({ title: '加载中...' });
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
