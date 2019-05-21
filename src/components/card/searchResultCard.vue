<template>
  <div class='search-result-card' @click=clickCard>
    <div class='title'>
      <span id='index'>{{index}}</span>
      <span id='name'>{{name}}</span>
    </div>
    <div class='author'>
      <span id='key'>作者：</span>
      <span id='value'>{{author}}</span>
    </div>
    <div class='publish'>
      <span id='key'>出版信息：</span>
      <span id='value'>{{publish}}</span>
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
.search-result-card{
  width: 100%;
  height: 20%;
  margin-top: 2%;
  margin-bottom: 2%;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  .title{
    display: flex;
  }
  .author{
    display: flex;
  }
  .publish{
    display: flex;
  }
}
</style>
