<template>
  <div class="documents">
    <TabsContainer />
    <div class="tab-content">
      <NoneDocument v-if="documents.length === 0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TabsContainer from './TabsContainer.vue'
import NoneDocument from './NoneDocument.vue'
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
  overflow: auto;
}

.tab-content {
  flex: 1;
}
</style>
