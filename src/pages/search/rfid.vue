<template>
  <web-view
  :src="url"
  @load=webLoad
  />
</template>

<script>
export default {
  mpType: 'page',
  methods: {
    webLoad(e) {
      wx.hideLoading();
    },
  },
  data: {
    url: '',
  },
  onLoad(options) {
    wx.showLoading({ title: '加载中...' });
    this.url = options.url;
  },
};
</script>

<style lang="scss" scoped>

</style>
