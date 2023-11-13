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

export default defineComponent({
  setup() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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

    const calculateResult = async () => {
      if (firstOperand.value !== null && currentOperation.value) {
        const secondOperand = parseFloat(display.value);

        //Make a request to the backend to perform the calculation
        try {
          const response = await fetch("http://localhost:3000/calculate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstOperand: firstOperand.value,
              secondOperand,
              operation: currentOperation.value,
            }),
          });
          const data = await response.json();
          display.value = data.result.toString();
          firstOperand.value = null;
          currentOperation.value = null;
        } catch (error) {
          console.error("Error calculating:", error);
          display.value = "Error";
        }
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
  margin-top: 200px;
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
  gap: 15px;
  margin-top: 150px;
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
