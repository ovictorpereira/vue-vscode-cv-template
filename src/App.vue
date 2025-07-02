<template>
  <VsCode />
</template>

<script setup lang="ts">
import VsCode from '@/views/VsCode.vue'
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  flex: 1;
  color: var(--vscode-foreground);
  position: relative;
  /* align-items: center; */
}

@media (max-width: 400px) {
  body {
    padding: 0;
  }
}
</style>
