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
      <div class='value'>{{status}}</div>
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
      <div class='key'>取书分馆</div>
      <div class='value'>
        <picker @change=onLibChange :value=libIndex :range=libs>
          <span>总馆</span>
          <image src='/static/110/长箭头@3x.png' mode='scaleToFill'/>
        </picker>
      </div>
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
  props: {
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
    reserve: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data: {
    libs: ['总馆', '信息馆', '工学分馆', '医学分馆'],
    libIndex: 0,
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
      this.$emit('click-reserve', that.key);
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
  // border-style: solid;
  // border-radius: 5px;
  // border-width: 1px;
  // border-color: grey;
  padding-left: 5%;
  padding-bottom: 3%;
  padding-top: 3%;
  padding-right: 3%;
  background-color: white;
  position: relative;
  .info{
    display: flex;
    border-style: solid;
    border-style: 1px;
    .key{
      width: 30%;
      text-align: center;
      background: #82a6dd;
      color: white;
    }
    .value{
      width: 70%;
      margin-left: 4%;
    }
  }
}
</style>
