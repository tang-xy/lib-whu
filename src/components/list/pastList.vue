<template>
<div class='past-list'>
  <past-card
  v-for='(item, index) in result'
  :key=index
  :keys=index
  :theme=item.theme
  :spealker=item.speaker
  :time=item.time
  :place=item.place
  :content=item.content
  :isSelectedbell=item.selected
  @bell=toBell
  />
</div>
</template>

<script>
import pastCard from '../card/pastCard';

export default {
  name: 'pastList',
  components: {
    pastCard,
  },
  props: {
    result: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    toBell(key) {
      this.$emit('bell', key);
    },
  },

};
</script>

<style lang="scss" scoped>
.past-list{
  margin: 0;
  height: 100%;
}

</style>

