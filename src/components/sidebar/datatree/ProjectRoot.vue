<template>
  <div class="project-root" @click.stop="nodeAction">
    <FolderIcon :is-open="data.isOpen || false" />

    <span class="primary-label">
      {{ data.label.toUpperCase() }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { TreeNode } from '@/types'
import { useDataTreeStore } from '@/stores/data-tree'
import FolderIcon from './icons/FolderIcon.vue'

interface Props {
  data: TreeNode
}

defineProps<Props>()

const dataTreeStore = useDataTreeStore()

function nodeAction() {
  dataTreeStore.projectRoot.isOpen = !dataTreeStore.projectRoot.isOpen
}
</script>

<style scoped>
.project-root {
  cursor: pointer;
  user-select: none;
  width: 100%;
  height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-direction: row;
  color: var(--vscode-active-icon);
}

.primary-label {
  font-size: 11px;
  font-weight: 700;
}
</style>
