<template>
  <web-view
  :src="url"
  @load=webLoad
  />
</template>

<script>
export default {
  mpType: 'page',
  onLoad(options) {
    wx.showLoading({ title: '加载中...' });
    this.url = this.$store.getters.getActivityUrl;
    console.log(this.$store.getters.getActivityUrl);
  },
  onShareAppMessage() {
    return {
      title: '武汉大学图书馆',
    };
  },
  methods: {
    webLoad(e) {
      wx.hideLoading();
    },
  },
  data: {
    url: '',
  },
};
</script>

<style lang="scss" scoped>

</style>
