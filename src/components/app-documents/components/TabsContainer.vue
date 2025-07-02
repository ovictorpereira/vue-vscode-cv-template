<template>
  <ul class="tabs" :class="{ 'tabs-has-items': documents.length > 0 }">
    <li
      v-for="(item, index) in documents"
      :key="index"
      class="tab-item"
      :class="{ 'active-tab': item.isActive }"
      @click="openDocument(item.id)"
    >
      <span>{{ item.label }}</span>

      <div class="tab-close" @click.stop="removeDocument(item.id)">
        <svg width="9" height="9" viewBox="0 0 12 12">
          <path
            d="M7.5 6l3.7 3.7-1.5 1.5L6 7.5 2.3 11.2.8 9.7 4.5 6 .8 2.3 2.3.8 6 4.5 9.7.8l1.5 1.5L7.5 6z"
            fill="currentColor"
          />
        </svg>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDocumentsStore } from '@/stores/documents'

const documentsStore = useDocumentsStore()
const documents = computed(() => documentsStore.documents)

const openDocument = (id: number) => {
  documentsStore.openDocument(id)
}

const removeDocument = (id: number) => {
  documentsStore.removeDocument(id)
}
</script>

<style scoped>
.tabs {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  max-width: 100%;
  background-color: var(--vscode-background);
  /* border-bottom: 1px solid var(--vscode-border); */
}

.tabs-has-items {
  min-height: 35px;
}

.tab-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;

  list-style: none;
  font-size: 14px;
  padding: 7px 6px 7px 12px;
  cursor: pointer;
  border: 1px solid transparent;
  border-right: 1px solid var(--vscode-border);
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
  color: var(--vscode-inactive-icon);
  position: relative;
  margin-bottom: 0;
  z-index: 1;
}

.tab-close {
  margin-left: 6px;
  padding: 0px 4px;
  border-radius: 4px;
  cursor: pointer;
}

li:not(.active-tab) .tab-close svg {
  opacity: 0;
  transition: opacity 0.2s ease;
}

li:hover .tab-close svg {
  opacity: 1;
}

.tab-close:hover {
  background-color: #313232;
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
  border-bottom: 2px solid var(--vscode-tab-background) !important;
  margin-bottom: -2px;
  z-index: 2;
}
</style>
