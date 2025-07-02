<template>
  <div class="loading-bar" :class="{ loading: documentIsLoading }"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDocumentsStore } from '@/stores/documents'

const documentsStore = useDocumentsStore()
const documentIsLoading = computed(() => documentsStore.documentIsLoading)
</script>

<style scoped>
.loading-bar {
  position: relative;
  width: 100%;
  height: 2px;
  background: transparent;
  overflow: hidden;
  margin: 0;
}

.loading-bar.loading::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 30%;
  min-width: 60px;
  max-width: 180px;
  background: var(--vscode-progressBar-background, #0e70c0);
  border-radius: 2px;
  animation: vscode-loading-bar 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes vscode-loading-bar {
  0% {
    left: -30%;
    opacity: 0.2;
  }
  10% {
    opacity: 1;
  }
  50% {
    left: 35%;
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0.2;
  }
}
</style>
