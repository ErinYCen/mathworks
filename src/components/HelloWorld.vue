<template>
  <div>
    <h1>Hello World YAY and Click the Button Below</h1>
    <button @click="logMessage">Click Me</button>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default {
  name: "HelloWorld",
  setup() {
    const message = ref("");

    const logMessage = () => {
      console.log("Hello World log to the console");
      message.value = "Hello World Button Clicked";
    };

    return {
      message,
      logMessage,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
