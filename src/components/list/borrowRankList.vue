<template>
<div class='borrow-rank-list'>
  <borrow-rank-card
  v-for='(item, index) in result'
  :key=index
  :name=item.name
  :author=item.author
  :rate=item.rate
  :rank=item.rank
  :borrow-times=item.borrowTimes
  @click-card=onClickCard
  />
</div>
</template>

<script>
import borrowRankCard from '../card/borrowRankCard';

export default {
  name: 'BorrowRankList',
  components: {
    borrowRankCard,
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
.borrow-rank-list{
  margin: 3vw;
  height: 100%;
}

</style>
