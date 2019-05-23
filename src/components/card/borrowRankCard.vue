<template>
  <div class='borrow-rank-card' @click=clickCard>
    <div class='title'>
      <span class='name'>{{name}}</span>
      <span class='author'>{{author}}&nbsp;著</span>
    </div>
    <div class='rate'>
      <span class='key'>豆瓣评分：{{rate}}</span>
    </div>
    <div class='times'>
      <span>借阅次数：{{borrowTimes}}次</span>
    </div>
    <div class='rank'>
      <span>{{rank}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BorrowRankCard',
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
    rate: {
      type: Number,
      default: 0.0,
    },
    borrowTimes: {
      type: Number,
      required: true,
      default: 0,
    },
    rank: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  computed: {
    index() {
      return (this.key + 1).toString();
    },
  },
  methods: {
    clickCard() {
      const that = this;
      this.$emit('click-card', that.key);
    },
  },
};
</script>

<style lang="scss" scoped>
.borrow-rank-card{
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
    .name{
      margin-right: 4vw;
    }
    .author{
      font-size: 30rpx;
      font-weight: lighter;
      color: grey;
    }
  }
  .rate{
    display: flex;
    font-size: 30rpx;
    .value{
      font-weight: lighter;
    }
  }
  .times{
    display: flex;
    font-size: 30rpx;
    span{
      color: grey;
      text-align: right;
      flex: 1;
    }
  }
  .rank{
    position: absolute;
    right: 2vw;
    top: 0;
    color: #4A88DD;
    opacity: 0.7;
    font-weight: bolder;
    font-size: 80rpx;
  }
}
</style>
