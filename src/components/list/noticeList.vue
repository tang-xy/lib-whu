<template>
<div class='notice-list'>
  <notice-card
  v-for='(item, index) in result'
  :key=index
  :title=item.title
  :volume=item.volume
  :time=item.time
  @click=onClickCard(index)
  />
</div>
</template>

<script>
import noticeCard from '../card/noticeCard';

export default {
  name: 'NoticeList',
  components: {
    noticeCard,
  },
  props: {
    result: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    onClickCard(key) {
      this.$emit('click-card', key);
    },
  },

};
</script>

<style lang="scss" scoped>
.notice-list{
  margin: 3vw;
  margin-left: 8vw;
  height: 100%;
}

</style>
