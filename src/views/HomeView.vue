<script setup>
import TheWelcome from "../components/TheWelcome.vue";

// eslint-disable-next-line no-undef
let message = $ref("Hello, World!");

// setTimeout(() => {
//   message = "I have been changed";
// }, 2000);

let doSomething = () => {
  alert("doing it now");
};
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>

    <p>
      <button @click="doSomething">Click Me</button>
    </p>
  </main>
</template>
