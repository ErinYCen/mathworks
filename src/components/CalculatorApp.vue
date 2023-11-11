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
      <button class="equals" @click="calculateResult">=</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { performCalculation } from "../utils/calculatorUtils";

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

    const inputOperation = (op: string) => {
      firstOperand.value = parseFloat(display.value); //Save the first number
      currentOperation.value = op; //Save the operation
      display.value = ""; //clear the display for the second number
    };

    const calculateResult = () => {
      if (firstOperand.value !== null && currentOperation.value) {
        const secondOperand = parseFloat(display.value);
        display.value = performCalculation(
          firstOperand.value,
          secondOperand,
          currentOperation.value
        ).toString();
        firstOperand.value = null;
        currentOperation.value = null;
      }
    };

    return {
      numbers,
      operations,
      display,
      inputNumber,
      inputOperation,
      calculateResult,
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
}
.equals {
  grid-column: span 4;
  align-items: center;
  justify-content: center;
}
</style>
