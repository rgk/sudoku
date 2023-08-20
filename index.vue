<script setup>
import { ref, onMounted } from 'vue';

import { update, restart } from './index.js';

onMounted(() => {
  console.log('soduku loaded');
});

</script>

<template>
  <div id="board">
    <div v-for="i in 9" class="section">
      <div v-for="j in 9" class="cell">
        <input @click="update" >
      </div>
    </div>
  </div>
</template>

<style scoped>
  #board {
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 2px;
  }

  .section, .cell {
    border: 1px solid black;
  }
</style>