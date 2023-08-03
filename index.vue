<script setup>
import { ref, onMounted } from 'vue';

import { update } from './index.js';

</script>

<template>
    <div id="board" @click="update">
        <div class="section">
            <div class="cell">

            </div>
        </div>
    </div>
</template>