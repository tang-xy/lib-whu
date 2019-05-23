<template>
<div class='borrow-list'>
  <borrow-card
  v-for='(item, index) in result'
  :key=index
  :name=item.name
  :author=item.author
  :position=item.position
  :from-time=item.fromTime
  :to-time=item.toTime
  :is-selected=item.isSelected
  @click=onClickCard(index)
  />
</div>
</template>

<script>
import borrowCard from '../card/borrowCard';

export default {
  name: 'BorrowList',
  components: {
    borrowCard,
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
.borrow-list{
  margin: 3vw;
  margin-left: 8vw;
  height: 100%;
}

</style>
