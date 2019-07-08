<template>
  <div class='history-card' @click=onClick>
    <div class='circle'/>
    <div class='line'/>
    <div class='title'>
      <span class='index'></span>
      <span class='name'>{{name}}</span>
    </div>
    <div class='author'>
      <span class='key'>作者：</span>
      <span class='value'>{{author}}&nbsp;</span>
    </div>
    <div class='publish'>
      <span class='key'>借阅时间：</span>
      <span class='value'>{{fromtime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'historyCard',
  props: {
    key: {
      type: Number,
      required: true,
      default: 0,
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
    author: {
      type: String,
      required: true,
      default: '',
    },
    position: {
      type: String,
      required: true,
      default: '',
    },
    fromtime: {
      type: String,
      required: true,
      default: '',
    },
    toTime: {
      type: String,
      required: true,
      default: '',
    },
    isSelected: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data: {
  },
  computed: {
    index() {
      return (this.key + 1).toString();
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
.history-card{
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
  .title{
    display: flex;
    font-size: 40rpx;
    font-weight: bold;
  }
  .author{
    display: flex;
    font-size: 24rpx;
    color: #777777;
    .value{
      font-weight: normal;
    }
  }
  .publish{
    display: flex;
    font-size: 24rpx;
    color: #777777;
    .value{
      font-weight: normal;
    }
  }
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
    font-size: 30rpx;
    align-items: center;
    color: #444444;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
    .name{
      font-weight: bold;
      margin-right: 4vw;
    }
    .author{
      font-size: 24rpx;
      font-weight: normal;
      color: grey;
    }
  }
  .info{
    display: flex;
    font-size: 24rpx;
    color: #777777;
    justify-content: space-between;
  }
  .ratio{
    width: 5vw;
    height: 5vw;
    position: absolute;
    padding: 0px;
    background: none;
    border-width: 5rpx;
    border-style: solid;
    border-color: #7aa6e2;
    border-radius: 2.5vw;
    top: 3vh;
    right: 2vw;
    image{
      display: none;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
    }
    .ratio-selected{
      display: block;
    }
  }
}
.selected{
  background-color: #E3EFFF;
}
</style>
