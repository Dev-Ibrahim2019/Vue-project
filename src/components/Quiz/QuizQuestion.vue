<script setup>
import { ref } from "vue";
import TabbableTextarea from "@/components/TabbableTextarea.vue";
let comment = ref("Quiz Questions");
</script>

<template>
  <main>
    <form>
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px" />
    </form>
  </main>
</template>
