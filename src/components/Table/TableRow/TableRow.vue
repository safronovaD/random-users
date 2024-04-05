<template>
<div class="table-row" @click="$router.push(`/user/${data.id.value}`)">
  <div class="table-row__cell">{{ data.id.value }}</div>
  <div class="table-row__cell">{{ `${data.name.first} ${data.name.last}` }}</div>
</div>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped/>