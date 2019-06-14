<template>
  <div class='search-result-card' @click=clickCard>
    <div class='title'>
      <span class='index'>{{index}}&nbsp;&nbsp;</span>
      <span class='name'>{{name}}</span>
    </div>
    <div class='author'>
      <span class='key'>作者：</span>
      <span class='value'>{{author}}</span>
    </div>
    <div class='publish'>
      <span class='key'>出版社：</span>
      <span class='value'>{{publish}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResultCard',
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
    publish: {
      type: String,
      required: true,
      default: '',
    },
    book: {
      type: Object,
      required: true,
      default: {},
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
      this.$emit('click-card', that.book);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-result-card{
  margin-top: 2%;
  margin-bottom: 2%;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: grey;
  padding-left: 5%;
  padding-bottom: 3%;
  padding-top: 3%;
  background-color: white;
  .title{
    display: flex;
    font-size: 40rpx;
    font-weight: bold;
  }
  .author{
    display: flex;
    font-size: 30rpx;
    .value{
      font-weight: lighter;
    }
  }
  .publish{
    display: flex;
    font-size: 30rpx;
    .value{
      font-weight: lighter;
    }
  }
}
</style>
