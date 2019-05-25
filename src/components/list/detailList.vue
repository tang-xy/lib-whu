<template>
<div class='detail-list'>
  <detail-card
  v-for='(item, index) in result'
  :key=index
  :status=item.status
  :return-date=item.returnDate
  :position=item.position
  :number=item.number
  :code=item.code
  :rfid=item.rfid
  :reserve=item.reserve
  @click-reserve=onClickReserve
  />
</div>
</template>

<script>
import detailCard from '../card/detailCard';

export default {
  name: 'DetailList',
  components: {
    detailCard,
  },
  props: {
    result: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    onClickReserve(key) {
      this.$emit('click-reserve', key);
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-list{
  margin: 3vw;
  // margin-left: 8vw;
  height: 100%;
}

</style>
