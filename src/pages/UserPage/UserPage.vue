<template>
  <div class="user-page container">
    <div v-if="getUserById(userId)" class="user-page__user">
      <img class="user-page__photo" :src="getUserById(userId).picture.large"/>
      <div class="user-page__info">
        <p class="user-page__row">
          <span class="user-page__label">Имя:</span>
          <span class="user-page__data">{{getUserById(userId).name.first}}</span>
        </p>
        <p class="user-page__row">
          <span class="user-page__label">Фамилия:</span>
          <span class="user-page__data">{{getUserById(userId).name.last}}</span>
        </p>
        <p class="user-page__row">
          <span class="user-page__label">Пол:</span>
          <span class="user-page__data">{{getUserById(userId).gender}}</span>
        </p>
        <p class="user-page__row">
          <span class="user-page__label">Телефон:</span>
          <span class="user-page__data">{{getUserById(userId).phone}}</span>
        </p>
        <p class="user-page__row">
          <span class="user-page__label">E-mail:</span>
          <span class="user-page__data">{{getUserById(userId).email}}</span>
        </p>
      </div>
    </div>
    <div v-else class="user-page__error">
      Данные этого пользователя не найдены
    </div>
  </div>
</template>

<script>
import {mapGetters } from "vuex";

export default {
  name: "UserPage",
  data() {
    return {
      userId: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters([
        'getUserById'
    ]),
  },
}
</script>

<style src="./style.scss" lang="scss" scoped/>