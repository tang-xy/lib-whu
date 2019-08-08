<template>
<div class='training-list'>
  <training-card
  v-for='(item, index) in result'
  :key=index
  :theme=item.theme
  :spealker=item.speaker
  :time=item.time
  :place=item.place
  :content=item.content
  @click-card=onClickCard
  />
</div>
</template>

<script>
import trainingCard from '../card/trainingCard';

export default {
  name: 'trainingList',
  components: {
    trainingCard,
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
.training-list{
  margin: 0;
  height: 100%;
}

</style>

