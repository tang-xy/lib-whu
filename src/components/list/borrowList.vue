<template>
<div class='borrow-list'>
  <borrow-card
  v-for='(item, index) in result'
  :key=item.index
  :name=item.book_info.title
  :author=item.book_info.author
  :position=item.loan_info.sub_library
  :from-time=item.loan_info.loan_date
  :to-time=item.loan_info.due_date
  :is-selected=item.isSelected
  @click=onClickCard(item.index)
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
