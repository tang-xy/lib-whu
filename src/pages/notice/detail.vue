<template>
  <div class="de">
  <text class="text" style="white-space:pre-wrap">{{contents}}</text>
  </div>
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
.de{
  width: 100%;
  height: 100%;
  display: flex;
}
.text{
  width: 672rpx;
  text-indent:60rpx;
font-size:24rpx;
font-family:PingFangSC-Regular;
font-weight:400;
color:rgba(101,101,101,1);
line-height:36rpx;
margin-left: 38rpx;
margin-top: 69rpx;
}
</style>
