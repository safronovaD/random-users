<template>
  <table class="table">
    <tr class="table__row table__row--header">
      <th v-for="(column, index) in columns" :key="index" class="table__cell table__cell--header">{{ column.title }}</th>
    </tr>
    <tr v-for="(item, index) in data" :key="index" class="table__row" @click="$emit('click-on-row', item)">
      <td v-for="(column, index) in columns" :key="index" class="table__cell">{{ getCellData(item, column.alias) }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    getCellData(item, alias) {
      return alias.split('.').reduce((acc, curr) => acc[curr], item);
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped/>