<script setup>
import { useTeamStore } from "@/stores/TeamStore";

let team = useTeamStore();
</script>

<template>
  <header class="flex justify-between">
    <div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="!team.spotsRemaining"
      >
        Add Member ({{ team.spotsRemaining }} Spots Left)
      </button>
    </div>

    <div>
      <div class="inline-flex items-center text-3xl relative">
        <!-- <img src="/smiley.png" alt="" class="mr-2" /> -->
        <h3>{{ team.name }} Team</h3>
        <div
          class="bg-green-400 w-6 h-6 text-xs text-white rounded-full flex justify-center items-center absolute -right-6 -top-6"
        >
          {{ team.spots }}
        </div>
      </div>
    </div>
  </header>
</template>
