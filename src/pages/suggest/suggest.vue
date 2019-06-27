<template>
  <div class='suggest'>
    <div class='suggest-text'>
      <textarea placeholder='请留下您的宝贵意见或建议，我们将努力改进 （不少于五个字）' focus=true></textarea>
    </div>
    <div class='suggest-tel'>
      <input type='text' placeholder='请留下手机号或QQ号，以便我们及时回复你'/>
    </div>
    <button class="up">
        <span>提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交</span>
    </button>
  </div>
</template>

<script>
export default {
  mpType: 'page',
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '建议与反馈',
    });
  },
};
</script>

<style lang="scss" scoped>
.suggest{
  width: 92%;
  height: 92vh;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 4vh;
  padding-bottom: 4vh;
  background-color: #f7f7f7;
  .suggest-text{
    width: 92vw;
    height: 27vh;
    background-color: #FFFFFF;
    textarea{
      margin-left: 2%;
      margin-right: 8%;
      width: 90%;
      height: 96%;
    }
  }
  .suggest-tel{
    margin-top: 4vh;
    margin-bottom: 2vh;
    width: 91vw;
    height: 7vh;
    background-color: #FFFFFF;
    input{
      border-width: 1em;
      border-radius: 3vh;
      height: 6vh;
      width: 100%;
      display: flex;
      justify-content: left;
      align-items: center;
      font-size: 33rpx;
    }
  }
  .up{
    margin-top: 4vh;
    margin-bottom: 2vh;
    width: 92vw;
    height: 8vh;
    background-color: #5B92DF;
    span{
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50rpx;
    }
  }
}
</style>
