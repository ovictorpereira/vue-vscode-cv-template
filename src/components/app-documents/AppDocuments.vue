<template>
  <div class="documents">
    <TabsContainer />
    <div class="tab-content vertical-scrollbar">
      <NoneDocument v-if="documents.length === 0" />

      <MarkdownReader :content="activeDocument?.content" :readme="isReadmeActive" v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import TabsContainer from './components/TabsContainer.vue'
import NoneDocument from './components/NoneDocument.vue'
import MarkdownReader from './components/MarkdownReader.vue'
import { computed } from 'vue'
import { useDocumentsStore } from '@/stores/documents'

const documentsStore = useDocumentsStore()
const documents = computed(() => documentsStore.documents)

const activeDocument = computed(() => {
  return documents.value.find((doc) => doc.isActive)
})

const isReadmeActive = computed(() => {
  return activeDocument.value?.type === 'readme'
})
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
  overflow: auto;
  padding: 20px;
}
</style>
