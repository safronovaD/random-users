<template>
  <div class="select">
    <span class="select__label">{{ label }}</span>
    <select class="select__input" v-model="selectedOption" @change="$emit('change', selectedOption)">
      <option v-for="option in options" :key="option" :value="option" class="select__option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedOption: this.options[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  &__label {
    margin-right: 16px;
    font-size: 20px;
    font-weight: 600;
  }

  &__input {
    width: 80px;
    font-size: 20px;
    font-weight: 700;
    padding: 8px 12px;
    border: 1px solid lightgrey;
    border-radius: 12px;
    cursor: pointer;
  }
}
</style>