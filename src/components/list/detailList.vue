<template>
<div class='detail-list'>
  <detail-card
  v-for='(item, index) in result'
  :key=item.index
  :status=item.loan_status
  :return-date=item.due_date
  :position=item.sub_library
  :number=item.location
  :code=item.bar_code
  :rfid=item.rfid
  :reserve=item.reserve
  @click-reserve=onClickReserve
  @click-rfid=onRFID
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
  onLoad() {
    console.log(this.result);
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
    onRFID(key) {
      console.log('list');
      this.$emit('click-rfid', key);
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
