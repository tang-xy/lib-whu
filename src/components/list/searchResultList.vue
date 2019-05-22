<template>
<div class='search-result-list'>
  <search-result-card
  v-for='(item, index) in result'
  :key=index
  :name=item.name
  :author=item.author
  :publish=item.publish
  @click-card=onClickCard
  />
</div>
</template>

<script>
import searchResultCard from '../card/searchResultCard';

export default {
  name: 'SearchResultCard',
  components: {
    searchResultCard,
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
.search-result-list{
  margin: 3vw;
  height: 100%;
}

</style>

