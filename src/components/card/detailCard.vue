<template>
  <div class='detail-card'>
    <div class='info'>
      <div class='key'>单册状态</div>
      <div class='value'>{{status}}</div>
    </div>
    <div class='info'>
      <div class='key'>应还日期</div>
      <div class='value'>{{returnDate}}</div>
    </div>
    <div class='info'>
      <div class='key'>馆藏位置</div>
      <div class='value'>{{position}}</div>
    </div>
    <div class='info'>
      <div class='key'>图书定位</div>
      <div class='value' @click=onRFID>点击查看</div>
    </div>
    <div class='info'>
      <div class='key'>索书号</div>
      <div class='value'>{{number}}</div>
    </div>
    <div class='info'>
      <div class='key'>条码</div>
      <div class='value'>{{code}}</div>
    </div>
    <div class='info' v-if=reserve>
      <div class='key'>预约</div>
      <div class='value'>
        <button class='btn-reserve' @click=onReserve>立即预约</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCard',
  created() {
  },
  props: {
    libs: {
      type: Array,
      required: false,
      default: ['总馆', '信息馆', '工学分馆', '医学分馆'],
    },
    libIndex: {
      type: Number,
      required: false,
      default: 0,
    },
    key: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      required: true,
      default: '',
    },
    returnDate: {
      type: String,
      required: true,
      default: '',
    },
    position: {
      type: String,
      required: true,
      default: '',
    },
    number: {
      type: String,
      required: true,
      default: '',
    },
    code: {
      type: String,
      required: true,
      default: '',
    },
    rfid: {
      type: String,
      required: true,
      default: '',
    },
    reserve: {
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
    onLibChange(e) {
      this.libIndex = Number(e.target.value);
    },
    onReserve() {
      const that = this;
      console.log(that);
      this.$emit('click-reserve', { key: that.code, pick: that.libIndex });
    },
    onRFID() {
      const that = this;
      this.$emit('click-rfid', that.rfid);
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-card{
  margin-top: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  font-size: 35rpx;
  font-weight: lighter;
  // border-style: solid;
  // border-radius: 5px;
  // border-width: 1px;
  // border-color: grey;
  padding-left: 5%;
  padding-bottom: 3%;
  padding-top: 3%;
  padding-right: 3%;
  // background-color: white;
  position: relative;
  .info{
    display: flex;
    border-style: solid;
    border-width: 1rpx;
    .key{
      width: 30%;
      text-align: center;
      background: #82a6dd;
      color: white;
    }
    .value{
      width: 70%;
      padding-left: 4%;
      background: white;
      position: relative;
      picker{
        border-style: solid;
        border-width: 1rpx;
        border-color: #82a6dd;
        border-radius: 10rpx;
        font-size: 30rpx;
        width: 200rpx;
        margin-top: 2%;
        margin-bottom: 2%;
        display: flex;
        position: relative;
        align-items: center;
        padding-left: 5%;
        justify-content: center;
        .book{
          width: 5vw;
          height: 5vw;
          position: absolute;
          left: 2vw;
        }
        .arrow{
          width: 3vw;
          height: 2vw;
          position: absolute;
          right: 2vw;
          top: 35%;
        }
      }
      button{
        font-size: 23rpx;
        border-radius: 100rpx;
        background: #82a6dd;
        color: white;
        margin-top: 1%;
        margin-bottom: 1%;
        width: 150rpx;
        height: 41rpx;;
        position: absolute;
        line-height: 40rpx;
      }
    }
  }
}
</style>
