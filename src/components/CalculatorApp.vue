<template>
  <div class="calculator-app">
    <div class="grid">
      <button
        v-for="number in numbers"
        :key="number"
        @click="inputNumber(number)"
      >
        {{ number }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const inputNumber = (number: number) => {
      console.log(number);
    };
    return {
      numbers,
      inputNumber,
    };
  },
});
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 10vh;
}
</style>
