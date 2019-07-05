<template>
  <text class="text">{{contents}}</text>
</template>

<script>
export default {
  mpType: 'page',
  data: {
    contents: '',
  },
  onLoad(options) {
    const { contents, title } = options;
    this.contents = contents;
    wx.setNavigationBarTitle({
      title,
    });
  },
};
</script>

<style lang="scss" scoped>
.text{
  text-indent:60rpx;
font-size:30rpx;
font-family:PingFangSC-Regular;
font-weight:400;
color:rgba(108,108,108,1);
line-height:36rpx
}
</style>
