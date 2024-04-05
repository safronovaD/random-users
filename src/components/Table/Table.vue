<template>
 <div class="table">
   <div class="table__content">
     <div class="table__header">
       <div class="table__column">ID</div>
       <div class="table__column">Имя</div>
     </div>
     <div class="table__body">
       <TableRow v-for="user in users" :key="user.id.value" :data="user"/>
     </div>
   </div>
 </div>
</template>

<script>
import TableRow from "@/components/Table/TableRow/TableRow";

export default {
  name: "Table",
  components: {
    TableRow
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped/>