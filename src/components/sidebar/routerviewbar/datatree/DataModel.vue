<template>
  <div
    class="data-model"
    :class="{
      folder: data.type === 'folder',
      file: data.type === 'file',
    }"
    @click.stop="nodeAction"
  >
    <div class="node-content">
      <FolderIcon v-if="data.type === 'folder'" :is-open="data.isOpen || false" />
      <FileIcon v-else :icon="data.icon || ''" />

      <span class="data-label">
        {{ data.label }}
      </span>
    </div>
  </div>

  <div v-if="data.type === 'folder' && data.children && data.isOpen" class="children-container">
    <div class="folder-root-line"></div>
    <div v-for="child in data.children" :key="child.id" class="tree-node">
      <DataModel :data="child" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TreeNode } from '@/types'
import { useDataTreeStore } from '@/stores/data-tree'
import { useDocumentsStore } from '@/stores/documents'
import FolderIcon from './icons/FolderIcon.vue'
import FileIcon from './icons/FileIcon.vue'
import DataModel from '@/components/sidebar/routerviewbar/datatree/DataModel.vue'

const dataTreeStore = useDataTreeStore()
const documentsStore = useDocumentsStore()

interface Props {
  data: TreeNode
}
const props = defineProps<Props>()

function nodeAction() {
  if (props.data.type === 'folder') {
    dataTreeStore.toggleNodeOpen(props.data.id)
  } else {
    documentsStore.addDocument({
      id: props.data.id,
      label: props.data.label,
      isActive: true,
    })
  }
}
</script>

<style scoped>
.data-model {
  cursor: pointer;
  user-select: none;
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: column;
  color: var(--vscode-active-icon);
}

.node-content {
  display: flex;
  align-items: center;
  height: 25px;
  padding-left: 14px;
  padding-right: 8px;
  gap: 4px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.node-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100vw;
  right: -100vw;
  bottom: 0;
  z-index: -1;
  background-color: transparent;
}

.data-model:hover .node-content::before {
  background-color: rgba(90, 93, 94, 0.31);
}

.active-item .node-content::before {
  background-color: rgba(90, 93, 94, 0.5);
}

.data-label {
  font-size: 13px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--vscode-active-icon);
}

.children-container {
  width: 100%;
  position: relative;
}

.folder-root-line {
  position: absolute;
  left: 20px;
  height: 100%;
  border-left: 1px solid var(--vscode-border);
}

.tree-node {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
}

/* .folder .data-label {
  font-weight: 500;
} */

/* .file .data-label {
  opacity: 0.9;
} */
</style>
