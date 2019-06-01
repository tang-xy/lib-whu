<template>
  <div class='card'>
    <div class='card-image'>
      <image src='https://system.lib.whu.edu.cn/mp-static/380/undraw_book_lover_mkck@3x.png'/>
    </div>
    <div class='text'>
      <span>将手机贴近门禁刷卡区，即可刷手机进出图书馆</span>
    </div>
  </div>
</template>

<script>
export default {
  mpType: 'page',
};
</script>

<style lang="scss" scoped>
.card{
  width: 96%;
  height: 96vh;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2vh;
  padding-bottom: 2vh;
  background-color: #f7f7f7;
  .card-image{
    width: 96vw;
    height: 27vh;
    image{
      width: 100%;
      height: 100%;
    }
  }
  .text{
    margin-top: 4vh;
    margin-bottom: 2vh;
    width: 96vw;
    height: 7vh;
    span{
      border-width: 1em;
      border-radius: 3vh;
      height: 6vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 33rpx;
    }
  }
}
</style>
