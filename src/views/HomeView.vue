<!-- <script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script> -->

<script>
import TheWelcome from "../components/TheWelcome.vue";

export default {
  components: { TheWelcome },
  data() {
    return {
      message: "Hi there!",
    };
  },
  mounted() {
    alert("I have been mounted");
  },
};
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>
  </main>
</template>
