<template>
  <div>
    <h1>Dara from the Backend</h1>
    <p>{{ message }}</p>
    <p></p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "Waiting for response from the server...",
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/hello") //Backend URL
      .then((response) => {
        this.message = response.data.message;
      })
      .catch((error) => {
        console.error("Error fetching data from the server:", error);
        this.message = "Error fetching data";
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
