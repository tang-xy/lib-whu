<template>
  <div class='weike-view'>
    <div class="weike-tittle">
        <span>&nbsp;&nbsp;&nbsp;类别</span>
    </div>
    <div class='weike-button-container'>
      <button type='default' @click='toUnfinished'>
        <image mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image mode='aspectFit'/>
      </button>
    </div>
    <div class="weike-tittle">
        <span>&nbsp;&nbsp;&nbsp;类别</span>
    </div>
    <div class='weike-button-container'>
      <button type='default' @click='toUnfinished'>
        <image mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image mode='aspectFit'/>
      </button>
      <button type='default' @click='toUnfinished'>
        <image mode='aspectFit'/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mpType: 'page',
  methods: {
    toUnfinished() {
      const url = '/pages/unfinished';
      wx.navigateTo({ url });
    },
  },
};
</script>

<style lang="scss" scoped>
.weike-view{
  width: 96%;
  height: 96vh;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2vh;
  padding-bottom: 2vh;
  background-color: #ffffff;
  .weike-tittle{
      margin-top: 2vh;
  }
  .weike-button-container{
    display: flex;
    margin-top: 2vh;
    width: 96vw;
    height: 40vh;
    flex-wrap: wrap;
    button::after{
      border: none;
    }
    button{
      width: 47%;
      height: 50%;
      padding: 0%;
      margin-bottom: 10rpx;
      background-color: #d2d2d2;
      image{
        width: 96%;
        height: 100%;
      }
    }
  }
}
</style>
