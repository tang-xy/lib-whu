<template>
  <div class='notice-card' @click=onClick>
    <div class='circle'/>
    <div class='line'/>
    <div class='title'>
      <span>{{title}}</span>
    </div>
    <div class='info'>
      <span class='time'>{{firstTime[0]}}&nbsp;&nbsp;{{firstTime[1]}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoticeCard',
  props: {
    key: {
      type: Number,
      required: true,
      default: 0,
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
    time: {
      type: String,
      required: true,
      default: '',
    },
  },
  data: {
  },
  computed: {
    index() {
      return (this.key + 1).toString();
    },
    firstTime() {
      return this.time.slice(0, 19).split('T');
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.notice-card{
  margin-top: 2%;
  margin-bottom: 2%;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: grey;
  padding-left: 5%;
  padding-bottom: 3%;
  padding-top: 3%;
  padding-right: 3%;
  background-color: white;
  position: relative;
  .line{
    width: 1px;
    height: 85%;
    border-right-style: solid;
    border-color: #7aa6e2;
    border-width: 5rpx;
    left: -4.3vw;
    top: 2vh;
    opacity: 0.7;
    position: absolute;
  }
  .circle{
    position: absolute;
    width: 28rpx;
    height: 28rpx;
    background-color: #7aa6e2;
    left: -5.5vw;
    top: -0.2vh;
    border-radius: 14rpx;
  }
  .title{
    display: flex;
    font-size: 40rpx;
    align-items: center;
    color: #444444;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
  }
  .info{
    display: flex;
    font-size: 25rpx;
    color: #777777;
    justify-content: space-between;
  }
}
</style>
