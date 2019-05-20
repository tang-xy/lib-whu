<template>
  <div class='container'>
    <div class='warn'>
      <icon class='icon' type='warn' size='30' color='grey'/>
      <span>{{error}}</span>
    </div>
  </div>
</template>

<script>
export default {
  mpType: 'page',
  data: {
    error: '网络通信异常',
  },
  onLoad(options) {
    const errorList = ['网络通信异常', '页面不存在'];
    this.error = errorList[options.type];
  },
  methods: {

  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  .warn{
    display: flex;
    align-items: center;
  }
}

</style>
