<template>
<div class='history-list'>
  <history-card
  v-for='(item, index) in result'
  :key=item.index
  :name=item.book_info.title
  :author=item.book_info.author
  :position=item.loan_info.sub_library
  :fromtime=item.loan_info.loan_date
  :is-selected=item.isSelected
  @click=onClickCard(item.index)
  />
</div>
</template>

<script>
import historyCard from '../card/historyCard';

export default {
  name: 'historyList',
  components: {
    historyCard,
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
.history-list{
  margin: 3vw;
  margin-left: 8vw;
  height: 100%;
}

</style>
