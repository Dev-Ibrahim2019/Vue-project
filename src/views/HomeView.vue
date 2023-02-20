<script setup>
import { useFlash } from "@/composables/useFlash.js";

let { flash } = useFlash();
</script>

<template>
  <main>
    <p>
      <button @click="flash('Test', 'It Works!')">Click me</button>
    </p>
  </main>
</template>
