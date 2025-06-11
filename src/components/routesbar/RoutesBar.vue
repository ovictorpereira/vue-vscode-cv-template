<template>
  <div class="routes-bar">
    <div class="routes-item">
      <ExplorerIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import ExplorerIcon from './icons/ExplorerIcon.vue'
</script>

<style scoped>
.routes-bar {
  width: 49px;
  background-color: var(--vscode-background);
  border: 1px solid var(--vscode-border);
}

.routes-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 2px solid blue;
  height: 48px;
}
</style>
