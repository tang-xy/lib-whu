<template>
  <div class='index-view'>
    <div class='index-image'>
      <image src='/static/100/banner@3x.png'/>
    </div>
  </div>
</template>

<script>
import card from '@/components/card';

export default {
  mpType: 'page',

  data() {

  },

  components: {

  },

  methods: {

  },

  created() {

  },
};
</script>

<style lang="scss" scoped>
.index-view{
  width: 100%;
  height: 100%;
  .index-image{
    width: 100vw;
    height: 30vh;
    image{
      margin: 2%;
      width: 100%;
      height: 100%;
    }
  }
}

</style>
