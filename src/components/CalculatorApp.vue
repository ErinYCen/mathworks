<template>
  <div class="calculator-app">
    <div class="display">{{ display }}</div>
    <div class="grid">
      <button
        v-for="number in numbers"
        :key="number"
        @click="inputNumber(number)"
      >
        {{ number }}
      </button>
    </div>
    <div class="operations">
      <button v-for="op in operations" :key="op" @click="inputOperation(op)">
        {{ op }}
      </button>
      <button @click="calculateResult">=</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operations = ["+", "-", "*", "/"];
    const currentOperation = ref<string | null>(null);
    const firstOperand = ref<number | null>(null);
    const display = ref("");
    const inputNumber = (number: number) => {
      console.log(number);
      display.value += number.toString();
    };
    return {
      numbers,
      operations,
      display,
      inputNumber,
    };
  },
});
</script>

<style scoped>
.calculator-app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.display {
  font-size: 2rem;
  margin-bottom: 20px;
  background-color: #f0f0f0;
  padding: 10px;
  width: 200px;
  text-align: right;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 10vh;
}

.operations {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 100px;
}

button {
  padding: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  justify-content: center;
}
</style>
