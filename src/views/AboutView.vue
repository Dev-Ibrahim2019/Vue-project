<script setup>
import { useFlash } from "@/composables/useFlash.js";

let { flash } = useFlash();
</script>

<template>
  <div>
    <p>
      <button @click="flash('Yay', 'It Works!', 'info')">Click Me</button>
    </p>
  </div>
</template>
