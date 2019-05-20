<template>
  <div class='info-view'>
    <div class='info-image'>
      <image src='/static/100/banner@3x.png'/>
    </div>
  </div>
</template>

<script>
export default {
  mpType: 'page',
};
</script>

<style lang="scss" scoped>
.info-view{
  width: 96%;
  height: 96vh;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2vh;
  padding-bottom: 2vh;
  background-color: #f7f7f7;
  .info-image{
    width: 96vw;
    height: 27vh;
    image{
      width: 100%;
      height: 100%;
    }
  }
}
</style>

