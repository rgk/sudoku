<script setup>
import { ref, onMounted } from 'vue';

import { update } from './index.js';

</script>

<template>
    <div id="board" @click="update">
        <div v-for="i in 9" class="section">
            <div v-for="j in 9" class="cell">
                <input>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>