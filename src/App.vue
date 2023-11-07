<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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
  font-family: Arial, sans-serif;
}

h1 {
  color: black;
}

button {
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
