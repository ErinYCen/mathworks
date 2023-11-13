<template>
  <div id="app">
    <CalculatorApp />
  </div>
</template>

<script lang="ts">
import CalculatorApp from "./components/CalculatorApp.vue";

export default {
  name: "App",
  components: {
    CalculatorApp,
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

body {
  margin: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: black;
}

button {
  font-size: 16px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
}
</style>
