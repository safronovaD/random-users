<template>
  <div v-if="users" class="users-page container">
    <div class="users-page__disclaimer"><strong>DISCLAIMER:</strong> API randomuser.me работает так, что у некоторых пользователей id.value=null, соответственно, информация о таком пользователе на детальной странице не отобразится</div>
    <div class="users-page__controls">
      <Select
          class="users-page__select"
          :label="'Выберите количество пользователей на странице'"
          :options="[10, 25, 50]"
          @change="changePerPage"
      />
      <Pagination
          class="users-page__pagination"
          :total="users.length"
          :per-page="perPage"
          :current-page="currentPage"
          @pageChanged="changeCurrentPage"
      />
    </div>
    <Table
        :columns="[{title: 'ID', alias: 'id.value'}, {title: 'Имя', alias: 'name.first'}, {title: 'Фамилия', alias: 'name.last'}]"
        :data="paginatedUsers"
        @click-on-row="goToUserPage"/>
  </div>
</template>

<script>
import Table from '@/components/Table/Table';
import Pagination from "@/components/Pagination/Pagination";
import Select from "@/components/Select/Select";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "UsersPage",
  components: {
    Table,
    Pagination,
    Select,
  },
  data() {
    return {
      currentPage: 1,
      perPage: 10
    }
  },
  computed: {
    ...mapGetters({
      users: 'getUsers'
    }),
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;

      return this.users.slice(start, end);
    }
  },
  methods: {
    ...mapActions([
        'getUsers'
    ]),
    changeCurrentPage(page) {
      this.currentPage = page;
    },
    changePerPage(perPage) {
      this.perPage = perPage;
      this.currentPage = 1;
    },
    goToUserPage(user) {
      this.$router.push(`/user/${user.id.value}`)
    }
  },
  beforeMount() {
    this.getUsers();
  }
}
</script>

<style src="./style.scss" lang="scss" scoped/>