<template>
  <div
    class="data-model"
    :class="{
      folder: data.type === 'folder',
      file: data.type === 'file',
      'active-item': isActive,
    }"
    @click.stop="nodeAction"
  >
    <div class="node-content">
      <FolderIcon v-if="data.type === 'folder'" :is-open="data.isOpen || false" />
      <FileIcon v-else :icon="data.icon || ''" />

      <span class="data-label">
        {{ data.id === 1 ? data.label.toUpperCase() : data.label }}
      </span>
    </div>
  </div>

  <div v-if="data.type === 'folder' && data.children && data.isOpen" class="children-container">
    <div
      v-for="child in data.children"
      :key="child.id"
      class="tree-node"
      :style="{ paddingLeft: data.id === 1 ? '0.75rem' : '0' }"
    >
      <DataModel :data="child" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TreeNode } from '@/types'
import { useDataTreeStore } from '@/stores/data-tree'
import FolderIcon from './icons/FolderIcon.vue'
import FileIcon from './icons/FileIcon.vue'
import DataModel from '@/components/sidebar/datatree/DataModel.vue'

const dataTreeStore = useDataTreeStore()
const isActive = ref(false)

interface Props {
  data: TreeNode
}
const props = defineProps<Props>()

function nodeAction() {
  if (props.data.type === 'folder') {
    dataTreeStore.toggleNodeOpen(props.data.id)
  } else {
    isActive.value = true
  }
}
</script>

<style scoped>
.data-model {
  cursor: pointer;
  user-select: none;
  width: 100%;
  height: 22px;
  display: flex;
  flex-direction: column;
  color: #bdc6cf;
}

.node-content {
  display: flex;
  align-items: center;
  height: 22px;
  padding-left: 4px;
  gap: 4px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.node-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100vw; /* Estende muito para a esquerda */
  right: -100vw; /* Estende muito para a direita */
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 8px;
}

.children-container {
  width: 100%;
}

.tree-node {
  display: flex;
  flex-direction: column;
}

.folder .data-label {
  font-weight: 500;
}

.file .data-label {
  opacity: 0.9;
}
</style>
