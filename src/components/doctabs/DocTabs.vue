<template>
  <div class="documents">
    <ul class="tabs">
      <li
        v-for="(item, index) in documents"
        :key="index"
        :class="{ 'active-tab': item.isOpen }"
        @click="documentsStore.openDocument(item.id)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDocumentsStore } from '@/stores/documents'

const documentsStore = useDocumentsStore()
const documents = computed(() => documentsStore.documents)
</script>

<style scoped>
.documents {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--vscode-tab-background);
}

.tabs {
  border-bottom: 1px solid var(--vscode-border);
  margin: 0;
  padding: 0;
  background-color: var(--vscode-background);
}

.tabs li {
  display: inline-block;
  font-size: 14px;
  padding: 6px 12px;
  margin-bottom: -1px;
  cursor: pointer;
  border: 1px solid transparent;
  border-right: 1px solid var(--vscode-border);
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
  color: var(--vscode-inactive-icon);
}

.tabs li:hover {
  background-color: var(--vscode-tab-background) !important;
  border-bottom: 1px solid var(--vscode-border);
}

.active-tab {
  color: #fff !important;
  background-color: var(--vscode-tab-background) !important;
  border-color: var(--vscode-selected-blue) var(--vscode-border) var(--vscode-tab-background)
    var(--vscode-border) !important;
}
</style>
