<template>
  <div id="app">
    <h1>Hello World YEAAAAH and Click the botton below</h1>
    <button @click="logMessage">Click me</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
  methods: {
    logMessage() {
      console.log("Button Clicked!");
      console.log("Hello World Good Job You CLICKed the Button");
    },
  },
};
</script>

<style>
button {
  padding: 10px 20px;
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
