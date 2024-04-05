<template>
  <div class="pagination">
    <div
        v-for="page in pages"
        :key="page"
        :class="['pagination__page', {'pagination__page--active': currentPage === page}]"
        @click="$emit('pageChanged', page);"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.total / this.perPage);
    }
  },
}
</script>

<style src="./style.scss" lang="scss" scoped/>
