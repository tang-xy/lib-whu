<template>
<div class='reserve-list'>
  <reserve-card
  v-for='(item, index) in result'
  :key=item.index
  :name=item.book_info.title
  :author=item.book_info.author
  :position=item.hold_info.pickup_loc
  :from-time=item.hold_info.request_date
  :status=item.hold_info.status
  :to-time=item.hold_info.end_date
  :is-selected=item.isSelected
  @click=onClickCard(item.index)
  />
</div>
</template>

<script>
import reserveCard from '../card/reserveCard';

export default {
  name: 'reserveList',
  components: {
    reserveCard,
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
.reserve-list{
  margin: 3vw;
  margin-left: 8vw;
  height: 100%;
}

</style>
