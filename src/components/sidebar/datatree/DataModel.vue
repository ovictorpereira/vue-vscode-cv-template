<template>
  <div class="data-model" @click="nodeAction()">
    <FolderIcon v-if="data.type === 'folder'" :is-open="data.isOpen || false" />
    <FileIcon v-else :icon="data.icon || ''" />

    <span class="data-label">
      {{ data.id === 1 ? data.label.toUpperCase() : data.label.toLowerCase() }}
    </span>
  </div>

  <template v-if="data.type === 'folder' && data.isOpen">
    <DataModel v-for="child in data.children" :key="child.id" :data="child" />
  </template>
</template>

<script setup lang="ts">
import type { TreeNode } from '@/types'
import { useDataTreeStore } from '@/stores/data-tree'
import FolderIcon from './icons/FolderIcon.vue'
import FileIcon from './icons/FileIcon.vue'
import DataModel from '@/components/sidebar/datatree/DataModel.vue'

const dataTreeStore = useDataTreeStore()

interface Props {
  data: TreeNode
}

const props = defineProps<Props>()

function nodeAction() {
  if (props.data.type === 'folder') {
    dataTreeStore.toggleNodeOpen(props.data.id)
  }
}
</script>

<style scoped>
.data-model {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  justify-content: flex-start;
}

.data-label {
  font-size: 11px;
  font-weight: 700;
}
</style>
