<template>
  <div v-if="user" class="user-page container">
    <div class="user-page__user">
      <img class="user-page__photo" :src="user.picture.large"/>
      <div class="user-page__info">
        <p class="user-page__row">
          <span class="user-page__label">Имя:</span>
          <span class="user-page__data">{{user.name.first}}</span>
        </p>
        <p class="user-page__row">
          <span class="user-page__label">Фамилия:</span>
          <span class="user-page__data">{{user.name.last}}</span>
        </p>
        <p class="user-page__row">
          <span class="user-page__label">Пол:</span>
          <span class="user-page__data">{{user.gender}}</span>
        </p>
        <p class="user-page__row">
          <span class="user-page__label">Телефон:</span>
          <span class="user-page__data">{{user.phone}}</span>
        </p>
        <p class="user-page__row">
          <span class="user-page__label">E-mail:</span>
          <span class="user-page__data">{{user.email}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters } from "vuex";

export default {
  name: "UserPage",
  data() {
    return {
      user: null
    }
  },
  computed: {
    ...mapGetters([
        'getUserById'
    ]),
  },
  beforeMount() {
    const userId = this.$route.params.id;
    this.user = this.getUserById(userId)
  }
}
</script>

<style src="./style.scss" lang="scss" scoped/>